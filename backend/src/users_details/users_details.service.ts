/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UsersDetailsService {
  private prisma = new PrismaClient();

  async profile(req: any) {
    const token = req.cookies['user_token'];

    if (!token) {
      throw new Error('No token found in cookies');
    }

    try {
      const decoded: any = jwt.verify(token, process.env.JWT_SECRET);
      const user = await this.prisma.users.findUnique({
        where: { id: decoded.id },
      });

      return user;
    } catch (error) {
      console.error('Error decoding the token or fetching user data:', error);
      throw new Error('Invalid or expired token');
    }
  }
}
