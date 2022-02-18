import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import planets from './data/planets';
import PlanetCard from './components/PlanetCard';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
        <PlanetCard />
      </>
    );
  }
}

export default App;
