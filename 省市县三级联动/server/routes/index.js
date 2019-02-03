var express = require('express');
var router = express.Router();

const data = require('../../cityData.min');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/province', function (req, res, next) {
  let province = [];
  data.forEach(item => {
    province.push(item.n);
  })
    res.send(province);
})

router.get('/city', function (req, res, next) {
  let cities = [];
  let province = req.query.province;
   console.log(province);
  data.forEach(item => {
    console.log(1);
    if (item.n == province) {
       console.log(2);
      item.s.forEach(item1 => {
        cities.push(item1.n);
      })
    }

  })
   res.send(cities);

})

router.get('/country',  function (req, res,next) {
     let countries = [];
     let  city = req.query.city;
     console.log(city);
     data.forEach(item => {
        item.s.forEach(item1 =>{
              if(item1.n == city) {
                 item1.s && item1.s.forEach(item2 =>{
                     countries.push(item2.n);
                  })
              }
        })
     })
    res.send(countries);
})

module.exports = router;
