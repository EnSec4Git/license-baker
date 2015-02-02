var express = require('express');
var path = require('path');
var commons = require('../commons');

/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', commons.merge(req.app.get('template-vars'), { title: 'License Baker' }));
};

/*
 * GET any of the static info pages.
 */

exports.statics = function(req, res){
  res.render(req.params[0], commons.merge(req.app.get('template-vars'), { title: 'License Baker' }));
};