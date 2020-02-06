const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars'); 

const adminRoutes = require('./routes/shopRoutes');
const shopRoutes = require('./routes/adminRoutes');
const errorRoutes = require('./routes/errorRoutes');

const app = express();

// app.engine('hbs',expressHbs(
//     {
//         layoutsDir: 'views/layouts/',
//         defaultLayout: 'layout_hbs',
//         extname: 'hbs'
//     }
// ));
app.set('view engine','ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({ extended : false }));
app.use(adminRoutes);
app.use(shopRoutes);
app.use(errorRoutes);

app.listen(3000);