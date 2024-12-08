import {useState} from "react";
import {feedback} from "../../utils/feedback.js";
import iconFeedback from '../../assets/iconFeedback.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Comment() {
    const [reviews] = useState(feedback)

    const settings = {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 550, // для экранов шире 500px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section className="comment header" id="comment">
            <h2 className="head__title">Отзывы</h2>
                <Slider {...settings}>
                {reviews.map((item) => (
                    <div key={item.id} className="feedback__carousel">
                        <div className="feedback__info">
                            <img className="feedback__img"
                                 src={iconFeedback}
                                 alt="фото автора"/>
                            <h2 className="feedback__title">{item.name}</h2>
                        </div>
                        <p className="feedback__subtitle">{item.review}</p>
                    </div>
                ))}
                </Slider>
        </section>
    )
}