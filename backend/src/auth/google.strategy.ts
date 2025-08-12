import { Injectable, BadRequestException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback, StrategyOptions } from 'passport-google-oauth20';
import { UsersService } from '../users/users.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    private usersService: UsersService,
    private configService: ConfigService,
  ) {
    const clientID = configService.get<string>('GOOGLE_CLIENT_ID');
    const clientSecret = configService.get<string>('GOOGLE_CLIENT_SECRET');
    const callbackURL = configService.get<string>('GOOGLE_CALLBACK_URL') ?? 'http://localhost:3001/auth/google/callback';

    if (!clientID || !clientSecret || clientID === 'your-google-client-id' || clientSecret === 'your-google-client-secret') {
      console.warn('Google OAuth credentials not configured. Google login will be disabled.');
      // Use dummy credentials to prevent constructor error
      super({
        clientID: 'dummy',
        clientSecret: 'dummy',
        callbackURL: 'http://localhost:3001/auth/google/callback',
        scope: ['email', 'profile'],
      });
      return;
    }

    const options: StrategyOptions = {
      clientID,
      clientSecret,
      callbackURL,
      scope: ['email', 'profile'],
    };

    super(options);
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    try {
      const user = await this.usersService.findOrCreateSocialUser(profile, 'google');
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  }
}
