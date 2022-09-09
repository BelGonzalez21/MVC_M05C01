const express = require('express');
const app = express();
const path = require('path');
const PORT = 3030;

/*IMPORTACIÓN DE ROUTE*/
const mainRouter = require("./routes/main");

/*ENGINE*/
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/*DIRECCIÓN DE ROUTES*/
app.use("/", mainRouter);

/*PORT*/
app.listen(3030, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});


