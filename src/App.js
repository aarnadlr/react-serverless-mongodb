import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [mongoData, setMongoData] = useState([]);

  useEffect(() => {
    async function getName() {
      const res = await fetch('/api/name');
      const newName = await res.json();
      setName(newName.hello);
    }
    getName();
  }, []);

  useEffect(() => {
    async function getMongoDB() {
      const res = await fetch('/api/mongodb');
      const mongoDbData = await res.json();
      setMongoData(mongoDbData);
    }
    getMongoDB();
  }, []);

  return (
    <main>
      <h1>react-serverless-mongodb</h1>

      <h2>Hardcoded json from /api/name: <span style={{color:'blue'}}>{name}</span></h2>
      <h2>Data fetched from MongoDb: <span style={{color:'blue'}}>{mongoData.items && mongoData.items[0].name}</span></h2>

      <p>Reminder: if the data is not appearing, this database may have been incidentally removed.</p>
    </main>
  );
}

export default App;
