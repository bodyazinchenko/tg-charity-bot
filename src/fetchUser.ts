import { usersCollection } from './db';
import { User } from './types';

const fetchUser = async (user: User) => {
  const filter = { id: user.id };
  // create user if user doesnt exist
  await usersCollection.updateOne(filter, { $set: user }, { upsert: true });
  // find user by id
  const findedUser = await usersCollection.findOne(filter);
  return findedUser;
};

export default fetchUser;
