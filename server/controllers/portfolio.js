const PortfolioModel = require('../models/portfolio');
const mongoose = require('mongoose');

class PortfolioController {
  static getPortfolio (req,res) {
    PortfolioModel.find({})
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send(err)
    })
  };

  static postPortfolio (req,res) {
    PortfolioModel.create({
      name: req.body.name,
      description: req.body.description,
      github: req.body.github,
      thumbnail: req.body.thumbnail
    })
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send(err)
    })
  };

  static putPortfolio (req,res) {
    PortfolioModel.updateOne({_id : req.params.id}, {$set: {
      name: req.body.name,
      description: req.body.description,
      github: req.body.github,
      thumbnail: req.body.thumbnail}
    })
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send(err)
    })
  };

  static deletePortfolio (req,res) {
    PortfolioModel.deleteOne({_id : req.params.id
    })
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send(err)
    })
  };
};

module.exports = PortfolioController;