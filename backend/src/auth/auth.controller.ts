import { Controller, Request, Post, UseGuards, Get, Body, UnauthorizedException, Response } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const email = loginDto.email?.trim()?.toLowerCase();
    const password = loginDto.password;
    
    if (!email || !password) {
      throw new UnauthorizedException('Email and password are required');
    }
    
    const user = await this.authService.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.authService.login(user);
  }

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    const sanitizedData = {
      name: registerDto.name?.trim(),
      email: registerDto.email?.trim()?.toLowerCase(),
      password: registerDto.password
    };
    
    if (!sanitizedData.name || !sanitizedData.email || !sanitizedData.password) {
      throw new UnauthorizedException('All fields are required');
    }
    
    return await this.authService.register(sanitizedData);
  }

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Request() req) {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Request() req, @Response() res) {
    try {
      const result = await this.authService.googleLogin(req);
      const token = result.access_token;
      const user = encodeURIComponent(JSON.stringify(result.user));
      
      // Redirect to frontend with token
      res.redirect(`http://localhost:3000/auth/callback?token=${token}&user=${user}`);
    } catch (error) {
      res.redirect('http://localhost:3000/login?error=google_auth_failed');
    }
  }

  @Get('facebook')
  @UseGuards(AuthGuard('facebook'))
  async facebookAuth(@Request() req) {}

  @Get('facebook/callback')
  @UseGuards(AuthGuard('facebook'))
  async facebookAuthRedirect(@Request() req, @Response() res) {
    try {
      const result = await this.authService.facebookLogin(req);
      const token = result.access_token;
      const user = encodeURIComponent(JSON.stringify(result.user));
      
      // Redirect to frontend with token
      res.redirect(`http://localhost:3000/auth/callback?token=${token}&user=${user}`);
    } catch (error) {
      res.redirect('http://localhost:3000/login?error=facebook_auth_failed');
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}