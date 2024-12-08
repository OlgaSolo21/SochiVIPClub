import SocialLink from "../SocialLink/SocialLink.jsx";

export default function Contacts() {
    return (
        <section className="contacts header" id="contacts">
            <h2 className="head__title">Контакты</h2>
            <div className="contacts__container">
                <div className="contacts__info">
                    <p className="contacts__title">г. Сочи, ул. Транспортная 78/6 (3 этаж)</p>
                    <p className="contacts__subtitle">Записывайтесь на тренировки в Sochi VIP
                        Club и откройте для себя новые возможности для здоровья и красоты.
                        Не упустите свой шанс стать сильнее и увереннее!
                        Звоните нам прямо сейчас и начните свой путь к совершенству!</p>
                    <SocialLink/>
                </div>
                <div className="contacts__map">
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A9e7ca35855256a8531222f7f6f75a42b7eddcc410776ff41ae9f7637b4449c3f&amp;source=constructor">
                    </iframe>
                </div>
            </div>
        </section>
    )
}