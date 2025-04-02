// routes/rssFeed.js
const express = require('express');
const router = express.Router();
const axios = require('axios');
const parser = require('xml2js').parseString;

const feedUrl = "https://natdeviouswings.substack.com/feed";

router.get('/rss', async (req, res) => {
  try {
    const response = await axios.get(feedUrl);
    parser(response.data, (err, result) => {
      if (err) return res.status(500).json({ error: "Error parsing XML" });

      const items = result.rss.channel[0].item;

      // Optional: filter by category here if needed
      const posts = items.map(item => ({
        title: item.title[0],
        link: item.link[0],
        date: item.pubDate[0],
        categories: item.category || []
      }));

      res.json(posts);
    });
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch feed" });
  }
});

module.exports = router;
