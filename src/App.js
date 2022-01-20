import { useState, useEffect } from 'react';

function App() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])

  async function fetchData() {
    const response = await fetch('https://api.publicapis.org/entries');
    const data = await response.json();
    setEntries(data.entries);
  }

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {entries.map((entry, index) => (
            <li key={index}>{entry.Description}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
