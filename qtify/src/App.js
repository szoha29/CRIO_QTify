import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar'; 
import Hero from './Hero/Hero'; 
import { App as Section} from './Section/Section';

function App() {
  return (
    <div className="App">
      <Navbar searchData={[]} /> {/* Pass necessary props to Navbar */}
      <Hero />
      <Section />
    </div>
  );
}

export default App;
