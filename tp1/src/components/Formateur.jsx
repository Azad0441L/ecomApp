import { Children } from 'react';
// import './style.css';
import ReactPlayer from 'react-player';
function Article({nom,specialite,tauxHoraire,heur}) {
    const salair = ()=>{
        return tauxHoraire*heur;
        }
    return(
        <>
        <h2>le Nomo : {nom}</h2>
        <h2>Spécialité : {specialite}</h2>
        <h2> Salaire : {salair} </h2>
        </>
    )
}
export default Article;