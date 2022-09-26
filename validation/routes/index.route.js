const routes = require('express').Router();
const {signupCheck, loginCheck} = require('../container/index.container');

routes.post('/user_signup', signupCheck);
routes.post('/user_login_check', loginCheck);

module.exports = routes;