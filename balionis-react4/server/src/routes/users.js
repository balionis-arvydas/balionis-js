const usersController = require('../controllers/usersCtrl');

module.exports = router => {
    router
        .route('/v1/users/:userId')
        .get(usersController.getUser)
};
