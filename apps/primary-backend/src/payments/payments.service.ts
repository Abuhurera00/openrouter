import { Injectable } from '@nestjs/common';
import { OnrampTransactionRepository, TransactionStatus, UserRepository } from '@workspace/database';
import mongoose from 'mongoose';

const ONRAMP_AMOUNT = 1000;

@Injectable()
export class PaymentsService {
    constructor(
        private readonly userRepo: UserRepository,
        private readonly onrampTransactionRepo: OnrampTransactionRepository
    ) { }

    async onramp(userId: string) {
        const user = await this.userRepo.updateOne(
            { _id: userId },
            { $inc: { credits: ONRAMP_AMOUNT } },
        );
        await this.onrampTransactionRepo.create({
            userId: new mongoose.Types.ObjectId(userId),
            amount: ONRAMP_AMOUNT,
            status: TransactionStatus.SUCCESS,
        });
        return {
            data: {
                creditsAdded: ONRAMP_AMOUNT,
                totalCredits: user?.credits
            },
            message: `Successfully added ${ONRAMP_AMOUNT} credits to your account.`,
        };
    }
}
