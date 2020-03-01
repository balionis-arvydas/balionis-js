const entitiesController = require('../controllers/entitiesCtrl');

module.exports = router => {
    router
        .route('/v1/entities/:entityId')
        .get(entitiesController.getEntity)
};
