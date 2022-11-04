import texts from '../texts';
import { MongoUser, UserFormState } from '../types';
import updateUserFormData from '../userActions/updateUserFormData';

const enterCurrentBuildingAction = async (msg: any, user: MongoUser) => {
  const currentAddrBuilding = msg.text
    .replace(/[^0-9а-яєіїА-ЯЄІЇ -\/]/g, '')
    .trim();
  if (currentAddrBuilding) {
    msg.reply.text(texts.ENTER_CURRENT_APT);
    // save user current building
    await updateUserFormData(msg.chat.id, {
      ...user.userFormData,
      currentAddrBuilding: currentAddrBuilding,
      formState: UserFormState.ENTER_CURRENT_APT // go to another step
    });
  } else {
    msg.reply.text(texts.INVALID_CURRENT_BUILDING);
  }
};

export default enterCurrentBuildingAction;
