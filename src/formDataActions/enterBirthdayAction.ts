import texts from '../texts';
import isValidBirthday from '../helpers/isValidBirthdayDate';
import { MongoUser, UserFormState } from '../types';
import updateUserFormData from '../userActions/updateUserFormData';

const enterBirthdayAction = async (msg: any, user: MongoUser) => {
  const birthdayDay = msg.text;
  const { isValid, message } = isValidBirthday(birthdayDay);
  if (isValid) {
    msg.reply.text(texts.HINT_CURRENT_ADDRESS);
    msg.reply.text(texts.ENTER_CURRENT_CITY);
    // save user birthday
    await updateUserFormData(msg.chat.id, {
      ...user.userFormData,
      dateOfBirthday: birthdayDay,
      formState: UserFormState.ENTER_CURRENT_CITY // go to another step
    });
  } else {
    msg.reply.text(message);
  }
};

export default enterBirthdayAction;
