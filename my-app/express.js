const express = require('express');
const path = require('path');
const app = express();

// Importez votre API
const apiRoutes = require('./app');

app.use(express.static(path.join(__dirname, 'public')));

// Connectez les routes API
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
