const express = require('express')
var bodyParser = require('body-parser')
const app = express()


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// web api

app.get('/slug/:id/:secure/', function (req, res) {
  console.log(req.params);
  console.log(req.params.secure);
//   res.send("read data successfully");
  res.send(req.params.secure);  
});

app.get('/req_query/', function (req, res) {
  console.log(req.query.name);
  res.send(req.query);  
});

app.get('/req_body/', function (req, res) {
  console.log(req.body.name);
  res.send(req.body);  
});



// event emitters req

app.get('/event_list/' , (req, res, db) => {
     var file = require (__dirname + '/src/guide/event_emitter.js')
      file.main(req, res,db);     
})


app.listen(9998, () =>{
console.log("server startes running on 9998 port");
});


