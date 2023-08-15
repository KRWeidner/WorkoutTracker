const router = require('express').Router();
const { UserWkOuts } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const userHistoryData = await UserWkOuts.findAll({
            where: { user_id: req.session.user_id }
        });

        const pastWorkouts = userHistoryData.map((history) => history.get({ plain: true }))

        res.render('workouthistory', {
            pastWorkouts,
            logged_in: req.session.logged_in
        })
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;