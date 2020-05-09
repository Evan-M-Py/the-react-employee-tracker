const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));



app.use(express.static(path.join(__dirname, '/public')));


app.get('*', function(req,res){
    res.sendFile(path.join(__dirname, "/client/build/index.html"));
})


app.listen(PORT, function () {


    console.log(`Listening on port ${PORT}`)
});
