import texts from '../texts';
import { MongoUser, UserFormState } from '../types';
import updateUserFormData from '../userActions/updateUserFormData';

const enterCurrentStreetAction = async (msg: any, user: MongoUser) => {
  const currentAddrStreet = msg.text
    .replace(/[^0-9а-яєіїА-ЯЄІЇ -']/g, '')
    .trim();
  if (currentAddrStreet) {
    msg.reply.text(texts.ENTER_CURRENT_BUILDING);
    // save user current street
    await updateUserFormData(msg.chat.id, {
      ...user.userFormData,
      currentAddrStreet: currentAddrStreet,
      formState: UserFormState.ENTER_CURRENT_BUILDING // go to another step
    });
  } else {
    msg.reply.text(texts.INVALID_CURRENT_STREET);
  }
};

export default enterCurrentStreetAction;
