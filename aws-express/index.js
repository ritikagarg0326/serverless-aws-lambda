const express = require('express');
//const serverless = require("serverless-http");

// Create an Express application
const app = express();

const port=3000;
app.use(express.json())
// Serve a basic HTML file at the root URL for testing
app.get('/', (req, res) => {
  res.send(`
    <h1>Hi Veronica!!!!!!</h1>
    <h1>Hello.... Ritika!!!!!</h1>
  `);
});
app.get('/home', (req, res) => {
    res.send(`
      <h1>My home</h1>
   
    `);
  });

//module.exports.handler = serverless(app);

//  Start the server
console.log("Attempting to start the server...");
  app.listen(port, (err) => {
   if (err) {
       console.error("Error starting server:", err);
    } else {
       console.log(`Server running at http://localhost:${port}`);
      }
    });
