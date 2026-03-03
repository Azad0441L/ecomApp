import style from'./style.module.css';
const Prix=3700;
const Quantite=3;
const Montant=Prix*Quantite;
function Article() {
    return (<>
    <ul>
    <li>Article : Pc HP ProBoock G11</li>
    <li>Quantité : {Quantite}</li>
    <li className={style.prix}>Prix : {Prix}</li>
    <li>Montant : {Montant}</li>
  </ul>
    </>)
}
export default Article;  