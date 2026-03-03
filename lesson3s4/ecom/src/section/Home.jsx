import style from "./Home.module.css";
import {brands} from "../data/brads";
import {families} from "../data/families";

export default function Home() {
  return (
    <section id="home" className={style.home}>
      <div className={style.slogan}>
        <h1>Bien venue dans notre univers ecom</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A debitis
          autem eos quia ab doloremque provident cum placeat sint, tenetur
          veritatis magni. Eius nam cum nemo voluptatum aliquam, quia et.
        </p>
      </div>
      <div className={style.news}>
        <div>
            <h1>Nos meilleur families</h1>
            <div className={style.grid}>
            {
                families.slice(0,2).map(families =>(
                    <div key={families.id} className={style.card}>
                        <img src={families.image} alt=""/>
                        <h3>{families.name}</h3>
                    </div>
                ))
            }
        </div>
        </div>
        <div>
            <h1>Nos meilleur marque</h1>
            <div className={style.grid}>
            {
                brands.slice(0,2).map(brand =>(
                    <div key={brand.id} className={style.card}>
                        <img src={brand.image} alt=""/>
                        <h3>{brand.name}</h3>
                    </div>
                ))
            }
        </div>
        </div>
      </div>
    </section>
  );
}
