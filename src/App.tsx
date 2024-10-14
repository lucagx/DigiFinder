import './styles/global.css'
import DigimonList from './components/DigimonList'
import digimonLogo from './assets/digimon.svg';

const App: React.FC = () => {
  return (
      <div className='App'>
        <img src={digimonLogo} alt="logo-digimon" className="logo" />
        <h1>DigiFinder</h1>
        <DigimonList />        
      </div>
  )
}

export default App
