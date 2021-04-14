
import Logo from '../UI/logo';
import Wylogowanie from './wylogowanie/wylogowanie';
import ChangeTheme from './changeTheme/changeTheme';
import themeContext from '../../context/theme';
import { useContext, useState } from "react";
import Menu from "./menu";

function Header() {
   const { color } = useContext(themeContext);

   const odkryj = () => {
      document.querySelector('#mobileMenu').style.transform = 'translate(0, 0)'
   }

   return (
      <header className={`flex flex-ai-c flex-jc-sb ${color}`}>
         <Logo />
         <div className={`flex flex-ai-c flex-jc-sa`}>
            <Wylogowanie cn="hide-for-mobile" />
            <ChangeTheme cn="hide-for-mobile" />
            <i className="icon-menu-1 hide-for-desktop" onClick={odkryj}></i>
         </div>
         <Menu />
      </header>
   );
}
export default Header;