import './App.css'
import DigimonList from './components/DigimonList'
import digimon from './assets/digimon.svg';

const App: React.FC = () => {
  return (
      <div className='App'>
        <img src={digimon} alt="logo-digimon" className="logo"/>
        <h1>DigiFinder</h1>
        <DigimonList />        
      </div>
  )
}

export default App
