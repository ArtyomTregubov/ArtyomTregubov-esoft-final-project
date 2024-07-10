const router = require('express').Router();
const routerUsers = require('./users');
const routerBrands = require('./brands')
const auth = require('../middlewares/auth');
const { unknownLink, createUser, login, logout } = require('../controllers/users');
const { signupValidator, signinValidator } = require('../utils/validation/userValidationJoi');

router.post('/signup', signupValidator, createUser);
router.post('/signin', signinValidator, login);
router.post('/signout', logout);

router.use('/users', auth, routerUsers);
router.use('/brands', auth, routerBrands);
router.use('*', auth, unknownLink);

module.exports = router;
