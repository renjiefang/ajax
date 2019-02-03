const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '代理跨域browser.html'));
})
//代理方在服务器端，不存在跨域
app.get('/proxy', (req, res, next) => {
    let url = req.query.url;
     http.get(url, (response) => {
         let data ='';
         response.on('data', (chunk) => {
             data+=chunk;
         })
         response.on('end', ()=>{
             res.json(data);
         })
     })
})

app.listen(3000, () => {
    console.log('3000 ok');
})