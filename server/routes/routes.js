const bodyParser = require('body-parser');
const api = require('../controllers/controller');

function router(app){
    
    app.use(bodyParser.json());

    app.get('/api/trucks', api.allTrucks);

    app.get('/api/trucks/:id', api.oneTruck);

    app.post('/api/trucks/new', api.createTruck);

    app.post('/api/trucks/edit/', api.updateTruck);

    app.get('/api/trucks/destroy/:id', api.deleteTruck);

    return app;
}

module.exports = router;