import { Controller, Get, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { GoogleService } from './google.service';

@Controller('api/auth/google')
export class GoogleController {
  constructor(private readonly googleService: GoogleService) {}

  // Initiates OAuth2 flow
  @Get()
  async redirectToGoogleAuth(@Res() res: Response) {
    try {
      const authUrl = this.googleService.generateAuthUrl();
      res.redirect(authUrl);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Handles the OAuth2 callback
  @Post('callback')
  async handleCallback(@Body() body: { code: string }, @Res() res: Response) {
    const { code } = body;
    try {
      const tokens = await this.googleService.getTokens(code);
      console.log('Google Tokens:', tokens);

      // Store tokens in the session or database for later use
      res.status(200).json({ success: true, tokens });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}
