const express = require('express');

//importo la libreria cors para poder usarla en mi app
const cors = require('cors');

// Importo el router Api en el index.js para controlar las rutas con single responsability
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler, ormErrorHanlder } = require('./middlewares/error.handler');

// Defino mi APP y mi puerto
const app = express();
const port = 3000;

// Defino que mi app va a usar json para parsear los datos.
app.use(express.json());

const whiteList = ['http://localhost:3001', 'http://localhost:8080', 'https://wspa.com.ar'];
const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Defino que mi app va a usar el routerApi
routerApi(app);
app.use(logErrors);
app.use(ormErrorHanlder)
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
