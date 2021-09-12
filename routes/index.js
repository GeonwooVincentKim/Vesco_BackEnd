var express = require('express');
var router = express.Router();
var app = express();

console.log("Hi Index");

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

function getHomeURL(req, res){
  res.render("index", {title: "Express"});
}

router.get("/", getHomeURL);

// function handleListening(port){
//   console.log("Listening on : http://localhost:${port}");
// }



module.exports = router;
