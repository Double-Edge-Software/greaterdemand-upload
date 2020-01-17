const express = require ('express');
const app = express();
var path = require('path')

app.use(express.static(__dirname + '/dist/base'))

app.listen(process.env.PORT || 8080);

//PathLocation Strategy

app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname + '/dist/base/index.html'));
})

console.log('Console Listening');