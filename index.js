const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.json({
    message: 'Hey this is my API running...',
  });
});

app.get('/about', (req, res) => {
  res.json({
    message: 'This is my about route...',
  });
});

app.listen(PORT, () => console.log('API listening on port ' + PORT));

module.exports = app;
