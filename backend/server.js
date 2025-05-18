   const express = require('express');
   const mongoose = require('mongoose');
   const bodyParser = require('body-parser');
   const cors = require('cors');

   const app = express();
   const PORT = process.env.PORT || 5000;

   // Middleware
   app.use(cors());
   app.use(bodyParser.json());

   // MongoDB Connection
   mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
       useNewUrlParser: true,
       useUnifiedTopology: true,
   })
   .then(() => console.log('MongoDB connected'))
   .catch(err => console.log(err));

   // Define a simple schema and model
   const ItemSchema = new mongoose.Schema({
       name: String,
       value: Number,
   });

   const Item = mongoose.model('Item', ItemSchema);

   // API Endpoints
   app.get('/api/items', async (req, res) => {
       const items = await Item.find();
       res.json(items);
   });

   app.post('/api/items', async (req, res) => {
       const newItem = new Item(req.body);
       await newItem.save();
       res.json(newItem);
   });

   app.listen(PORT, () => {
       console.log(`Server is running on http://localhost:${PORT}`);
   });
   