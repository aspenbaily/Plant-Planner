const plants = require('../models/PlantModel');

function getPlantById(req , res){
    const plantData = plants.list();

    const plant = plantData.find(elm => elm.id == req.params.plantId);
    res.status(200).json({
        plant: {
            id: plant.id,
            name: plant.name,
            latinname: plant.latinname,
            lightdirection: plant.lightdirection,
            lightneeds: plant.lightneeds,
            waterneeds: plant.waterneeds,
            easeofcare: plant.easeofcare,
            image: plant.image,
            careinstructions: plant.careinstructions

        }
    });
}
function plantSearch(req , res){

const plantJson = plants.list();
const filteredPlants= plantJson.filter(function(item) {
  for (let key in req.query) {
    if (item[key] === undefined || item[key] != req.query[key])
      return false;
  }
  return true;
});
// const filteredPlants = plantJson.
// filter(plant => plant.lightdirection === req.params.lightdirection 
//     && plant.lightneeds === req.params.lightneeds
//     && plant.waterneeds === req.params.waterneeds
//     && plant.easeofcare === req.params.easeofcare);

// const {lightdirection , lightneeds , easeofcare , waterneeds } = plantJson.filter(elm => elm.lightdirection === req.params.lightdirection);
console.log(req.query);
res.status(200).json({
    plant: {
        plants: filteredPlants
    }
});
}
module.exports = {
    getPlantById,
    plantSearch
}