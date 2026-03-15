import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Model as llmModel, ModelDocument } from '../schemas';
import { BaseRepository } from './base.repository';

@Injectable()
export class ModelRepository extends BaseRepository<ModelDocument> {
  constructor(
    @InjectModel(llmModel.name) private readonly modelModel: Model<ModelDocument>,
  ) {
    super(modelModel);
  }
}