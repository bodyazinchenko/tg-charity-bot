import { MongoClient } from 'mongodb';

export const DB_NAME = 'Telegram';
const mongoClient = new MongoClient(process.env.MONGODB as string);
export const usersCollection = mongoClient.db(DB_NAME).collection('users');

export default mongoClient;
