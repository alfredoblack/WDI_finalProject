var router = require('express').Router();

var playersController = require('../controllers/players');
var oauthController = require('../controllers/oauth');


router.route('/players')
  .get(playersController.index)
  .post(playersController.create);

router.route('/players/:id')
  .get(playersController.show)
  .put(playersController.update)
  .patch(playersController.update)
  .delete(playersController.delete);

router.post('/oauth/github', oauthController.github);


module.exports = router;