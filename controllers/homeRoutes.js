const router = require('express').Router();
const { WkOutRoutine } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const routineData = await WkOutRoutine.findAll();

    const routines = routineData.map((routine) => routine.get({ plain: true }));

    res.render('homepage', {
        routines,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('homepage');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

module.exports = router;
