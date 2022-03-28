const express = require('express');
const hbs = require('hbs');
const app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.locals.pageTitle = 'Baby Yoda';

app.get('/home', (request, response) => {
  response.render('home', {
    message: 'Baby Yoda rules the universe',
    why: '"Take care of this little one, or maybe it will take of you"'
  });
});

app.get('/about', (request, response) => {
  response.render('about', {
    message: 'This is who he is',
    why: 'How he will save the universe'
  });
});

app.get('/works', (request, response) => {
  response.render('works', {
    message: 'Here is what he did',
    why: 'And why this is coooool'
  });
});
app.use(express.static('public'));

app.listen(3000);
