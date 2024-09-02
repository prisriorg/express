const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
const token = '7283517004:AAHd2JfX8-UaW5CjohqTc71rjH0qlGO8vok';
const bot = new TelegramBot(token, {polling: false});
const app = express();
const PORT = 8000;
const chatId = 1055841612;

app.get('/', (req, res) => {
  bot.sendMessage(chatId, "resp");
  res.send('Hello World')
})

app.get('/about', (req, res) => {
  res.send('About route 🎉 ')
})

app.listen(PORT, () => console.log(`✅ Server is running on port ${PORT}`))
