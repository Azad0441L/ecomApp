import style from "./Header.module.css";
export default function Header(){
    return(
        <header>
            <div className={style.logo}>
                eCom App
            </div>
            <nav className={style.nav}> <a href="#home">Home</a>
            <a href="#product">Product</a>
            <a href="#about">About Us</a>
            <a href="#Contact">Contact</a>
            </nav>
        </header>
    )
}