import SocialLink from "../SocialLink/SocialLink.jsx";
import {useEffect, useState} from "react";
import emailjs from 'emailjs-com';
import PopupForm from "../PopupForm/PopupForm.jsx";

export default function FeedbackForm() {

    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [phone, setPhone] = useState('');
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        emailjs.init('vZitGlRbI1vuazW3g'); // Замените YOUR_USER_ID на ваш идентификатор пользователя
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);

        const formData = {
            name,
            phone,
        };
        if (isValid) {
            emailjs.send('service_ond5m7r', 'template_v4609op', formData, 'vZitGlRbI1vuazW3g')
                .then(() => {
                    setPopupMessage('Успех! В ближайшее время мы тебе позвоним❤️');
                    setPopupVisible(true);
                    setName('');
                    setPhone('');
                })
                .catch(() => {
                    setPopupMessage('Какая-то ошибка, попробуй позже. Либо приходи к нам в мессенджеры❤️');
                    setPopupVisible(true);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }

    // Функция для проверки имени
    const validateName = (value) => {
        const pattern = /^[a-zA-Zа-яА-ЯЁё \-]+$/;
        if (!pattern.test(value)) {
            setNameError('Можно вводить только буквы');
        } else {
            setNameError('');
        }
    };

    // Функция для форматирования номера телефона
    const formatPhoneNumber = (value) => {
        // Удаляем все символы, кроме цифр
        const cleaned = value.replace(/\D/g, '');
        const match = cleaned.match(/^(\d{0,11})$/); // Учитываем до 11 цифр

        if (match) {
            const num = match[1];
            const len = num.length;

            if (len > 0) {
                // Форматируем номер в структуру +7 XXX XXX XX XX
                let formattedNumber = '+7 ';
                if (len > 1) formattedNumber += num.slice(1, 4);
                if (len > 4) formattedNumber += ' ' + num.slice(4, 7);
                if (len > 7) formattedNumber += ' ' + num.slice(7, 9);
                if (len > 9) formattedNumber += ' ' + num.slice(9, 11);

                return formattedNumber.trim();
            }
        }
        return '';
    };

    // Функция для проверки валидности номера
    const validatePhoneNumber = (value) => {
        const regEx = /^\+7 \d{3} \d{3} \d{2} \d{2}$/;
        return regEx.test(value);
    };

    const handlePhoneChange = (e) => {
        const newPhone = e.target.value;
        const formattedPhone = formatPhoneNumber(newPhone);
        setPhone(formattedPhone);
        setIsValid(validatePhoneNumber(formattedPhone));
    };

    const closePopup = () => {
        setPopupVisible(false);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            closePopup();
        }
    };

    useEffect(() => {
        if (popupVisible) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [popupVisible]);

    return (
        <section className="feedbackForm" id="feedbackForm">
            <div className="feedbackForm__wrapper">
                <p className="feedbackForm__title">Остались вопросы?</p>
                <p className="feedbackForm__subtitle">Оставь свой номер телефона и мы тебе
                    перезвоним</p>
                <div className="feedbackForm__lines">
                    <div className="feedbackForm__line"/>
                    <span className="feedbackForm__span">или</span>
                    <div className="feedbackForm__line"/>
                </div>
                <p className="feedbackForm__subtitle">Кликай на иконки ниже и напиши нам в соцсетях</p>
                <SocialLink/>
            </div>
            <form className="feedbackForm__form" onSubmit={handleSubmit}>
                <input
                    className="feedbackForm__input"
                    type="text"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                        validateName(e.target.value); // Проверяем имя при изменении
                    }}
                    placeholder="Имя"
                    minLength={2}
                    maxLength={32}
                    pattern="^[a-zA-Zа-яА-ЯЁё \-]+$"
                    required
                />
                {nameError && <span className="error">{nameError}</span>}
                <input
                    className="feedbackForm__input"
                    type="tel"
                    placeholder="+7 ___ ___ __ __"
                    value={phone}
                    maxLength={16}
                    onChange={handlePhoneChange}
                    required
                />
                <button className="feedbackForm__button" type="submit" disabled={isLoading}>
                    {isLoading ? (
                        <div className="spinner"/>
                    ) : (
                        'Отправить'
                    )}
                </button>
                <p className="feedbackForm__text">Нажимая на кнопку «Отправить» Вы принимаете условия<br/>
                    <a href="https://drive.google.com/file/d/1CdbF9SiCRzh-qMoBjLjR1E6_Q3TGvMp6/view?usp=sharing"
                       target="_blank"
                       className="feedbackForm__text policy">Политики обработки персональных данных</a>
                     и даете согласие на обработку персональных данных.
                </p>
            </form>

            {popupVisible && <PopupForm message={popupMessage} onClose={closePopup}/>}

        </section>
    )
}