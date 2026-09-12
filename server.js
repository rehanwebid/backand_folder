require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// CORS: hanya izinkan domain GitHub kamu
app.use(cors({
  origin: process.env.ALLOWED_ORIGIN,
  methods: ['GET']
}));

// Endpoint API
app.get('/api/photo', (req, res) => {
  res.json({ url: process.env.PHOTO_URL });
});

// Local: jalankan server
// Vercel: export app
if (require.main === module) {
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server jalan di http://localhost:${process.env.PORT || 3000}`);
  });
}

module.exports = app;