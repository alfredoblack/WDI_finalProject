var router = require('express').Router();

var playersController = require('../controllers/playersController');
var teamsController = require('../controllers/teamsController');
var oauthController = require('../controllers/oauth');


router.route('/players')
  .get(playersController.index)
  .post(playersController.create);

router.route('/players/:id')
  .get(playersController.show)
  .put(playersController.update)
  .patch(playersController.update)
  .delete(playersController.delete);

router.route('/teams')
  .get(teamsController.index)
  .post(teamsController.create);

router.route('/teams/:id')
  .get(teamsController.show)
  .put(teamsController.update)
  .patch(teamsController.update)
  .delete(teamsController.delete);

router.post('/oauth/github', oauthController.github);

module.exports = router;