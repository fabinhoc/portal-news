var express = require("express");
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + "/public"));

app.listen(3000, function(){
    console.log("the server is running on port 3000");
});
