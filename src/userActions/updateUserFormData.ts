import { UserFormData } from '../types';
import { usersCollection } from '../db';

const updateUserFormData = async (
  userTgId: number,
  userFormData: UserFormData
) => {
  const filter = { 'userTgData.id': userTgId };
  return usersCollection.updateOne(filter, {
    $set: {
      userFormData
    }
  });
};

export default updateUserFormData;
