import { Controller, Get, Post, UploadedFile } from '@nestjs/common';
import { SupabaseService } from './supabase.service';

@Controller('supabase')
export class SupabaseController {
  constructor(private readonly supabaseService: SupabaseService) {}

  // @Post('upload')
  // @UseInterceptors(FileInterceptor('file'))
  // async uploadFile(@UploadedFile() file: Express.Multer.File) {
  //   const result = await this.supabaseService.uploadFile('your-bucket-name', file);
  //   return { url: result.Key };
  // }

  @Get('homepage_image')
  async homepageImage() {
    console.log('asfsfsa');
  }
}
