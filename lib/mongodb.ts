import { MongoClient } from 'mongodb';
const uri = process.env.MONGODB_URI;
const options = {};
if (!uri) {
  throw new Error('Please add your Mongo URI to .env.local');
}
const client = new MongoClient(uri, options);
let clientPromise: Promise<MongoClient>;
if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable to persist the MongoClient
  if (!(global as any).mongoClientPromise) {
    (global as any).mongoClientPromise = client.connect();
  }
  clientPromise = (global as any).mongoClientPromise;
} else {
  // In production, connect once and reuse the client
  clientPromise = client.connect();
}
export default clientPromise;