import { useContext, useEffect, useRef, useState } from 'react';
import ReducerContext from '../../context/reducer'
import { Link } from 'react-router-dom';
import { deleteColl, downloadColls } from "../../dataBaseOperations/business"
import { objectToArrayWithId } from "../../hooks/objectToArrayWithId";

export default function Options() {
   const reducer = useContext(ReducerContext);
   const firstButton = useRef();
   const [id, setId] = useState(0);
   const data = JSON.parse(window.localStorage.getItem('token-data'));

   const isSthChecked = () => {
      let licznik = 0;
      reducer.state.dane.map(el => {
         if (el.checked) {
            licznik++;
         }
         return 0;
      })
      return licznik;
   }

   const getId = () => {
      const asd = [...reducer.state.dane.filter(el => el.checked === true)][0]
      return asd ? asd.id : 0;
   }

   useEffect(() => {
      const options = document.querySelector('#options');
      if (isSthChecked() > 1) {
         firstButton.current.style.display = 'none';
      }
      else {
         firstButton.current.style.display = 'flex';
         setId(getId())
      }
      if (isSthChecked()) {
         options.style.opacity = '1';
         options.style.height = '80px';
      }
      else {
         options.style.opacity = '0';
         options.style.height = '0';
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [reducer.state.dane])

   const deleteChendler = (e) => {
      reducer.dispatch({ type: 'setLoading2', value: true });
      reducer.state.dane.map(coll => {
         if (coll.checked) {
            deleteColl(`/colls/${data.localId}/${coll.id}`).then(() => {
               downloadColls(`/colls/${data.localId}`).then(result => {
                  reducer.dispatch({ type: "setDataBaseColls", newDataBase: objectToArrayWithId(result) })
                  reducer.dispatch({ type: "setDane", newDane: objectToArrayWithId(result) });
                  reducer.dispatch({ type: 'setLoading2', value: false });
               })
            })
         }
         return true
      })
   }

   return (
      <div id="options" className="flex flex-ai-c flex-jc-sb">
         <div ref={firstButton} className="flex" id="options-buttons">
            <Link className="button flex flex-ai-c flex-jc-c" to={`/kolekcja/nauka/${id}`}>Ucz się</Link>
            {reducer.state.isLogedin ? <Link to={`/kolekcja/edycja/${id}`} className="button flex flex-ai-c flex-jc-c" id="options-buttons-edit" >Edytuj</Link> : null}
         </div>
         <div></div>
         {reducer.state.isLogedin ? <button className="button" onClick={deleteChendler} id="options-buttons-delete">Usuń</button> : null}
      </div>

   );
}