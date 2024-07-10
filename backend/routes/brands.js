const router = require('express').Router();
const auth = require('../middlewares/auth');
const { getBrands, createBrand, deleteBrand } = require('../controllers/brands');
const { brandValidator, brandIdValidator } = require('../utils/validation/brandValidationJoi');

router.get('/', auth, getBrands);

router.post('/', brandValidator, auth, createBrand);

router.delete('/:brandId', brandIdValidator, auth, deleteBrand);

module.exports = router;
