import mongoose, { Schema, Document } from 'mongoose';
import { Service as ServiceType } from '@/types';

export interface IService extends Document, ServiceType {}

const serviceSchema = new Schema<IService>(
  {
    title: {
      type: String,
      required: [true, 'Service title is required'],
      trim: true,
      maxlength: [100, 'Title cannot exceed 100 characters'],
    },
    description: {
      type: String,
      required: [true, 'Service description is required'],
      trim: true,
      minlength: [20, 'Description must be at least 20 characters'],
    },
    iconName: {
      type: String,
      required: [true, 'Icon name is required'],
      trim: true,
    },
    priceRange: {
      type: String,
      required: [true, 'Price range is required'],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const ServiceModel = mongoose.models.Service || mongoose.model<IService>('Service', serviceSchema);

export default ServiceModel;
