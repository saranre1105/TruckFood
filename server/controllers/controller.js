const Trucks = require('../models/models');

function allTrucks(req, res){
    Trucks.find({})
        .then(data => res.json(data))
        .catch(errs => res.json(errs));
};

function oneTruck(req, res){
    Trucks.findById(req.params.id)
        .then(data => res.json(data))
        .catch(errs => res.json(errs));
};

function createTruck(req, res){
    Trucks.create(req.body)
        .then(data => res.json(data))
        .catch(errs => res.json(errs));
};

function updateTruck(req, res){
    Trucks.findByIdAndUpdate(req.body._id, req.body)
        .then(data => res.json(data))
        .catch(errs => res.json(errs));
};

function deleteTruck(req, res){
    Trucks.findByIdAndRemove(req.params.id)
        .then(data => res.json(data))
        .catch(errs => res.json(errs));
};

module.exports.allTrucks = allTrucks;
module.exports.oneTruck = oneTruck;
module.exports.createTruck = createTruck;
module.exports.updateTruck = updateTruck;
module.exports.deleteTruck = deleteTruck;