var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var apiRouter = require('./routes/apiRouter')
var app = express()


app.set('views', path.join(__dirname+'/views'))     /*초기화 __dirname: 현재 디렉터리까지의 경로를 알려줌*/
app.set('view engine', 'ejs')       /*view에 ejs 확장자 사용*/

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/',apiRouter)

// app.use('/',(req, res)=>{
//     res.send("Hellow")
// })

// app.get('/',function(request, response){    /*get 방식으로 라우팅 처리 */
//     console.log(request.body)
//     response.render('index')
// })

// listne(포트, url, backlog, callback)
app.listen(8080, function(){
    console.log("Server is Starting at http://localhost:8080")    
})