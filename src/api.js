const express = require('express');
const scrapeData = require('./scraper');

const router = express.Router();

router.get('/scrape', async (req, res) => {
    try {
        const data = await scrapeData();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to scrape data' });
    }
});

module.exports = router;
