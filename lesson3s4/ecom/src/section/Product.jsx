import { products } from "../data/products"
import style from "./Product.module.css"
import Products from "../components/Products"

export default function Product(){
    return(
        <section id="product" className={style.products}>
            <div className={style.grid}>
                <h2>Nos produits</h2>
                {
                    products.map(p=><Products key={p.id} product={p}/>)
                }
            </div>

        </section>
    )
}