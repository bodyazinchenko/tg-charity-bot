import { usersCollection } from '../db';
import { MongoUser } from '../types';

const fetchUserByTgId = async (id: number) => {
  // find user by userTgData.id
  const findedUser = await usersCollection.findOne({ 'userTgData.id': id });
  return findedUser as MongoUser;
};

export default fetchUserByTgId;
