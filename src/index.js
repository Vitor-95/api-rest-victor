const express = require('express');
const app = express();
const morgan = require('morgan');

app.set('port', 3000);
app.set('json spaces', 2);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use('/api/v1',require('./routes/index'));

// iniciando el servidor
app.listen(app.get('port'), () => {
    console.log(`SERVER EN PUERTO ${app.get('port')}`);
});