const express = require("express");
const app = express();

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000;

app.use(express.static("dist"));

app.get('/check', (request, response) => {
  response.send('ok')
})

app.get('/version', (request, response) => {
  response.send('1')
})

app.listen(PORT, () => {
  console.log("server started on port 5000");
});

