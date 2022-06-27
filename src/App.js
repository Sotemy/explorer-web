import { Container } from 'react-bootstrap';
import { useState } from "react"

import './App.css';
import Navigation from './components/Navigation';
import Items from './components/Items';

function App() {
  const [fetchedData, setData] = useState({});
  setData(fetch('http://localhost:8000/').then(response => response.json()))
  return (
    <>
    <Navigation />
    <Container>
      <Items items={fetchedData}/>
    </Container>
    </>
  );
}

export default App;
