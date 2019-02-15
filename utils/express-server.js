const express = require('express');

const app = express();

app.use(express.static('dist'));

app.listen(8080, function() {
  console.log('server is listening on localhost:8080');
});
