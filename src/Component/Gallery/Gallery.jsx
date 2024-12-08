import {useCallback, useEffect, useState} from "react";
import {photos} from "../../utils/gallery.js";
import { useSwipeable } from 'react-swipeable';

// Функция для определения количества изображений на основе ширины экрана
const getImagesPerPage = (width) => {
    if (width <= 550) {
        return 1; // для ширины 690 и меньше - показывать 2 фотографии
    } else if (width <= 690) {
        return 2; // для ширины 690 и меньше - показывать 2 фотографии
    } else if (width <= 973) {
        return 4; // для ширины от 691 до 973 - показывать 3 фотографии
    } else {
        return 3; // для ширины больше 973 - показывать 4 фотографии
    }
};

export default function Gallery() {

    const [currentImage, setCurrentImage] = useState(0);
    const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
    const [currentGroup, setCurrentGroup] = useState(0); // Группа изображений
    const [imagesPerPage, setImagesPerPage] = useState(getImagesPerPage(window.innerWidth));


    const openLightbox = (index) => {
        setCurrentImage(index);
        setLightboxIsOpen(true);
    };

    const closeLightbox = () => {
        setCurrentImage(0);
        setLightboxIsOpen(false);
    };

    const handleKeyDown = useCallback((event) => {
        if (event.key === 'Escape') {
            closeLightbox();
        }
    }, [closeLightbox]);

    useEffect(() => {
        if (lightboxIsOpen) {
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [lightboxIsOpen, handleKeyDown]);

    const handleOverlayClick = (event) => {
        // Проверяем, что клик произошел на оверлее
        if (event.target.classList.contains('lightbox')) {
            closeLightbox();
        }
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => {
            console.log('Swiped Left');
            setCurrentImage((prev) => (prev === photos.length - 1 ? 0 : prev + 1)); // Свайп влево
        },
        onSwipedRight: () => {
            console.log('Swiped Right');
            setCurrentImage((prev) => (prev === 0 ? photos.length - 1 : prev - 1)); // Свайп вправо
        },
        preventDefaultTouchmoveEvent: true, // Предотвращает нежелательные прокрутки
        trackMouse: true, // Позволяет отслеживать мышь (хорошо для тестирования)
    });

    const gotoPrevious = () => {
        setCurrentImage((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
    };

    const gotoNext = () => {
        setCurrentImage((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        const handleResize = () => {
            setImagesPerPage(getImagesPerPage(window.innerWidth));
            // Сбрасываем группу при изменении количества изображений на странице
            setCurrentGroup(0);
        };

        window.addEventListener('resize', handleResize);

        // Убираем слушателя при размонтировании компонента
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Зависимостей нет, поэтому срабатывает только один раз

    const handleGroupChange = (change) => {
        const totalGroups = Math.ceil(photos.length / imagesPerPage);
        setCurrentGroup((prev) => {
            const newGroup = prev + change;
            return (newGroup < 0) ? totalGroups - 1 : (newGroup >= totalGroups) ? 0 : newGroup;
        });
    };

    const startingIndex = currentGroup * imagesPerPage;
    const displayedPhotos = photos.slice(startingIndex, startingIndex + imagesPerPage);


    return (
        <section className="gallery header" id="gallery">
            <h2 className="head__title">Галерея</h2>
            <div className="gallery__wrapper" {...handlers}>
                <div className="gallery__navigation">
                    <button
                        onClick={() => handleGroupChange(-1)}
                        className="gallery__navigation-button">&#60;</button>
                    <button
                        onClick={() => handleGroupChange(1)}
                        className="gallery__navigation-button">&#62;</button>
                </div>
                <div className="gallery__container">
                    {displayedPhotos.map((photo, index) => (
                        <img
                            key={index}
                            src={photo.src}
                            alt={`Photo ${index + 1}`}
                            onClick={() => openLightbox(startingIndex + index)}
                            className="gallery__image"
                        />
                    ))}
                </div>
            </div>

            {lightboxIsOpen && (
                <div className="lightbox" {...handlers} onClick={handleOverlayClick}>
                    <button className="lightbox__btnClose" onClick={closeLightbox}/>
                    <button className="lightbox__nextPrev" onClick={gotoPrevious}>&#60;</button>
                    <img
                        className="lightbox__img"
                        src={photos[currentImage].src}
                        alt={`Photo ${currentImage + 1}`}/>
                    <button className="lightbox__nextPrev" onClick={gotoNext}>&#62;</button>
                </div>
            )}
        </section>
    )
}