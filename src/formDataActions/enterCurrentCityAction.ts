import texts from '../texts';
import { MongoUser, UserFormState } from '../types';
import updateUserFormData from '../userActions/updateUserFormData';

const enterCurrentCityAction = async (msg: any, user: MongoUser) => {
  const currentAddrCity = msg.text.replace(/[^а-яєіїА-ЯЄІЇ -']/g, '').trim();
  if (currentAddrCity == 'Так') currentAddrCity == 'Zaporizhzhya';
  if (currentAddrCity) {
    msg.reply.text(texts.ENTER_CURRENT_STREET);
    // save user current city
    await updateUserFormData(msg.chat.id, {
      ...user.userFormData,
      currentAddrCity: currentAddrCity,
      formState: UserFormState.ENTER_CURRENT_STREET // go to another step
    });
  } else {
    msg.reply.text(texts.INVALID_CURRENT_CITY);
  }
};

export default enterCurrentCityAction;
