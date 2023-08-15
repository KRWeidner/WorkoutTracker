const router = require('express').Router();
const userRoutes = require('./userRoutes');
const userWorkoutHistoryRoute = require('./workoutHistoryRoute');
const exercisesRoute = require('./ExercisesRoute');

router.use('/users', userRoutes);
router.use('/workoutHistory', userWorkoutHistoryRoute);
router.use('/exercises', exercisesRoute);

module.exports = router;