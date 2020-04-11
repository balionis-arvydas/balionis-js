const userController = require('../controllers/userCtrl');

module.exports = router => {
    router
        .route('/v1/user/:userId')
        .get(userController.getUser)
};
