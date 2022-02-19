const SkillModel = require('../models/skill');
const mongoose = require('mongoose');

class SkillController {
  static getSkill (req,res) {
    SkillModel.find({})
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send(err)
    })
  };

  static postSkill (req,res) {
    SkillModel.create({
      name: req.body.name,
      level: req.body.level
    })
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send(err)
    })
  };

  static putSkill (req,res) {
    SkillModel.updateOne({_id : req.params.id}, {$set: {
      name: req.body.name,
      level: req.body.level}
    })
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send(err)
    })
  };

  static deleteSkill (req,res) {
    SkillModel.deleteOne({_id : req.params.id
    })
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send(err)
    })
  };
};

module.exports = SkillController;