require('dotenv').config();
const express = require('express');
const { NseIndia } = require('stock-nse-india');
const app = express();
const port = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY;

// Middleware for Bearer authentication
const authenticate = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.split(' ')[1];
        if (token === API_KEY) {
            next();
        } else {
            res.status(403).json({ message: 'Forbidden' });
        }
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
};

app.use(authenticate);

app.get('/equity-details/:symbol', async (req, res) => {
    const symbol = req.params.symbol || 'ZOMATO';
    const nseIndia = new NseIndia();

    try {
        const data = await nseIndia.getEquityDetails(symbol);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            message: 'An error occurred',
            error: error.message,
        });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
