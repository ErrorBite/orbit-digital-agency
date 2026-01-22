import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import ProjectModel from '@/models/Project';

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const projects = await ProjectModel.find({}).sort({ featured: -1, createdAt: -1 });

    return NextResponse.json(
      {
        success: true,
        message: 'Projects retrieved successfully',
        data: projects,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Projects fetch error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fetch projects',
        error: 'Internal server error',
      },
      { status: 500 }
    );
  }
}
