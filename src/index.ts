import * as dotenv from 'dotenv';
dotenv.config();
import texts from './texts';
import addUserToMongo from './userActions/addUserToMongo';
import fetchUserByTgId from './userActions/fetchUserByTgId';
import { UserFormState, UserTelegramData } from './types';
import enterPhoneNumberAction from './formDataActions/enterPhoneNumberAction';
import enterFullNameAction from './formDataActions/enterFullNameAction';
import enterBirthdayAction from './formDataActions/enterBirthdayAction';
import enterCurrentCityAction from './formDataActions/enterCurrentCityAction';
import enterCurrentStreetAction from './formDataActions/enterCurrentStreetAction';
import enterCurrentBuildingAction from './formDataActions/enterCurrentBuildingAction';
import enterCurrentAptAction from './formDataActions/enterCurrentAptAction';
import { bot } from './setupBot';

bot.on('/start', async (msg) => {
  msg.reply.text(texts.WELCOME_MESSAGE);
  addUserToMongo(msg.chat as UserTelegramData); // on start bot we creating new user in database
});

// subscribe to all user messages
bot.on('*', async (msg) => {
  if (msg.text === '/start') return; // don't run this function on start command

  const user = await fetchUserByTgId(msg.chat.id);

  switch (user.userFormData?.formState) {
    case UserFormState.ENTER_PHONE_NUMBER:
      enterPhoneNumberAction(msg, user);
      break;
    case UserFormState.ENTER_FULL_NAME:
      enterFullNameAction(msg, user);
      break;
    case UserFormState.ENTER_BIRTHDAY_DATE:
      enterBirthdayAction(msg, user);
      break;
    case UserFormState.ENTER_CURRENT_CITY:
      enterCurrentCityAction(msg, user);
      break;
    case UserFormState.ENTER_CURRENT_STREET:
      enterCurrentStreetAction(msg, user);
      break;
    case UserFormState.ENTER_CURRENT_BUILDING:
      enterCurrentBuildingAction(msg, user);
      break;
    case UserFormState.ENTER_CURRENT_APT:
      enterCurrentAptAction(msg, user);
      break;
    default:
      break;
  }
});

bot.start();
