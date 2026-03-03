import style from "./Contact.module.css";
export default function Contact() {
  return (
    <section id="Contact" className={style.contact}>
      <h2>Contactez-nous !</h2>
      <div className={style.cont}>
        <div className={style.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7383.661355490439!2d-8.079779977264439!3d31.62944038046647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafe971f8ba510b%3A0xe7be2c262c9ebc3b!2z2YXYsdis2KfZhiDZhdin2LHZg9iq!5e0!3m2!1sen!2sma!4v1771328785194!5m2!1sen!2sma"
            width="100%"
            height="100%"
            style={{border:0}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={style.form}>
            <input type="text" placeholder="nom" required/>
            <input type="text" placeholder="Email" required/>
            <textarea type="text" placeholder="Message" required rows="5"/>
            <button type="submit">Envoyer</button>
        </div>
      </div>
    </section>
  );
}
