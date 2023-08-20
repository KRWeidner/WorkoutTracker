const router = require('express').Router();
const { UserWkOuts, ExerciseList, WkOutRoutine } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const userHistoryData = await UserWkOuts.findAll({
            where: { userId: req.session.user_id },
            order: ['date'],
            include: [
                {
                    model: WkOutRoutine,
                    attributes: ['routineName']
                }]
        });

        const userwkouts = userHistoryData.map((history) => history.get({ plain: true }));

        res.render('workouthistory', {
            userwkouts,
            logged_in: req.session.logged_in
        })
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const newUserHistoryData = await UserWkOuts.create({
            ...req.body,
            userId: req.session.user_id,
        });

        res.status(200).json(newUserHistoryData);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;