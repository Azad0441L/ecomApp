import Formateur from './components/Formateur.jsx'
import './App.css'
const obj ={
    nom:"Ahmed",
    specialite:"JS",
    tauxHoraire:50,
    heur:100,
}
function App() {
  {obj.map(() => (
       <Formateur/> ))
      }
  
}

export default App
