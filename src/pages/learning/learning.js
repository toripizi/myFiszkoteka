import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Waiting from '../../components/UI/Waiting';
import reducerContext from '../../context/reducer';
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import Card from './card';
import RightNav from './rightNav';
import { downloadColls } from '../../dataBaseOperations/business'

export default function Learning() {
   const reducer = useContext(reducerContext);
   const setTitle = useWebsiteTitle();
   const { id } = useParams();
   const [pojemnik, setPojemnik] = useState([]);
   const data = JSON.parse(window.localStorage.getItem('token-data'));
   const [oneMoreTime, setOneMoreTime] = useState(true);
   const adres = data ? `/colls/${data.localId}/${id}` : `/default-collection/${id}`
   const [score, setScore] = useState(null)

   const fetch = () => {
      reducer.dispatch({ type: 'setLoading2', value: true });
      downloadColls(adres).then(res => {
         if (!reducer.state.isLogedin && !window.localStorage.getItem(`memory${id}`)) {
            const mem = {
               nieUmiem: [" "],
               prawieUmiem: [" "],
               umiem: [" "]
            }
            res.words.map(e => {
               mem.nieUmiem.push(e.key)
               return e;
            })
            window.localStorage.setItem(`memory${id}`, JSON.stringify(mem))
            res.memory = mem;
         }
         else if (!reducer.state.isLogedin && window.localStorage.getItem(`memory${id}`)) {
            res.memory = JSON.parse(window.localStorage.getItem(`memory${id}`));
         }
         setPojemnik(res)
         reducer.dispatch({ type: 'setLoading2', value: false });
         setScore(res.memory.umiem.length - 1 ? Math.floor(((res.memory.umiem.length - 1) / res.words.length) * 100) : 0)
      })
      setTitle('Nauka słówek');
   }

   const tryAgain = () => {
      oneMoreTime ? setOneMoreTime(false) : setOneMoreTime(true)
   }

   useEffect(() => {
      setPojemnik([])
      fetch()
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [oneMoreTime]);


   return (
      <>
         <div className="backGround"></div>
         {reducer.state.loading
            ? <Waiting />
            :
            <div id="boox" className="flex">
               {pojemnik.words ? <>
                  <div id="collection" className="flex  flex-jc-c">
                     <Card adres={adres} memory={pojemnik.memory} oneMoreTime={tryAgain} pojemnik={pojemnik.words} isLogedIn={reducer.state.isLogedin} id={id} setscore={(wynik) => setScore(wynik)} />
                  </div> <RightNav score={score} />
               </> : null}
            </div>}
      </>
   );
}