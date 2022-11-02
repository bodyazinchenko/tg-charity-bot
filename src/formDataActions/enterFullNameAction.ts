import texts from '../texts';
import { MongoUser, UserFormState } from '../types';
import updateUserFormData from '../userActions/updateUserFormData';

const enterFullNameAction = async (msg: any, user: MongoUser) => {
  const fullName = msg.text.replace(/[^а-яєіїА-ЯЄІЇ ']/g, '').trim();
  if (fullName.length < 50) {
    msg.reply.text(texts.ENTER_BIRTHDAY_DATE);
    // save user full name
    await updateUserFormData(msg.chat.id, {
      ...user.userFormData,
      fullName: fullName,
      formState: UserFormState.ENTER_BIRTHDAY_DATE // go to another step
    });
  } else {
    msg.reply.text(texts.INVALID_FULL_NAME);
  }
};

export default enterFullNameAction;
