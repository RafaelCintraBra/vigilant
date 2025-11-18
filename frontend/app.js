import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function App() {
  const [incidents, setIncidents] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/api/incidents')
      .then(res => setIncidents(res.data))
  }, [])

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>Vigilant</h1>
      <p>Reporte incidentes de forma colaborativa.</p>

      <h2>Incidentes</h2>
      <ul>
        {incidents.map(i => (
          <li key={i.id}>{i.title} - {i.status}</li>
        ))}
      </ul>
    </div>
  )
}
