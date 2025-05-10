const { Router } = require('express');
const router = Router();

const messages = [
  { text: 'Oooh Weee', user: 'Mr. Poopybutthole', added: new Date() },
  { text: 'Get Schwifty', user: 'Big Head', added: new Date() },
  {
    text: 'Get out of my personal space!',
    user: 'Philip Jacobs Show',
    added: new Date(),
  },
];

router.get('/', (req, res) => {
  res.render('index', { messages: messages });
});

module.exports = router;
