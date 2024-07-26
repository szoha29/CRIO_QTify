import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar'; 
import Hero from './Hero/Hero'; 
import Section from './Section/Section';

function App() {
  return (
    <div className="App">
      <Navbar searchData={[]} /> {/* Pass necessary props to Navbar */}
      <Hero />
      <Section title="Top Albums" apiEndpoint="https://qtify-backend-labs.crio.do/albums/top" />
      <Section title="New Albums" apiEndpoint="https://qtify-backend-labs.crio.do/albums/new" />
    </div>
  );
}

export default App;
