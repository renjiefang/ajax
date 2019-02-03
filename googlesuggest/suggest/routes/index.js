var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/googleSuggest';


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/search', function (req, res, next) {
    
    let keyword = req.query.key.trim();
          console.log(keyword);
    MongoClient.connect(url, (err, db) => {

        if (err) throw err;
        let search = db.collection('suggest');
        console.log("11" + search);
        //?
        let reg = new RegExp('^' + keyword, 'i')
        search.find({keyword: reg}, {_id: 0}).toArray((err, result) => {
            if (err) throw err;
            console.log(result);
            res.json(result);
        })
    })
})
module.exports = router;
