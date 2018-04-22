//Dependencies
var path = require('path');

//ROUTING

module.exports = function(app){

// Route to Survey (HTML) page
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });

  //Route to Home  (HTML) page
  app.use("/",function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/index.html'));
  });
};