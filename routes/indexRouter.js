const { Router } = require('express');
const router = Router();

const messages = [
  { text: 'Get Schwifty', user: 'Big Head', added: new Date('2015-8-23') },
  {
    text: 'Oooh Weee',
    user: 'Mr. Poopybutthole',
    added: new Date('2015-8-16'),
  },
  {
    text: "Hi, I'm Mr. Meeseeks!",
    user: 'Mr. Meeseeks',
    added: new Date('2014-8-20'),
  },
];

router.get('/', (req, res) => res.render('index', { messages: messages }));

router
  .route('/new')
  .get((req, res) => res.render('form'))
  .post((req, res) => {
    messages.unshift({
      text: req.body.text,
      user: req.body.user,
      added: new Date(),
    });

    res.redirect('/');
  });

module.exports = router;
