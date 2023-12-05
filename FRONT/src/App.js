import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'

function App() {
  const DOMAIN = process.env.REACT_APP_API_URL
  console.log(DOMAIN)

  const [response, setResponse] = useState([])

  useEffect(() => {
    fetch(`http://${DOMAIN}:5000/`)
       .then((res) => res.json())
       .then((data) => {
          console.log(data);
          setResponse(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);

  return (
    <div className="App">
      <h1>React App</h1>
      <hr />
      <h3>Contenu récupéré depuis l'api</h3>
      <p>
        {response}
      </p>
    </div>
  );
}

export default App;
