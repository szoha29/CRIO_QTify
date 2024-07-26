import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar'; 
import Hero from './Hero/Hero'; 

function App() {
  return (
    <div className="App">
      <Navbar searchData={[]} /> {/* Pass necessary props to Navbar */}
      <Hero />
    </div>
  );
}

export default App;
