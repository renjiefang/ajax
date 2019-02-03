const express = require('express');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/ajax';

const app = express();
//ejs文件需要放在views文件中
app.set('views', path.join(__dirname, './'));

app.get('/page', (req, res, next) => {
    MongoClient.connect(url, (err, db) => {
        if(err) throw err;
        let blog = db.collection('blog');
        blog.find({}, {_id:0}).toArray( (err, result) => {
            if(err) throw err;
            console.log(result);
            res.render('不分页browser.ejs', {data: result});
        });
    })
})

app.listen(3000, () => {
    console.log('3000 ok');
})