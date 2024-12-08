import telegramIcon from "../../assets/telegramIcon.svg";
import instIcon from "../../assets/instIcon.svg";
import whatsAppIcon from "../../assets/whatsappIcon.svg";


export default function SocialLink() {
    return (
        <nav className="icons">
            <a href="https://t.me/vipclubgym" target="_blank" rel="noreferrer">
                <img src={telegramIcon} alt="telegram" className="icons__link"/>
            </a>
            <a href="https://www.instagram.com/vipclubgym.sochi/?igsh=MTZoeG1sNGM2ODF6Mg%3D%3D" target="_blank" rel="noreferrer">
                <img src={instIcon} alt="telegram" className="icons__link"/>
            </a>
            <a href="https://wa.me/79890884350" target="_blank" rel="noreferrer">
                <img src={whatsAppIcon} alt="telegram" className="icons__link"/>
            </a>
        </nav>
    )
}