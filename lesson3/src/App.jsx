import Etudiant from './components/Etudiant'
import Style from './components/style.module.css'

const obj = [{
  id:1,
  nom: "GULAM HUSSAIN",
  prenom: "AZAD",
  not1: 18,
  not2: 19,
},{
  id:2,
  nom: "Doe",
  prenom: "John",
  not1: 15,
  not2: 18,
},
{id:3,
nom: "Smith",
prenom: "Anna",
not1: 12,
not2: 14},];
function App() {
  return(
    <>
    <table cellSpacing={0}>
      <tr>
        <td>nom</td>
        <td>prénom</td>
        <td>note1</td>
        <td>note2</td>
        <td>moyenne</td>
      </tr>
      {obj.map((etudiant) => ( 
      <Etudiant key={etudiant.id}{...etudiant}></Etudiant>))}
    </table>
    
    </>
  )
}

export default App
