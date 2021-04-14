import themeContext from '../../../context/theme';
import { useContext } from 'react';

export default function ChangeTheme() {
   const { onChange } = useContext(themeContext);

   return (
      <div id="theme" className={` flex flex-jc-c flex-ai-c`}>
         <i className="icon-sun"></i>
         <div style={{ alignSelf: 'center' }} onClick={onChange} className="checkButton flex flex-ai-c">
            <div className="checkButton-circle"></div>
         </div>
         <i className="icon-moon" style={{ marginRight: '0' }}></i>
      </div>
   );
}
