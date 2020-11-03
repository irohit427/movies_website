import React from 'react';
import Navbar from './components/Navbar'
import './App.scss'
import CarouselSection from './components/Carousel'
import Section from './components/Section'

function App() {
  return (
    <div className="app">
      <Navbar />
      <CarouselSection />
      <div className="container">
        <Section title="New Arrival" />
      </div>
    </div>
    
  );
}

export default App;
