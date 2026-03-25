import { JwtAuthGuard } from '@/common/guards/jwt-auth.guard';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { CurrentUser } from '@/common/decorators/current-user.decorator';
import { ApiOperation } from '@nestjs/swagger';

@Controller('payments')
export class PaymentsController {
    constructor(
        private readonly paymentsService: PaymentsService
    ) { }

    @UseGuards(JwtAuthGuard)
    @Post('onramp')
    onramp(
        @CurrentUser() user
    ) {
        return this.paymentsService.onramp(user._id);
    }
}
