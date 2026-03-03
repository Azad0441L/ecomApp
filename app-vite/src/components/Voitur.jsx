import style from'./style.module.css';
const voiture={
  marque:"BMW",
  type:"Berline",
  anneSortie : 2009,
};
function Voitur() {
    return(<><dl>
    <dt>Marque : {voiture.marque}</dt>
    <dt>Type : {voiture.type}</dt>
    <dt>Année de Sortie : {voiture.anneSortie}</dt>
    <dt id={style.etat}>Etat : {voiture.anneSortie<2010 ? "Ancien" : voiture.anneSortie<2020  ? "moyenne" : "Nouveau"}</dt>
  </dl></>)
}
export default Voitur;