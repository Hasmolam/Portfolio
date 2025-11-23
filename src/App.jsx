import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import EducationCompetitions from './components/EducationCompetitions';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <Projects />
      <Technologies />
      <EducationCompetitions />
      <Footer />
    </div>
  );
}

export default App;
