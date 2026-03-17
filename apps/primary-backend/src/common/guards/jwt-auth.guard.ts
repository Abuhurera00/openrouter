import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDocument } from '@workspace/database';
import { Model } from 'mongoose';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private userModel: Model<UserDocument>,
  ) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();

    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer '))
      throw new UnauthorizedException('Token missing');

    const token = authHeader.split(' ')[1];

    try {
      const decoded = await this.jwtService.verifyAsync(token);

      const user = await this.userModel
        .findById(decoded.userId)
        .select('-password');

      if (!user) throw new UnauthorizedException('User not found');

      req.user = user;
      return true;
    } catch (e) {
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}