import Style from './style.module.css'
function Etudiant({nom, prenom,not1,not2}) {
    const moy =()=>{
        return (not1+not2)/2;
    }
    return(
        <tr>
            <td>
                {nom}
            </td>
            <td>
                {prenom}
            </td>
            <td>
                {not1}
            </td>
            <td>
                {not2}
            </td>
            <td>
                {moy()}
            </td>
        </tr>
    )
}
export default Etudiant;