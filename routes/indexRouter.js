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

router.get('/', (req, res) => res.render('index', { messages: messages }));

router
  .route('/new')
  .get((req, res) => res.render('form'))
  .post((req, res) => {
    messages.push({
      text: req.body.text,
      user: req.body.user,
      added: new Date(),
    });

    res.redirect('/');
  });

module.exports = router;
