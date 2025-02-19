const express = require('express');
//const serverless = require("serverless-http");
const path = require('path');

// Create an Express application
const app = express();

const port=3000;
app.use(express.json())
// Serve a basic HTML file at the root URL for testing
const env_app= process.env.APP_NAME
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log(`Request served ny node app ${env_app}`)
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
