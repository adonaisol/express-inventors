var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(!req.url.includes("/favicon")){
        res.status(200);
        //res.set('Content-type', 'text/html');
        fs.readFile(path.join('./public/javascripts/inventors.json'), function(err, data){
            var file = JSON.parse(data);
            res.render('inventors', { title: 'Inventors', htmldata: file });
        });
    }
 
});

module.exports = router;
