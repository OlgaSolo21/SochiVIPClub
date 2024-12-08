import {Link, NavLink} from "react-router-dom";
import SocialLink from "../SocialLink/SocialLink.jsx";

export default function Header({ openBurger }) {

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return(
        <header className="header" id="header">
            <Link className="header__link-logo" to="/"/>
            <nav className="header__links">
                <button
                    className="link header__active"
                    onClick={() => scrollToSection("about")}>О клубе
                </button>
                <button
                    className="link header__active"
                    onClick={() => scrollToSection("trainer")}>Тренер
                </button>
                <button
                    className="link header__active"
                    onClick={() => scrollToSection("prices")}>Цены
                </button>
                <button
                    className="link header__active"
                    onClick={() => scrollToSection("gallery")}>Фото
                </button>
                <button
                    className="link header__active"
                    onClick={() => scrollToSection("comment")}>Отзывы
                </button>
                <button
                    className="link header__active"
                    onClick={() => scrollToSection("contacts")}>Контакты
                </button>
            </nav>
            <SocialLink/>
            <div className="burger">
                <button className="burger__button" type="button" onClick={openBurger}/>
            </div>
        </header>
    )
}