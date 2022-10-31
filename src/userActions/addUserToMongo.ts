import { usersCollection } from '../db';
import { UserTelegramData, UserFormState } from '../types';

// This method creates new user in mongo db ad write user telegram data and form initial state
const addUserToMongo = async (userTgData: UserTelegramData) => {
  // this methods don't create duplicate user if userTgData.id already exist in our collection
  await usersCollection.updateOne(
    { 'userTgData.id': userTgData.id },
    {
      $set: {
        userTgData, // add to mongo user telegram info
        userFormData: {
          // add to mongo form data initial state
          formState: UserFormState.ENTER_PHONE_NUMBER
        }
      }
    },
    { upsert: true }
  );
};

export default addUserToMongo;
