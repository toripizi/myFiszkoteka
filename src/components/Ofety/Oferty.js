import Oferta from './Oferta/Oferta';
import { memo, useContext, useEffect, useRef } from 'react';
import ReducerContext from '../../context/reducer';
import { Link } from "react-router-dom"


function Oferty(props) {
   const oferty = useRef();
   const reducer = useContext(ReducerContext);

   useEffect(() => {
      reducer.state.isLogedin
         ? oferty.current.style.width = "100%"
         : oferty.current.style.width = "50%"
   }, [reducer.state.isLogedin])

   return (
      <div ref={oferty} id="oferty" className="flex flex-ai-c">
         {reducer.state.isLogedin
            ? <Link
               to="/kolekcja/dodaj"
               id="addCollection"
               className={`oferta flex flex-ai-c`}>
               <i className="icon-plus"></i>
            </Link>
            : null}
         {props.dane.map(el => <Oferta key={el.id} {...el} />)}
      </div>
   );
}

export default memo(Oferty);