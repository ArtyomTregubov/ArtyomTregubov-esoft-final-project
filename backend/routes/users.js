const router = require('express').Router();
const auth = require('../middlewares/auth');
const { updateProfileInfo, getProfile } = require('../controllers/users');
const { userMeValidator } = require('../utils/validation/userValidationJoi');

router.get('/me', auth, getProfile);

router.patch('/me', userMeValidator, auth, updateProfileInfo);

module.exports = router;
