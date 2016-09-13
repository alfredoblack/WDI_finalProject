var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var secret = require('../config/tokens').secret;


var playersController = require('../controllers/playersController');
var teamsController = require('../controllers/teamsController');
var oauthController = require('../controllers/oauth');
var authenticationsController = require('../controllers/authentications');


function secureRoute(req, res, next) {
  if(!req.headers.authorization) return res.status(401).json({ message: 'Unauthorized' });

  var token = req.headers.authorization.replace('Bearer ', '');

  jwt.verify(token, secret, function(err, payload) {
    if(!payload) return res.status(401).json({ message: 'Unauthorized' });
    req.player = payload;
    next();
  });
}

router.route('/players')
  .all(secureRoute)
  .get(playersController.index)
  .post(playersController.create);

router.route('/players/:id')
  .all(secureRoute)
  .get(playersController.show)
  .put(playersController.update)
  .patch(playersController.update)
  .delete(playersController.delete);

router.route('/teams')
  .all(secureRoute)
  .get(teamsController.index)
  .post(teamsController.create);

router.route('/teams/:id')
  .all(secureRoute)
  .get(teamsController.show)
  .put(teamsController.update)
  .patch(teamsController.update)
  .delete(teamsController.delete);

router.post('/oauth/github', oauthController.github);
router.post('/oauth/twitter', oauthController.twitter);
router.post('/register', authenticationsController.register);
router.post('/login', authenticationsController.login);

module.exports = router;