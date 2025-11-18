const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(cors());
app.use(express.json());

// DEMO IN-MEMORY
const incidents = [];

app.get('/api/health', (req, res) => {
  res.send('ok');
});

app.post('/api/incidents', (req, res) => {
  const { title, description, category_id, latitude, longitude, severity } = req.body;

  const newIncident = {
    id: uuidv4(),
    title,
    description,
    category_id,
    latitude,
    longitude,
    severity: severity || 1,
    status: 'pending',
    created_at: new Date().toISOString()
  };

  incidents.push(newIncident);
  res.status(201).json(newIncident);
});

app.get('/api/incidents', (req, res) => {
  res.json(incidents);
});

const PORT = 8000;
app.listen(PORT, () => console.log("Backend rodando na porta " + PORT));
