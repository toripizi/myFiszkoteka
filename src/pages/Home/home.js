import Oferty from '../../components/Ofety/Oferty';
import Waiting from '../../components/UI/Waiting';
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import { useContext, useEffect } from 'react';
import ReducerContext from '../../context/reducer';
import Auth from '../../components/autentykacja/autentykacja';
import { objectToArrayWithId } from "../../hooks/objectToArrayWithId";
import { downloadColls } from "../../dataBaseOperations/business"
import axios from 'axios'

export default function Home() {
   const reducer = useContext(ReducerContext);
   const data = JSON.parse(window.localStorage.getItem('token-data'));

   useWebsiteTitle("Strona Główna");

   const fetch = async e => {
      downloadColls(`/colls/${data.localId}`).then(result => {
         reducer.dispatch({ type: "setDataBaseColls", newDataBase: [...objectToArrayWithId(result)] })
         reducer.dispatch({ type: "setDane", newDane: [...objectToArrayWithId(result)] });
         reducer.dispatch({ type: 'setLoading2', value: false });
      })
   }

   const fetchDefault = async e => {
      downloadColls(`/default-collection`).then(result => {
         reducer.dispatch({ type: "setDataBaseColls", newDataBase: objectToArrayWithId(result) })
         reducer.dispatch({ type: "setDane", newDane: objectToArrayWithId(result) });
         reducer.dispatch({ type: 'setLoading2', value: false });
      })
   }

   useEffect(() => {
      reducer.dispatch({ type: 'setLoading2', value: true });
      reducer.state.isLogedin ? fetch() : fetchDefault();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [reducer.state.isLogedin])

   const f = async e => {
      try {
         const res = await axios.get(`
         https://geo.ipify.org/api/v1?apiKey=at_jQntRYfkHAi3hZ03REm9mXWikK9sk
         `)
         console.log(res)
      } catch (ex) {
         console.log(ex)
      }
   }

   useEffect(() => {
      f();
   }, [])

   return (
      <main className="flex flex-jc-c flex-ai-c">
         <div className="backGround"></div>
         {reducer.state.loading
            ? <Waiting />
            : (<><Oferty dane={reducer.state.dane} />
               <Auth /></>)}
      </main>
   )
}
