const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const pgp = require('pg-promise')();
const db = pgp({
  database: 'contact_list'
});
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())

app.get('/api/contacts', (req, resp, next) => {
  db.any('select * from contact')
  .then(contacts => resp.json(contacts))
  .catch(next);
})
//make sure in postman you check Body, raw and then JSON format (not text) otherwise it will not update to your database
app.post('/api/contacts', (req, resp, next) => {
  let data = req.body;
  console.log(data)
  db.none(`insert into contact values (default, $1, $2, $3, $4, $5)`, [data.name, data.phone, data.email, data.type, data.favorite])
    .then(() => resp.send('response has been sent'))
    .catch(next)
});

app.delete('/api/contacts/:id',(req, resp, next) => {
  let id = req.params.id;
  console.log(id)
  db.none(`delete from contact where id = ${id}`)
    .then(() => resp.send(`deleted`))
    .catch(next)
});


 // Be careful when updating records in a table! Notice the WHERE clause in the
 //UPDATE statement. The WHERE clause specifies which record(s) that should be
 //updated. If you omit the WHERE clause, all records in the table will be updated!
 //In order to update, the id must already exist
app.put('/api/contacts/:id',(req, resp, next) => {
  let id = req.params.id;
  let data = req.body;
  console.log(id)
  db.none(`update contact set name = $1, phone = $2, email = $3, type = $4, favorite = $5 where id = ${id}`,
    [data.name, data.phone, data.email, data.type, data.favorite])
    .then(() => resp.send(`added with put`))
    .catch(next)
});


app.listen(3000, () => console.log('Listening on port 3000.'));
