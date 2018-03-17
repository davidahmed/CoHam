// note_routes.js

var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

  app.get('/id_to_addr/:id', (req, res) => {
    const addrID = req.params.id;
    const details = { 'addrID': Number(addrID) };
    db.collection('addresses').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      } 
    });
  });


  app.get('/addr_to_id/:addr', (req, res) => {
    const addr = req.params.addr;
    const details = { 'addr': addr};
    db.collection('addresses').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      } 
    });
  });

};
