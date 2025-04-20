/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaClient, Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UsersLoginSignupService {
  private prisma = new PrismaClient();

  async signUp(
    name: string,
    username: string,
    email: string,
    social_media_platform: string[],
    password: string,
  ): Promise<any> {
    try {
      const hashedPassword: string = await bcrypt.hash(password, 10);
      const user = await this.prisma.users.create({
        data: {
          name,
          username,
          email,
          role: {
            connect: { id: 2 },
          },
          password: hashedPassword,
        },
      });

      for (const platformId of social_media_platform) {
        const platform = await this.prisma.social_media_platform.findUnique({
          where: { id: Number(platformId) },
        });

        if (platform) {
          await this.prisma.users_social_media.create({
            data: {
              user_id: user.id,
              social_media_id: platform.id,
            },
          });
        }
      }

      const user_data = await this.prisma.users.findUnique({
        where: { id: user.id },
      });

      const secret = process.env.JWT_SECRET as string;
      const token = jwt.sign(
        {
          id: user_data?.id,
          email: user_data?.email,
          role: user_data?.role_id,
        },
        secret,
      );

      return {
        statusCode: 200,
        message: 'User registered successfully.',
        role: user.role_id,
        access_token: token,
      };
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        const targetFields = error.meta?.target as string[];
        const fieldName = targetFields.join(', ');
        const capitalizedFieldName =
          fieldName.charAt(0).toUpperCase() + fieldName.slice(1);

        throw new HttpException(
          {
            statusCode: HttpStatus.CONFLICT,
            message: `${capitalizedFieldName} already exists. Please use a different ${fieldName}.`,
          },
          HttpStatus.CONFLICT,
        );
      }
      throw new HttpException(
        {
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'Something went wrong during user registration.',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async login(email: string, password: string): Promise<any> {
    try {
      const user = await this.prisma.users.findUnique({
        where: { email },
      });

      if (!user) {
        return {
          statusCode: 401,
          message: 'Email not exists. Please sign up first.',
          data: null,
        };
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return {
          statusCode: 401,
          message: 'Invalid email or password.',
          data: null,
        };
      }
      const secret = process.env.JWT_SECRET as string;
      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
          role: user.role_id,
        },
        secret,
      );

      return {
        statusCode: 200,
        message: 'Login successful.',
        data: user,
        access_token: token,
        role: user.role_id,
      };
    } catch (error) {
      console.log('Getting Error while login : ', error);
      throw new HttpException(
        {
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'Something went wrong during login.',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
