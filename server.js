const express = require('express');
const app = express();
const port = 3000;

// ========== NEW: RSS Feed Route ==========
const rssFeedRoute = require('./routes/rssFeed');
app.use('/api', rssFeedRoute); // Your Substack feed will be available at /api/rss

// ========== Static Files ==========
app.use(express.static('public'));

// ========== Start Server ==========
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
