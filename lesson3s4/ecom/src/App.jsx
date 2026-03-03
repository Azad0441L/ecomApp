import Header from "./components/Header";
import style from "./App.module.css";
import Footer from "./components/Footer";
import Home from "./section/Home";
import AboutUs from "./section/AboutUs";
import Contact from "./section/Contact";
import Product from "./section/Product";

export default function App() {
  return (
    <>
      <Header />
      <main> 
        <Home/>
        <AboutUs/>
        <Contact/>
        <Product/>
      </main>
      <Footer />
    </>
  );
}
