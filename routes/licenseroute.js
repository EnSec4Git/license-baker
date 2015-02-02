var express = require('express');
var path = require('path');

/*
 * GET /createlicense page.
 */

exports.createlicense = function(req, res){
  res.render('index', { title: 'License Baker' });
};