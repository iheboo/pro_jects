const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./models'); // Import the Sequelize instance from models/index.js
const routes = require('./routes/routes');

const app = express();

// Connect to the database
db.sequelize
  .authenticate()
  .then(() => {
    console.log('Database connected...');
    return db.sequelize.sync(); // Sync all models with the database
  })
  .catch((err) => console.error('Error connecting to the database:', err));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
