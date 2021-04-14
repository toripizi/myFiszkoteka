import { useEffect, useContext, useState } from 'react';
import ReducerContext from '../../context/reducer';

export default function Menu() {
   const reducer = useContext(ReducerContext);
   const [term, setTerm] = useState('');
   const [term2, setTerm2] = useState('');

   const onSearch = () => {
      reducer.dispatch({
         type: "setDane",
         newDane: reducer.state.dataBaseColls.filter(e => e.title.toLowerCase().includes(term.toLowerCase()))
      });
      if (term2) {
         reducer.dispatch({
            type: "setDane",
            newDane: reducer.state.dataBaseColls.filter(e => e.category.toLowerCase().includes(term2.toLowerCase()))
         });
      }
   }

   useEffect(() => {
      document.querySelector('#main-input').focus();
   }, []);

   return (
      <nav className="flex flex-ai-c flex-jc-sb">
         <div id="searchBar" className="flex flex-ai-c flex-jc-c">
            <i className="icon-search hide-for-mobile"></i>
            <span style={{ width: '20px' }} className="hide-for-desktop"></span>
            <input
               id="main-input"
               onKeyDown={(e) => e.key === "Enter" && onSearch()}
               onChange={(e) => setTerm(e.target.value)}
               type="text"
               placeholder="Szukaj po tytule..." />
            <div className="hide-for-desktop flex flex-ai-c flex-jc-c" onClick={(e) => onSearch()}>
               <i className="icon-search searchicon"></i>
            </div>
         </div>
         <div id="searchOption" className="flex flex-ai-c flex-jc-c hide-for-mobile">
            <i className="icon-location"></i>
            <input
               className="typeText"
               type="text"
               placeholder="Szukaj po kategori..."
               onKeyDown={(e) => e.key === "Enter" && onSearch()}
               onChange={(e) => setTerm2(e.target.value)} />
         </div>
         <div id="searchElse" className="flex flex-ai-c flex-jc-sb hide-for-mobile">
            <label className="label">
               <input type="checkbox" />
               <div className="checkmark flex flex-ai-c flex-jc-c">
                  <i className="icon-ok"></i>
               </div>
               Some Option
            </label>
            <div id="searchElse-button">
               <button onClick={(e) => onSearch()}>Szukaj</button>
            </div>
         </div>
      </nav>
   );
}