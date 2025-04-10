import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaClient, Prisma } from '@prisma/client';

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
      const user = await this.prisma.users.create({
        data: {
          name,
          username,
          email,
          role: {
            connect: { id: 2 },
          },
          password,
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

      return {
        statusCode: 201,
        message: 'User registered successfully.',
        data: user,
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
}
