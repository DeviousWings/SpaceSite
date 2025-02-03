const express = require('express');
const app = express();
const port = 3000; // Choose a port number that is not already in use

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
// This code imports the Express.js module, creates an Express application, 
// and sets it up to serve static files from a directory called public. 
// You can place your HTML, CSS, and frontend JavaScript files in the public directory.