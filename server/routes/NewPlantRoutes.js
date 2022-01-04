const router = require('express').Router();
const PlantsController = require('../controllers/PlantsController');

router.get('/', PlantsController.plantSearch)


module.exports = router;