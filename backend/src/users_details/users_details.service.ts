/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UsersDetailsService {
  private prisma = new PrismaClient();

  async profile(req: any) {
    const token = req.cookies['user_token'];

    if (!token) {
      throw new HttpException(
        'No token found in cookies',
        HttpStatus.UNAUTHORIZED,
      );
    }

    try {
      const decoded: any = jwt.verify(token, process.env.JWT_SECRET);
      const user = await this.prisma.users.findUnique({
        where: { id: decoded.id },
        include: {
          additional_details: true,
          social_media: {
            include: {
              social_media: true,
            },
          },
        },
      });

      return {
        user,
      };
    } catch (error) {
      console.error('Error decoding the token or fetching user data:', error);
      if (error.name === 'JsonWebTokenError') {
        throw new HttpException('Invalid token', HttpStatus.FORBIDDEN);
      }

      if (error.name === 'TokenExpiredError') {
        throw new HttpException('Token has expired', HttpStatus.FORBIDDEN);
      }

      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async additionalProfileDetails(
    google_drive_link: string,
    user_id: number,
  ): Promise<any> {
    try {
      const profile_additional_details = await this.prisma.users_additional_details.findUnique({
        where: { user_id: user_id },
      });

      if (!profile_additional_details) {
        await this.prisma.users_additional_details.create({
          data: {
            user_id: user_id,
            google_drive_link: google_drive_link,
          },
        });

        return {
          statusCode: 200,
          message: 'Profile Details added successfully.',
        };
      } else {
        await this.prisma.users_additional_details.update({
          where: { user_id: user_id },
          data: {
            google_drive_link: google_drive_link,
          },
        });

        return {
          statusCode: 200,
          message: 'Profile Details updated successfully.',
        };
      }
    } catch (error) {
      console.log(
        'Getting Error while saving profile additional details: ',
        error,
      );
      throw new HttpException(
        {
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'Something went wrong during profile update.',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async profileUpdate(
    user_id: number,
    name: string,
    username: string,
    email: string,
    social_media_platform: string[],
    password: string,
  ): Promise<any> {
    try {
      const profile_update = await this.prisma.users.findUnique({
        where: { id: user_id },
      });
  
      if (!profile_update) {
        throw new HttpException(
          {
            statusCode: HttpStatus.NOT_FOUND,
            message: 'User not found.',
          },
          HttpStatus.NOT_FOUND,
        );
      }
  
      const updatedData: any = {};
  
      if (name) updatedData.name = name;
      if (username) updatedData.username = username;
      if (email) updatedData.email = email;
      if (password) {
        const hashedPassword: string = await bcrypt.hash(password, 10);
        updatedData.password = hashedPassword;
      }
  
      if (Object.keys(updatedData).length > 0) {
        await this.prisma.users.update({
          where: { id: user_id },
          data: updatedData,
        });
      }
  
      // Handle social media platforms update
      if (social_media_platform && social_media_platform.length > 0) {
        await this.prisma.users_social_media.deleteMany({
          where: { user_id: user_id },
        });
  
        for (const platformId of social_media_platform) {
          const platform = await this.prisma.social_media_platform.findUnique({
            where: { id: Number(platformId) },
          });
  
          if (platform) {
            await this.prisma.users_social_media.create({
              data: {
                user_id: user_id,
                social_media_id: platform.id,
              },
            });
          }
        }
      }
  
      return {
        statusCode: 200,
        message: 'Profile Details updated successfully.',
      };
    } catch (error) {
      console.log('Error while updating profile data: ', error);
      throw new HttpException(
        {
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'Something went wrong during profile update.',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }  
}
