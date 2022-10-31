import isValidCurrentAddress from '../helpers/isValidCurrentAddress';
import texts from '../texts';
import { MongoUser, UserFormState } from '../types';
import updateUserFormData from '../userActions/updateUserFormData';

const enterCurrentAddressAction = async (msg: any, user: MongoUser) => {
  const currentAddress = msg.text;
  if (isValidCurrentAddress(currentAddress)) {
    msg.reply.text(texts.ENTER_RESIDENCE_ADDRESS);
    // save user full name
    await updateUserFormData(msg.chat.id, {
      ...user.userFormData,
      currentAddress: currentAddress,
      formState: UserFormState.ENTER_RESIDENCE_ADDRESS // go to another step
    });
  } else {
    msg.reply.text(texts.INVALID_CURRENT_ADDRESS);
  }
};

export default enterCurrentAddressAction;
