import texts from '../texts';
import { MongoUser, UserFormState } from '../types';
import updateUserFormData from '../userActions/updateUserFormData';

const enterCurrentAptAction = async (msg: any, user: MongoUser) => {
  const currentAddrApt = msg.text.replace(/[^0-9а-яєіїА-ЯЄІЇ -\/]/g, '').trim();
  if (currentAddrApt) {
    msg.reply.text(texts.ENTER_RESIDENCE_ADDRESS);
    // save user current apt
    await updateUserFormData(msg.chat.id, {
      ...user.userFormData,
      currentAddrApt: currentAddrApt,
      formState: UserFormState.ENTER_RESIDENCE_ADDRESS // go to another step
    });
  } else {
    msg.reply.text(texts.INVALID_CURRENT_APT);
  }
};

export default enterCurrentAptAction;
