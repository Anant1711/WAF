var express= require("express");
var router =express.Router();
router.get("/home",function(req,res){
   res.render("index");
})

router.get('/hello', (req, res)=>{
  res.render("hello");
})

router.get('/cli', (req, res)=>{
  res.render("cli");
})
// or respond with html
router.get('/big', (req, res) => {
  res.render("big");
})

// :name indicates a parameter at this location in the URI
router.get('/greeting/:id', (req, res) => {
  var id= ':id';
  res.render('greeting', { name:  `${req.params.id}` });
})


router.get('/login', (req, res) => {
  res.render('login',{uname:'CyberV',pass:`The4As`})
})

router.get("*", (req, res) => {
  res.render('404page');
})

module.exports =router;
