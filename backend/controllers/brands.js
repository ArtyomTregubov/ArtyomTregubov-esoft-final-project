const Brands = require('../models/brands');
const NotFoundError404 = require('../errors/notFoundError404');
const ForbiddeError403 = require('../errors/forbiddeError403');
const { USER_NOT_FOUND, DOES_NOT_EXIST, NOT_ENOUGH_RIGHTS, WAS_DELETED } = require('../utils/constants');

const getBrands = async (req, res, next) => {
    const owner = req.user._id;
  try {
    const brands = await Brands.find({ owner });
    if (!brands) { next(new NotFoundError404(USER_NOT_FOUND)); return; }
    res.send(brands);
  } catch (err) {
    next(err);
  }
};

const createBrand = (req, res, next) => {
  const owner = req.user._id;
  Brands.create({ ...req.body, owner })
    .then((card) => res.send(card))
    .catch(next);
};

const deleteBrand = (req, res, next) => {
  const owner = req.user._id;
  const brandId = req.params.brandId;
  Brands.find({ brandId, owner })
    .then((brand) => {
      if (!brand.length) { next(new NotFoundError404(DOES_NOT_EXIST)); return; }
      if (brand[0].owner.toString() !== req.user._id) { next(new ForbiddeError403(NOT_ENOUGH_RIGHTS)); return; }
      return Brands.deleteOne(brand[0]).then(res.send({ message: WAS_DELETED.replace("$brandId", brandId) }));
    }).catch(next);
};

module.exports = {
  getBrands,
  createBrand,
  deleteBrand,
};
