import Wylogowanie from './wylogowanie/wylogowanie';
import ChangeTheme from './changeTheme/changeTheme';
import { Link } from "react-router-dom"
import { useContext } from 'react';
import ReducerContext from '../../context/reducer';

function Menu() {
   const reducer = useContext(ReducerContext);

   const zakryj = () => {
      document.querySelector('#mobileMenu').style.transform = 'translate(100vw, 0)'
   }

   return (
      <div id="mobileMenu" className="flex">
         <div id="mobileMenu-header" className="flex flex-ai-c flex-jc-sb">
            <i className="icon-cancel " onClick={zakryj}></i>
            <span>
               <ChangeTheme />
            </span>
         </div>
         {reducer.state.isLogedin ?
            <>
               <Link
                  to="/konto/zmien_haslo"
                  className="flex flex-ai-c flex-jc-sb mobileMenu-opcja"
                  onClick={zakryj}>
                  <h3>
                     <i className="icon-key"></i>
                     Zmień hasło
                  </h3>
                  <i className="icon-angle-right"></i>
               </Link>
               <Link
                  className="flex flex-ai-c flex-jc-sb mobileMenu-opcja"
                  to="/kolekcja/dodaj"
                  id="addCollection"
                  onClick={zakryj}>
                  <h3>
                     <i className="icon-doc-add"></i>
                  Dodaj nową kolekcje
               </h3>
                  <i className="icon-angle-right"></i>
               </Link></> : null}

         <Link
            to="/o_mnie"
            className="flex flex-ai-c flex-jc-sb mobileMenu-opcja"
            onClick={zakryj}>
            <h3>
               <i className="icon-college"></i>
               O Autorze
            </h3>
            <i className="icon-angle-right"></i>
         </Link>
         <Link
            to="/"
            className="flex flex-ai-c flex-jc-sb mobileMenu-opcja"
            onClick={zakryj}>
            <h3>
               <i className="icon-campsite"></i>
               Strona Główna
            </h3>
            <i className="icon-angle-right"></i>
         </Link>
         <span id="mobileMenu-logOut" onClick={zakryj}>
            <Wylogowanie />
         </span>
      </div>
   );
}
export default Menu;