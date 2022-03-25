
const PirateController = require('../controllers/pirate.controllers')

module.exports = function(app){
    app.get('/api', PirateController.findAll);
    app.post('/api', PirateController.create);
    app.get('/api/pirate/:id', PirateController.findOne)
    app.put('/api/pirate/edit/:id', PirateController.update)
    app.delete('/api/pirate/delete/:id', PirateController.delete)
}