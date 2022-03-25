const { Pirate } = require('../models/pirate.model')

module.exports = {
    //create new Products
    create: (request, response) => {
        Pirate.create(request.body)
            .then(author => response.json(author))
            .catch(err => {
                console.log("DB ERROR");
                return response.status(400).json(err)
            });
    },

    //find all pirates
    findAll: (request, response) => {
        Pirate.find().sort({name:1})
            .then(author => { response.json(author) })
            .catch(err => response.json(err));
    },

    //find one pirate
    findOne: (request, response) => {
        Pirate.findOne({ _id: request.params.id })
            .then(oneAuthor => response.json(oneAuthor))
            .catch(err => response.json(err))
    },


    //update pirate
    update: (request, response) => {
        Pirate.findByIdAndUpdate({ _id: request.params.id }, request.body,
            {
                new: true,
                runValidators: true
            })
            .then(updatedProduct => response.json(updatedProduct))
            .catch(err => response.status(400).json(err))
    },

    //delete pirate
    delete: (req, res) => {
        Pirate.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.status(400).json(err))
    }
}