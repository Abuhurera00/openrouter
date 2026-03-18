import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
// import { UserRepository } from '@workspace/database';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    // private readonly userRepo: UserRepository,
  ) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();

    const token = req.cookies?.auth;
    if (!token) {
      throw new UnauthorizedException('Token missing');
    }

    try {
      const decoded = await this.jwtService.verifyAsync(token);

      // const user = await this.userRepo.findById(decoded._id, { password: 0 });

      // if (!user) throw new UnauthorizedException('User not found');

      req.user = decoded;
      return true;
    } catch (e) {
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}