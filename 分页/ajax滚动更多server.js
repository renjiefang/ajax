/**
 * @author renjiefang
 * @date  2019-02-02 10:09
 */
const express = require('express');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/ajax';

const app = express();
app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname,"ajax滚动更多browser.html"));
});

app.use(express.static(path.join(__dirname, 'public')));
app.get('/blog', (req, res) => {
    for(let i=0;i<10000000;i++);
    let pageSize = 5;
    let page  = req.query.page||1;
    (page<=0) && (page = 1);
    let offset = (page - 1)*pageSize;
    MongoClient.connect(url, (err,doc) => {
        if(err) throw err;
        let blog = doc.collection('blog');
        blog.find({},{_id:0}).skip(offset).limit(pageSize).toArray((err, result) => {
            if(err) throw err;
            res.json(result);
        })
    })
})


app.listen(3000, () => {
    console.log('3000 ok');
})