import {useState} from "react";

export default function ScrollToUp() {
    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop;
        setVisible(scrollTop > 100);
    };

    const scrollToTop = () => {
        const scrollStep = -window.scrollY / (200 / 900);
        const scrollAnimation = window.requestAnimationFrame(scrollToTop);

        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            window.cancelAnimationFrame(scrollAnimation);
        }
    };

    window.addEventListener("scroll", handleScroll);

    return (
        <>
            {visible && (
                <p id="scrollUpBtn" onClick={scrollToTop} className="scrollUp">Наверх</p>
            )}
        </>
    )
}