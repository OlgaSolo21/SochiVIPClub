import SocialLink from "../SocialLink/SocialLink.jsx";

export default function Footer() {
    return (
        <footer className="footer">
            {/*<a className="header__link-logo" href="#header"/>*/}
            <nav className="footer__links">
                <a
                    className="link footer__nav"
                    href="#about">О клубе
                </a>
                <a
                    className="link footer__nav"
                    href="#trainer">Тренер
                </a>
                <a
                    className="link footer__nav"
                    href="#prices">Цены
                </a>
                <a
                    className="link footer__nav"
                    href="#gallery">Фото
                </a>
                <a
                    className="link footer__nav"
                    href="#comment">Отзывы
                </a>
                <a
                    className="link footer__nav"
                    href="#contacts">Контакты
                </a>
            </nav>
            <div className="footer__time">
                <p className="footer__title">ЕЖЕДНЕВНО</p>
                <p className="footer__timeInfo">07:00 - 22:00 <br/> +7‒995‒734‒22‒34</p>
            </div>
            <div className="footer__time">
                <p className="footer__address">город Сочи, <br/> ул. Транспортная, д. 78/6</p>
                <SocialLink/>
                <p className="footer__copyright">&copy; created by Shelekhova</p>
            </div>
        </footer>
    )
}