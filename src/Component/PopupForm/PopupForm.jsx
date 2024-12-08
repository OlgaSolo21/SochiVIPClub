export default function PopupForm({message, onClose}) {
    return (
        <div className="popup__overlay" onClick={onClose}>
            <div className="popup__content" onClick={(e) => e.stopPropagation()}>
                <span className="popup__close" onClick={onClose}/>
                <p className="popup__message">{message}</p>
            </div>
        </div>
    )
}