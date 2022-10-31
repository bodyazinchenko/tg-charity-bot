import * as dotenv from 'dotenv';
dotenv.config();
import texts from './texts';
import addUserToMongo from './userActions/addUserToMongo';
import fetchUserByTgId from './userActions/fetchUserByTgId';
import { UserFormState, UserTelegramData } from './types';
import enterPhoneNumberAction from './formDataActions/enterPhoneNumberAction';
import enterFullNameAction from './formDataActions/enterFullNameAction';
import enterBirthdayAction from './formDataActions/enterBirthdayAction';
import enterCurrentAddressAction from './formDataActions/enterCurrentAddressAction';
import enterResidenceAddressAction from './formDataActions/enterResidenceAddressAction';
import enterDocumentPhotoAction from './formDataActions/enterDocumentPhotoAction';
import { bot } from './setupBot';

bot.on('/start', async (msg) => {
  msg.reply.text(texts.WELCOME_MESSAGE, { parse_mode: 'HTML' });
  addUserToMongo(msg.chat as UserTelegramData); // on start bot we creating new user in database
});

bot.on('photo', async (msg) => {
  if (UserFormState.ENTER_DOCUMENT_PHOTO) {
    const user = await fetchUserByTgId(msg.chat.id);
    enterDocumentPhotoAction(msg, user);
  }
});

// subscribe to all user messages
bot.on('text', async (msg) => {
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
    case UserFormState.ENTER_CURRENT_ADDRESS:
      enterCurrentAddressAction(msg, user);
      break;
    case UserFormState.ENTER_RESIDENCE_ADDRESS:
      enterResidenceAddressAction(msg, user);
      break;
    default:
      break;
  }
});

bot.start();
