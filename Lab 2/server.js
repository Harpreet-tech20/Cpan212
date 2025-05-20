
const express = require('express');
const app = express();


const myRoutes = require('./routes');
app.use('/', myRoutes);


const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
