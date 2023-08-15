const router = require('express').Router();
const { ExerciseList } = require('../../models');

router.get('/:id', async (req, res) => {
    try {
        const routineExercisesData = await ExerciseList.findAll({
            where: {
                rountineId: req.params.id
            },
        });

        const exercises = routineExercisesData.map((exercise) => exercise.get({ plain: true }))

        res.render('workouts', {
            exercises,
            logged_in: req.session.logged_in
        })
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;