import {NavLink} from "react-router-dom";

export default function BurgerMenuPopup({isOpen, onClose}) {

    return (
        <header>
            <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
                <div className="popup__container">
                    <button
                        type="button"
                        aria-label="Close"
                        className="popup__buttonClose"
                        onClick={onClose}
                    />
                    <div className="popup__navigation">
                        <nav className="popup__links">
                            <a
                                className="popup__link"
                                href="#about"
                                onClick={onClose}>О клубе</a>
                            <a
                                className="popup__link"
                                href="#trainer"
                                onClick={onClose}>Тренер</a>
                            <a
                                className="popup__link"
                                href="#prices"
                                onClick={onClose}>Цены</a>
                            <a
                                className="popup__link"
                                href="#gallery"
                                onClick={onClose}>Фото</a>
                            <a
                                className="popup__link"
                                href="#comment"
                                onClick={onClose}>Отзывы</a>
                            <a
                                className="popup__link"
                                href="#contacts"
                                onClick={onClose}>Контакты</a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}