const router = require('express').Router();
const PlantsController = require('../controllers/PlantsController')

router.get('/:plantId', PlantsController.getPlantById);
router.get('/plantresults', PlantsController.plantSearch)

module.exports = router;