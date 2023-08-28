const express = require('express');

// Importo el router Api en el index.js para controlar las rutas con single responsability
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

// Defino mi APP y mi puerto
const app = express();
const port = 3000;

// Defino que mi app va a usar json para parsear los datos.
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Defino que mi app va a usar el routerApi
routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
