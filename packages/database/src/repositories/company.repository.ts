import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Company, CompanyDocument } from '../schemas';
import { BaseRepository } from './base.repository';

@Injectable()
export class CompanyRepository extends BaseRepository<CompanyDocument> {
  constructor(
    @InjectModel(Company.name) private readonly companyModel: Model<CompanyDocument>,
  ) {
    super(companyModel);
  }
}