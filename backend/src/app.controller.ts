import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getRoot() {
    return {
      message: 'Welcome to Job Test IS Dev Backend!',
      version: '1.0.0',
      timestamp: new Date().toISOString()
    };
  }
}
