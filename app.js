const express =require('express');
const app = express();

app.listen(3000, ()=>{
    console.log('Servidor funcionando');
    });

    app.set('view engine', 'ejs');
    app.use('/', indexRouter);