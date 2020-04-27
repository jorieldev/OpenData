const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  //console.log()
  res.render('index.html', { titulo: 'Pagina Web' });
});

router.get('/contact', (req, res) => {
    res.render('contact.html', { titulo: 'Contacto' });
});

module.exports = router;