import * as dotenv from 'dotenv';
dotenv.config()
import TeleBot from 'telebot';
import texts from './texts';
import mongoClient from './db';
import fetchUser from './fetchUser';
import { User } from './types';


const bot = new TeleBot({
  token: process.env.BOT_TOKEN as string,
});

bot.on('/start', async (msg) => {
  const user = await fetchUser(msg.chat as User);
  msg.reply.text(texts.WELCOME_MESSAGE_1);
  msg.reply.text(JSON.stringify(user));
});

bot.on('/db', async(msg) => {
  msg.reply.text(mongoClient.db().databaseName)
})


bot.start();