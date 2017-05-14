const express = require('express')
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.resolve(__dirname, '../client')));
app.use(express.static(path.resolve(__dirname, '../node_modules')));

// Routes
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'client', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Starting server at http://127.0.0.1:${PORT}`);
})
