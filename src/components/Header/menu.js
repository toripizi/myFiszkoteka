import Wylogowanie from './wylogowanie/wylogowanie';
import ChangeTheme from './changeTheme/changeTheme';

function Menu() {
   const zakryj = () => {
      document.querySelector('#mobileMenu').style.transform = 'translate(50vw, 0)'
   }

   return (
      <div id="mobileMenu" className="hide-for-desktop flex">
         <span className="flex flex-ai-c flex-jc-sb">
            <i className="icon-cancel hide-for-desktop" onClick={zakryj}></i>
            <span>
               <ChangeTheme cn="" />
            </span>
         </span>
         <span>
            <Wylogowanie />
         </span>
      </div>
   );
}
export default Menu;