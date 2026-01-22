import mongoose, { Connection } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define MONGODB_URI environment variable');
}

interface GlobalWithMongoose extends Global {
  mongoose: {
    conn: Connection | null;
    promise: Promise<Connection> | null;
  };
}

declare const global: GlobalWithMongoose;

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB(): Promise<Connection> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 5000,
    };

    cached.promise = mongoose.connect(MONGODB_URI!, opts).then((result) => {
      return result.connection;
    }).catch((error) => {
      cached.promise = null; // Clear the promise on error so we can retry
      throw error;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connectDB;
