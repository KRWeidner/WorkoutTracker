const router = require('express').Router();
const userRoutes = require('./userRoutes');
const userWorkoutHistoryRoute = require('./workoutHistoryRoute');
const exercisesRoute = require('./ExercisesRoute');
const exerciseRoute = require('./ExerciseRoute');

router.use('/users', userRoutes);
router.use('/workoutHistory', userWorkoutHistoryRoute);
router.use('/exercises', exercisesRoute);
router.use('/exercise', exerciseRoute);

module.exports = router;