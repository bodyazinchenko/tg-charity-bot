import isValidBirthday from '../helpers/isValidBirthday';
import texts from '../texts';
import { MongoUser, UserFormState } from '../types';
import updateUserFormData from '../userActions/updateUserFormData';

const enterBirthdayAction = async (msg: any, user: MongoUser) => {
  const dateOfBirthday = msg.text;
  if (isValidBirthday(dateOfBirthday)) {
    const checkBirthday = dateOfBirthday.split('.');
    if (
      +checkBirthday[0] >= 1 &&
      +checkBirthday[0] < 31 &&
      +checkBirthday[1] >= 1 &&
      +checkBirthday[1] <= 12 &&
      +checkBirthday[2] >= 1930 &&
      +checkBirthday[2] <= 2007
    ) {
      msg.reply.text(texts.ENTER_CURRENT_ADDRESS);
      // save user full name
      await updateUserFormData(msg.chat.id, {
        ...user.userFormData,
        dateOfBirthday: dateOfBirthday,
        formState: UserFormState.ENTER_CURRENT_ADDRESS // go to another step
      });
    } else {
      msg.reply.text(texts.INVALID_BIRTHDAY_DATE);
    }
  } else {
    msg.reply.text(texts.INVALID_BIRTHDAY_DATE);
  }
};

export default enterBirthdayAction;
