import type React from 'react';
import DigimonList from './components/DigimonList'
import digimonLogo from './assets/digimon.svg';

const App: React.FC = () => {
  return (
      <div className='App'>
        <img src={digimonLogo} alt="logo-digimon" className="logo" />
        <h1 className='title'>DigiFinder</h1>
        <DigimonList />        
      </div>
  )
}

export default App
