const express = require('express');

const serveStatic = require('serve-static');

const path = require('path');

const app = express();

const listingsData = require('./data/listingsData');

app.use('/', serveStatic(path.join(__dirname, '/public')));

app.use('/api/listings/', function(req, res ) {
    

  let newData;
  if(req.query.min_price !== undefined) {

    newData = listingsData.filter((item)=>{
    

        return (
          (parseFloat(item.price.replace(/,/g, ''))) >= req.query.min_price &&
          (parseFloat(item.price.replace(/,/g, ''))) <= req.query.max_price &&
          item.area  >= req.query.min_area &&
          item.area  <= req.query.max_area &&
          item.rooms >= req.query.bedrooms &&
          item.bathrooms >= req.query.bathrooms
        )

      
    }) 

   // in case a city is passed
    if(req.query.city !== 'all') {
      newData = newData.filter( (item) => {
        return item.city === req.query.city;
      })
    }

    // in case a hometype is passed
    if(req.query.home_type !== 'all') {
      newData = newData.filter( (item) => {
        return item.type == req.query.home_type
      })
    }

    res.json(newData);

  } else {
    res.json(listingsData);
  }


})

app.get('*', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
  });


const port = process.env.PORT || 5000;

app.listen(port);

console.log('server started  on port ' + port);

console.log(path.join(__dirname, '/public'))



