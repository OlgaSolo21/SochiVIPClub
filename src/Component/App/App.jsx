import { useState } from 'react'
import Header from '../Header/Header.jsx'
import BurgerMenuPopup from "../BurgerMenuPopup/BurgerMenuPopup.jsx";
import AboutClub from "../AboutClub/AboutClub.jsx";
import Trainer from "../Trainer/Trainer.jsx";
import Prises from "../Prises/Prises.jsx";
import Gallery from "../Gallery/Gallery.jsx";
import Comment from "../Comment/Comment.jsx";
import Contacts from "../Contacts/Contacts.jsx";
import Footer from "../Footer/Footer.jsx";
import FeedbackForm from "../FeedbackForm/FeedbackForm.jsx";
import ScrollToUp from "../ScrollToUp/ScrollToUp.jsx";


function App() {

    const [isBurgerMenu, setIsBurgerMenu] = useState(false)
    function handleOpenBurger() {
        setIsBurgerMenu(true)
    }
    function handleClosePopup() {
        setIsBurgerMenu(false)
    }

  return (
    <>
        <Header openBurger={handleOpenBurger}/>

        <ScrollToUp/>

        <AboutClub/>
        <Trainer/>
        <Prises/>
        <Gallery/>
        <Comment/>
        <FeedbackForm/>
        <Contacts/>

        <Footer/>

        <BurgerMenuPopup
            isOpen={isBurgerMenu}
            onClose={handleClosePopup}
        />
    </>
  )
}

export default App
