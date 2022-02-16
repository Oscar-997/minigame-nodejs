const express = require('express');
const path = require('path'); 
const app = express();
const { engine } = require('express-handlebars')
const io = require('socket.io');
const port = 3000;

const route = require('./router/index.js');
const db = require('./config/db/index')

db.connect()

app.engine('hbs', engine({
  defaultLayout:'main',
  extname: '.hbs',
  helpers: {
    sum: (a , b) => a + b,
  }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(__dirname + '/public'));

app.use(express.json());
app.use(express.urlencoded())


//sleyvIjSnu6uHyoe 
route(app);

app.listen(port, () => {
    console.log(`Server is running on port : localhost:${port}`);
});