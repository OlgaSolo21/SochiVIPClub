import prisesIcon from "../../assets/prisesIcon.png"

export default function Prises () {

    return (
        <section className="prices header" id="prices">
            <div className="prices__info">
                <h2 className="head__title">Цены</h2>
                <div className="prices__club">
                    <p className="prices__subtitle">
                        Добро пожаловать в "Sochi VIP Club" – уникальную фитнес-студию, где ваши цели
                        и достижения становятся нашим приоритетом.
                    </p>
                    <p className="prices__subtitle">
                        Наша небольшая, но оборудованная современными тренажерами студия предлагает:
                        <br/>&raquo; индивидуальные занятия
                        <br/>&raquo; возможность арендовать студию на час
                        <br/>&raquo; групповые тренировки
                        <br/>&raquo; абонементы на индивидуальные занятия.
                    </p>
                    {/*<p className="prices__subtitle">*/}
                    {/*    Здесь, в "Sochi VIP Club", мы понимаем, что каждый человек уникален, и*/}
                    {/*    подход к тренировкам должен соответствовать вашим потребностям и возможностям.*/}
                    {/*    Мы поможем вам достигнуть своих целей, будь то похудение, наращивание*/}
                    {/*    мышечной массы или просто поддержание активного образа жизни.*/}
                    {/*</p>*/}
                    {/*<p className="prices__subtitle">*/}
                    {/*    Кроме индивидуальных занятий, мы также предлагаем парные тренировки –*/}
                    {/*    идеальное решение для ваших совместных тренировок с близкими.*/}
                    {/*    Наслаждайтесь временем, проведенным вместе, а наши тренеры помогут*/}
                    {/*    вам и вашим партнерам раскрыть потенциал в движении и fitness!*/}
                    {/*</p>*/}
                    <p className="prices__subtitle">
                        Присоединяйтесь к "Sochi VIP Club" и откройте для себя пространство, где здоровье и успех идут
                        рука об руку!
                    </p>
                </div>
            </div>
            <div className="prices__grid">
                <div className="prices__text">
                    <img src={prisesIcon} className="prices__icon"/>
                    <p className="prices__title">Индивидуальная тренировка</p>
                    <span className="prices__title">2 000 р</span>
                </div>
                <div className="prices__text">
                    <img src={prisesIcon} className="prices__icon"/>
                    <p className="prices__title">Аренда студии на час</p>
                    <span className="prices__title">2 000 р</span>
                </div>
                <div className="prices__text">
                    <img src={prisesIcon} className="prices__icon"/>
                    <p className="prices__title">Тренировка в группе 2-4 человека</p>
                    <span className="prices__title">2 000 р</span>
                </div>
                <div className="prices__text">
                    <img src={prisesIcon} className="prices__icon"/>
                    <p className="prices__addTitle prices__title">Абонемент "Свободные часы"</p>
                </div>
                <div className="prices__addText">
                    <p className="prices__title">8 занятий</p>
                    <span className="prices__title">5 000 р</span>
                </div>
                <div className="prices__addText">
                    <p className="prices__title">12 занятий</p>
                    <span className="prices__title">5 000 р</span>
                </div>
                    <div className="prices__underline"/>
                    <a href="#feedbackForm" className="prices__button">Записаться</a>
                </div>
        </section>
)
}