/**
 * @author renjiefang
 * @date  2019-02-01 20:47
 */
const express = require('express');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/ajax';

const app = express();
app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname,"ajax普通分页browser.html"));
});
app.get('/blog', (req, res) => {
    let pageSize = 5;
    let page  = req.query.page||1;
    (page<=0) && (page = 1);
    let offset = (page - 1)*pageSize;
    MongoClient.connect(url, (err,doc) => {
        if(err) throw err;
        let blog = doc.collection('blog');
        blog.find({},{_id:0}).skip(offset).limit(pageSize).toArray((err, result) => {
            if(err) throw err;
            blog.find().count().then((result2) => {
                 let  total = result2;
                 let size = Math.ceil(total/pageSize);
                 res.json({
                     blogs:result,
                     total,
                     size,
                     pageSize,
                     page
                 })
            }).catch((err) => {
                console.log(err);
            })
        })
    })
})


app.listen(3000, () => {
    console.log('3000 ok');
})