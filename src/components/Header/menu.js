import Wylogowanie from './wylogowanie/wylogowanie';
import ChangeTheme from './changeTheme/changeTheme';

function Menu() {
   const zakryj = () => {
      document.querySelector('#mobileMenu').style.transform = 'translate(100vw, 0)'
   }

   return (
      <div id="mobileMenu" className="hide-for-desktop flex">
         <div id="mobileMenu-header" className="flex flex-ai-c flex-jc-sb">
            <i className="icon-cancel hide-for-desktop" onClick={zakryj}></i>
            <span>
               <ChangeTheme cn="" />
            </span>
         </div>
         <div className="flex flex-ai-c flex-jc-sb mobileMenu-opcja">
            <h3>
               <i className="icon-key"></i>
               Zmień hasło
            </h3>
            <i className="icon-angle-right"></i>
         </div>
         <div className="flex flex-ai-c flex-jc-sb mobileMenu-opcja">
            <h3>
               <i className="icon-doc-add"></i>
               Dodaj nową kolekcje
            </h3>
            <i className="icon-angle-right"></i>
         </div>
         <span id="mobileMenu-logOut">
            <Wylogowanie />
         </span>
      </div>
   );
}
export default Menu;