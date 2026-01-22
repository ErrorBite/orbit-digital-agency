import mongoose, { Schema, Document } from 'mongoose';
import { Project as ProjectType } from '@/types';

export interface IProject extends Document, ProjectType {}

const projectSchema = new Schema<IProject>(
  {
    title: {
      type: String,
      required: [true, 'Project title is required'],
      trim: true,
      maxlength: [100, 'Title cannot exceed 100 characters'],
    },
    description: {
      type: String,
      required: [true, 'Project description is required'],
      trim: true,
      minlength: [20, 'Description must be at least 20 characters'],
    },
    image: {
      type: String,
      required: [true, 'Project image URL is required'],
    },
    tags: {
      type: [String],
      default: [],
      validate: {
        validator: (tags: string[]) => tags.length <= 5,
        message: 'Cannot have more than 5 tags',
      },
    },
    link: {
      type: String,
      required: [true, 'Project link is required'],
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const ProjectModel = mongoose.models.Project || mongoose.model<IProject>('Project', projectSchema);

export default ProjectModel;
