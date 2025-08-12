import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, StrategyOptions } from 'passport-facebook';
import { UsersService } from '../users/users.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
  constructor(
    private usersService: UsersService,
    private configService: ConfigService,
  ) {
    const clientID = configService.get<string>('FACEBOOK_APP_ID');
    const clientSecret = configService.get<string>('FACEBOOK_APP_SECRET');
    const callbackURL = configService.get<string>('FACEBOOK_CALLBACK_URL') ?? 'http://localhost:3001/auth/facebook/callback';

    if (!clientID || !clientSecret || clientID === 'your-facebook-app-id' || clientSecret === 'your-facebook-app-secret') {
      console.warn('Facebook OAuth credentials not configured. Facebook login will be disabled.');
      // Use dummy credentials to prevent constructor error
      super({
        clientID: 'dummy',
        clientSecret: 'dummy',
        callbackURL: 'http://localhost:3001/auth/facebook/callback',
        scope: ['email'],
        profileFields: ['emails', 'name'],
      });
      return;
    }

    const options: StrategyOptions = {
      clientID,
      clientSecret,
      callbackURL,
      scope: ['email'],
      profileFields: ['emails', 'name'],
    };

    super(options);
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: (err: any, user?: any) => void,
  ): Promise<any> {
    try {
      const user = await this.usersService.findOrCreateSocialUser(
        profile,
        'facebook',
      );
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  }
}
