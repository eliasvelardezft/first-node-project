const express = require('express');
const {readFile, readFileSync} = require('fs').promises;

const app = express();

app.get('/hola', async (request, response) => {

  response.send(await readFile('./index.html', 'utf8'));

});


app.listen(process.env.PORT || 5000, () => console.log(`App avaliable on http://localhost:5000`));

