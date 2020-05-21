var express = require('express')
var router = express.Router()

router.get('/main', (req, res)=>{           /*화살 함수 방식 */
    res.render('index')
})

router.get('/daejeon', (req, res)=>{
    res.render('main', {data:"잘들온 데이터"})
})

module.exports = router;
