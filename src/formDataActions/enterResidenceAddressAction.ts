import isValidResidenceAddress from '../helpers/isValidResidenceAddress';
import texts from '../texts';
import { MongoUser, UserFormState } from '../types';
import updateUserFormData from '../userActions/updateUserFormData';

const enterResidenceAddressAction = async (msg: any, user: MongoUser) => {
  const residenceAddress = msg.text;
  if (isValidResidenceAddress(residenceAddress)) {
    msg.reply.text(texts.ENTER_DOCUMENT_PHOTO);
    // save user full name
    await updateUserFormData(msg.chat.id, {
      ...user.userFormData,
      residenceAddress: residenceAddress,
      formState: UserFormState.ENTER_DOCUMENT_PHOTO // go to another step
    });
  } else {
    msg.reply.text(texts.INVALID_RESIDENCE_ADDRESS);
  }
};

export default enterResidenceAddressAction;
