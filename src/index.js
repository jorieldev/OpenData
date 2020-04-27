const express = require('express');
const app = express();
const path = require('path');


//Configuración del servidor
app.set('puerto', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
// Funciones anteriores

//Rutas
app.use(require('./routes/index'));

//Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')))

// Escucha el servidor
app.listen(app.get('puerto'), () => {
    console.log('Server on port', app.get('puerto'));
});