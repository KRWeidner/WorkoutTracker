const router = require('express').Router();
const userRoutes = require('./userRoutes');
const userwkoutRoute = require('./userwkoutRoute');
const wkoutRoutineRoute = require('./wkoutroutineRoute');
const exerciseListRoute = require('./exerciselistRoute');

router.use('/users', userRoutes);
router.use('/userwkout', userwkoutRoute);
router.use('/wkoutroutines', wkoutRoutineRoute);
router.use('/exerciseslist', exerciseListRoute);

module.exports = router;