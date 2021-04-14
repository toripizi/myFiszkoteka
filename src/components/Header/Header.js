
import Logo from '../UI/logo';
import themeContext from '../../context/theme';
import { useContext } from "react";
import Menu from "./menu";

function Header() {
   const { color } = useContext(themeContext);

   const odkryj = () => {
      document.querySelector('#mobileMenu').style.transform = 'translate(0, 0)'
   }

   return (
      <header className={`flex flex-ai-c flex-jc-sb ${color}`}>
         <Logo />
         <i className="icon-menu-1 " onClick={odkryj}></i>
         <Menu />
      </header>
   );
}
export default Header;