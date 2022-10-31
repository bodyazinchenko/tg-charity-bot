import * as dotenv from 'dotenv';
dotenv.config()
import texts from './texts';
import addUserToMongo from './userActions/addUserToMongo';
import fetchUserByTgId from './userActions/fetchUserByTgId';
import { UserFormState, UserTelegramData, } from './types';
import enterPhoneNumberAction from './formDataActions/enterPhoneNumberAction';
import enterFullNameAction from './formDataActions/enterFullNameAction';
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
    default:
      break;
  }
})

bot.start();