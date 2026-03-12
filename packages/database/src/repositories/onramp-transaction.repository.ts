import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  OnrampTransaction,
  OnrampTransactionDocument,
} from '../schemas';
import { BaseRepository } from './base.repository';

@Injectable()
export class OnrampTransactionRepository extends BaseRepository<OnrampTransactionDocument> {
  constructor(
    @InjectModel(OnrampTransaction.name)
    private readonly txModel: Model<OnrampTransactionDocument>,
  ) {
    super(txModel);
  }
}