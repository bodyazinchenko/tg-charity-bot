import { MongoUser, UserFormState } from '../types';
import updateUserFormData from '../userActions/updateUserFormData';

const enterFullNameAction = async (msg: any, user: MongoUser) => {
  console.log('msg', msg);
  // @TODO: add validation and error validation message;

  // save user full name
  await updateUserFormData(msg.chat.id, {
    ...user.userFormData,
    fullName: msg.text,
    formState: UserFormState.ENTER_BIRTHDAY_DATE // go to another step
  });
};

export default enterFullNameAction;
