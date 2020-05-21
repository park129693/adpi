var express = require('express')

var app = express()

app.get('/',function(request, response){
    console.log(request)
    response.send("<h1 style='color:green'>안녕하세요</h1>")
})

// listne(포트, url, backlog, callback)
app.listen(8080, function(){
    console.log("Server is Starting at http://localhost:8080")    
})