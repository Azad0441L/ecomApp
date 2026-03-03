import style from "./AboutUs.module.css";
import { brands } from "../data/brads";
import { families } from "../data/families";
export default function AboutUs() {
  return (
    <>
      <section id="about" className={style.about}>
        
          <div className={style.titre}>
            <h1>About-US</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eum
              magni ipsam optio hic? Dolores odit porro harum veritatis cum
              deleniti aut repudiandae cumque vitae.
            </p>
          </div>
          <div className={style.AboutUs}>
          <div className={style.cont}>
            <h1>Nos marque</h1>
            <div className={style.grid}>
              {brands.map((brand) => (
                <div key={brand.id} className={style.card}>
                  <img src={brand.image} alt="" />
                  <h3>{brand.name}</h3>
                </div>
              ))}
            </div>
          </div>
          <div className={style.cont}>
            <h1>Nos families</h1>
            <div className={style.grid}>
              {families.map((families) => (
                <div key={families.id} className={style.card}>
                  <img src={families.image} alt="" />
                  <h3>{families.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
