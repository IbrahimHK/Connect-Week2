var express = require('express')
var bodyParser = require('body-parser')
var path = require('path');
var app = express()

var urlencodedBodyParser = bodyParser.urlencoded({extended: true})
app.use(urlencodedBodyParser)


app.use("/", express.static(path.join(__dirname, 'Public')))
app.use("/form", express.static(path.join(__dirname, 'Form')))

var newData = [];

app.get('/', function (req, res){
    res.send('Hello World!')
})

app.post('/formdata', function(req, res ){

var dataToSave = new Object()
dataToSave.text = req.body.data
dataToSave.color = req.body.color

newData.push(dataToSave)

console.log(newData)

var output = "<html><body>"

output += "<h1>Look a new entry's been added!</h1>"

for (var i = 0; i<newData.length; i ++) {
    output += "<div style='color: " + newData[i].color + "'>" + newData[i].text + "</div";
}

output += "</body></html>"

res.send(output)
})

app.listen(80, function(){
    console.log('Example app listening on port 80')
})