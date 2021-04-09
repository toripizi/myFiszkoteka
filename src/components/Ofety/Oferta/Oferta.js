import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import ReducerContext from '../../../context/reducer';

const propTypes = {
   title: PropTypes.string.isRequired,
   category: PropTypes.string.isRequired,
   color: PropTypes.string.isRequired,
   icon: PropTypes.string.isRequired,
   checked: PropTypes.bool.isRequired,
}

function Oferta(props) {
   const reducer = useContext(ReducerContext);
   const [name, setName] = useState('');
   const [nameTwo, setNameTwo] = useState('');
   const score = props.memory.umiem.length - 1 ? Math.floor(((props.memory.umiem.length - 1) / props.words.length) * 100) : 0

   const youHaveToCheck = (number) => {
      let bool;
      const newDane = reducer.state.dane;
      newDane.map(el => {
         if (el.id === number && el.checked) {
            el.checked = false;
            bool = false;
         }
         else if (el.id === number && !el.checked) {
            el.checked = true;
            bool = true;
         }
         return true;
      })
      reducer.dispatch({ type: 'setDane', newDane: [...newDane] });
      return bool;
   }

   useEffect(() => {
      props.checked ? setName('checkedCollection') : setName('');
      props.checked ? setNameTwo('ukryj') : setNameTwo('');
   }, [props.checked, props.id]);

   return (
      <div className={`oferta ${name}`} id={`oferta${props.id}`}>
         <div className="kwadrat flex flex-ai-c flex-jc-c" style={{ backgroundColor: props.color }}><i className={`${props.icon}`}></i></div>
         <span>{`${props.time.day} ${props.time.month}`} | {props.words.length} słówek</span>
         <h5>{props.title}</h5>
         <span>{props.category}</span>
         <p>{score}%</p>
         <button onClick={() => youHaveToCheck(props.id)} className="flex flex-ai-c flex-jc-c">
            <i id={`icon${props.id}`} className={`icon-ok ${nameTwo}`}></i>
         </button>
      </div>
   );
}

Oferta.propTypes = propTypes;

export default Oferta;