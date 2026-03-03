import style from "./Products.module.css"
export default function product({products}){
    return(
        <div className={style.product}>
            <img src={products.images} alt={products.ref}/>
            <h4>{products.ref}</h4>
            <p>
                <del>{products.price}</del>, <strong>{products.promo}</strong>
            </p>
            <ul>
                <li>brand :{products.brand}</li>
                <li>familly :{products.familly}</li>
            </ul>
        </div>
    )
}