import trainerFoto from "../../assets/trainerFoto.jpg"

export default function Trainer() {
    return (
        <section className="header trainer" id="trainer">
            <div className="trainer__visual">
                <h2 className="head__title">Тренер</h2>
                <img className="trainer__image" src={trainerFoto} alt="фото тренера"/>
            </div>
            <div className="trainer__info">
                <p className="trainer__name">Олеся</p>
                <p className="trainer__position">- ведущий фитнес тренер, нутрициолог, адепт адекватного спорта и любви
                    к себе -</p>
                <div className="trainer__line">
                    <p className="trainer__text">
                        Уже более 8 лет в сфере фитнеса, Олеся специализируется на создании
                        уникальных программ тренировок, которые идеально соответствуют вашим целям и
                        физическим возможностям. Каждое занятие спланировано так, чтобы не только развивать
                        физическую форму, но и наслаждаться процессом!
                    </p>
                    <p className="trainer__text">
                        Олеся считает, что занятия спортом — это не только про упражнения, но и про
                        мотивацию, уверенность в себе и позитивные изменения в жизни. Каждый клиент
                        уникален, и в Sochi VIP Club мы уделяем внимание вашим индивидуальным
                        потребностям, будь то похудение, набор мышечной массы или поддержание общей
                        физической формы.
                    </p>
                    <p className="trainer__text">
                        Давайте вместе сделаем шаг к новой жизни, полной энергии и здоровья!
                        Записывайтесь на первое занятие с Олесей прямо сейчас и откройте для себя мир
                        фитнеса в Sochi VIP Club!
                    </p>
                </div>
            </div>
        </section>
    )
}