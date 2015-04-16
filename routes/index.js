var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/data', function(req, res){
	res.json({total:3,rows:[
	{code:"1", name:"aaa", price:"0.88"},
	{code:"2", name:"bbb", price:"0.99"},
	{code:"3", name:"ccc", price:"0.77"}
]});
});

router.get('/hello', function(req,res){
	res.render('hello');
});

module.exports = router;
