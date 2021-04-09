
import Logo from '../UI/logo';
import Wylogowanie from './wylogowanie/wylogowanie';
import ChangeTheme from './changeTheme/changeTheme';
import themeContext from '../../context/theme';
import { useContext } from "react";

function Header() {
   const { color } = useContext(themeContext);
   return (
      <header className={`flex flex-ai-c flex-jc-sb ${color}`}>
         <Logo />
         <div id="theme" className={`flex flex-ai-c flex-jc-sa`}>
            <Wylogowanie />
            <ChangeTheme />
         </div>
      </header>
   );
}
export default Header;