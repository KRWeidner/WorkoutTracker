const router = require('express').Router();
const { ExerciseList } = require('../../models');

router.get('/:id', async (req, res) => {
    try {

        const exercisesData = await ExerciseList.findAll({
             where: {
                 routineId: req.params.id
             },
        });
        const exercises = exercisesData.map((exercise) => exercise.get({ plain: true }))
        console.log(exercises[0]);
        res.render('exercise', {
            exercises,
            logged_in: req.session.logged_in
        })
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;