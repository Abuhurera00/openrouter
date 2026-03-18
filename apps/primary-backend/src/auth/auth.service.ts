import { ConflictException, Injectable } from '@nestjs/common';
import { UserRepository } from '@workspace/database';
import { AuthUserDto } from './dto/auth-user.dto';
import bcrypt from 'bcryptjs';
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(
        private readonly userRepo: UserRepository,
        private readonly jwtService: JwtService
    ) { }

    async signUp(dto: AuthUserDto) {
        try {
            const { email, password } = dto;

            const existedUser = await this.userRepo.findOne({ email });
            if (existedUser) {
                throw new ConflictException("User with this email or username already exists");
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const user = await this.userRepo.create({
                email,
                password: hashedPassword,
            });

            const createdUser = await this.userRepo.findById(user._id, { password: 0 });

            if (!createdUser) {
                throw new ConflictException("User creation failed");
            }
            return createdUser;
        } catch (err) {
            if (err.code === 11000) {
                throw new ConflictException('Email already exists');
            }
            throw err;
        }
    }


    async signIn(dto: AuthUserDto) {
        const { email, password } = dto;

        const user = await this.userRepo.findOne({ email });
        if (!user) {
            throw new ConflictException("Invalid email");
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new ConflictException("Invalid password");
        }

        // Create JWT token
        const token = this.jwtService.sign({
            _id: user._id,
            email: user.email,
        });

        const { password: _, ...userWithoutPassword } = user;

        return {
            token,
            user: userWithoutPassword
        }
    }

    async getUserDetails(id: string) {
        const user = await this.userRepo.findById(id, { password: 0 });
        if (!user) {
            throw new ConflictException("User not found");
        }
        return user;
    }

}
