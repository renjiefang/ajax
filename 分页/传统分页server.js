const express = require('express');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/ajax';

const app = express();

app.set('views', path.join(__dirname, './'))

app.get('/', (req, res) => {

     const pageSize = 5;
    //获取分页
     let page = req.query.page||1;
        // if( page <= 0) { page = 1;}

    (page <= 0) && (page= 1);
     //偏移量
    let offset = (page - 1) * pageSize;
    MongoClient.connect(url, (err, db) => {
        if(err) throw err;
        let blog = db.collection('blog');
        blog.find({},{_id:0}).skip(offset).limit(pageSize).toArray( (err, result) => {
            if(err) throw err;
            blog.find().count().then( result1 => {
                let total = result1;
                let size = Math.ceil(total / pageSize);


                res.render('传统分页browser.ejs', {
                    data: result,
                    page,
                    pageSize,
                    total,
                    size,

                });
            });
        })
    })

})

app.listen(3000, () => {
    console.log('3000 ok');
})