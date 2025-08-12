import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findByEmail(email: string): Promise<User | null> {
    if (!email || typeof email !== 'string' || email.length > 255) {
      return null;
    }
    // Sanitize email input
    const sanitizedEmail = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sanitizedEmail)) {
      return null;
    }
    try {
      return await this.usersRepository.findOne({ 
        where: { email: sanitizedEmail },
        select: ['id', 'name', 'email', 'password', 'provider', 'createdAt']
      });
    } catch (error) {
      return null;
    }
  }

  async findById(id: number): Promise<User | null> {
    if (!id || typeof id !== 'number' || id <= 0 || !Number.isInteger(id)) {
      return null;
    }
    try {
      return await this.usersRepository.findOne({ 
        where: { id },
        select: ['id', 'name', 'email', 'provider', 'createdAt']
      });
    } catch (error) {
      return null;
    }
  }

  async create(userData: Partial<User>): Promise<User> {
    if (!userData.email || !userData.name) {
      throw new BadRequestException('Email and name are required');
    }
    
    const sanitizedEmail = userData.email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sanitizedEmail)) {
      throw new BadRequestException('Invalid email format');
    }
    
    const newUserData: Partial<User> = {
      name: userData.name.trim(),
      email: sanitizedEmail,
      provider: userData.provider || 'local',
      googleId: userData.googleId,
      facebookId: userData.facebookId
    };
    
    if (userData.password) {
      newUserData.password = await bcrypt.hash(userData.password, 10);
    }
    
    const user = this.usersRepository.create(newUserData);
    return await this.usersRepository.save(user);
  }

  async findOrCreateSocialUser(profile: any, provider: string): Promise<User> {
    try {
      if (!profile?.emails?.[0]?.value) {
        throw new BadRequestException('Email not provided by social provider');
      }
      
      // Validate provider
      if (!['google', 'facebook'].includes(provider)) {
        throw new BadRequestException('Invalid social provider');
      }
      
      // Sanitize profile data
      const email = profile.emails[0].value.trim().toLowerCase();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw new BadRequestException('Invalid email from social provider');
      }

      let user = await this.findByEmail(email);

      if (!user) {
        const name = provider === 'google' 
          ? profile.displayName || `${profile.name?.givenName || ''} ${profile.name?.familyName || ''}`.trim()
          : `${profile.name?.givenName || ''} ${profile.name?.familyName || ''}`.trim() || profile.displayName;
        
        const sanitizedName = (name || 'Social User').trim().substring(0, 255);
        const socialId = profile.id ? profile.id.toString().substring(0, 255) : null;

        user = await this.create({
          name: sanitizedName,
          email: email,
          provider: provider,
          googleId: provider === 'google' ? socialId : undefined,
          facebookId: provider === 'facebook' ? socialId : undefined,
          password: undefined,
        });
      }

      return user;
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new BadRequestException('Failed to create social user');
    }
  }
}
