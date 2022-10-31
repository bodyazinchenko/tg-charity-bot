import isValidPhoneNumber from '../helpers/isValidPhoneNumber';
import texts from '../texts';
import { MongoUser, UserFormState } from '../types';
import updateUserFormData from '../userActions/updateUserFormData';

const enterPhoneNumberAction = (msg: any, user: MongoUser) => {
  const userPhone = msg.text;
  if (isValidPhoneNumber(userPhone)) {
    msg.reply.text(texts.ENTER_FULL_NAME);
    // set this phone to user form data and change state to next step
    updateUserFormData(msg.chat.id, {
      ...user.userFormData,
      phoneNumber: userPhone,
      formState: UserFormState.ENTER_FULL_NAME // go to another step
    });
  } else {
    msg.reply.text(texts.INVALID_PHONE_NUMBER);
  }
};

export default enterPhoneNumberAction;
