export default function AboutClub() {
    return (
        <section className="aboutClub header" id="about">
            <div className="aboutClub__info">
                <h1 className="head__title">О клубе</h1>
                <div className="aboutClub__text">
                    <p className="aboutClub__title aboutClub__address">Наш адрес:</p>
                    <p className="aboutClub__title">город Сочи, <br/> ул. Транспортная, д. 78/6</p>
                    <p className="aboutClub__title aboutClub__time">ЕЖЕДНЕВНО</p>
                    <p className="aboutClub__title aboutClub__timeInfo">07:00 - 22:00 <br/> +7‒995‒734‒22‒34</p>
                    <a href="#feedbackForm" className="aboutClub__button">Записаться</a>
                </div>
            </div>
            <div className="aboutClub__image">
                <div className="aboutClub__image-text">
                    <p className="aboutClub__image-title">Sochi VIP Club</p>
                    <p className="aboutClub__image-subtitle">Индивидуальные тренировки для вашего успеха</p>
                </div>
            </div>
        </section>
    )
}