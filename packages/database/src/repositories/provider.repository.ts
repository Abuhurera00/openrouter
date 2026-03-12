import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Provider, ProviderDocument } from '../schemas';
import { BaseRepository } from './base.repository';

@Injectable()
export class ProviderRepository extends BaseRepository<ProviderDocument> {
  constructor(
    @InjectModel(Provider.name) private readonly providerModel: Model<ProviderDocument>,
  ) {
    super(providerModel);
  }
}