import { Children } from 'react';
import './style.css';
import style from './style.module.css';

function Article({designation, famille, marque, prix, promo,children}) {
    return(
        <div>
            <h3 className={style.class2}>Désignation : {designation}</h3>
            <h4>Famille : {famille}/{marque}</h4>
            <h4>Prix : {prix}DH</h4>
            <h3>En Promos : {promo===true ? "oui" : "Non"}</h3>
            <h3>Description :{children}</h3>
            <hr/>
        </div>
    )
}
export default Article;
