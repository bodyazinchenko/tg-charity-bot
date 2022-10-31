import TeleBot from 'telebot';

export const bot = new TeleBot({
  token: process.env.BOT_TOKEN as string
});
