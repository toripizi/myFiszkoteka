import MenuBar from './MenuBar/MenuBar';
import AddedWord from "./functionality/AddedWord";
import AddWord from './functionality/addWord';
import { useReducer, useContext, useState, useEffect } from 'react';
import { reducer, initialState } from './addCollReducer';
import ReducerAddColl from "../../context/reducerAddColl"
import Options from "./Options"
import ReducerContext from "../../context/reducer"
import ChooseColor from "./functionality/chooseColor";
import ChooseIcon from "./functionality/chooseIcon";
import { addColl } from "../../dataBaseOperations/business"
import { Redirect } from 'react-router-dom';

const month = ['stycznia', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'serpień', 'wrzesień', 'pażdziernik', 'listopad', 'grudzień']

export default function AddCollection() {
   const [state, dispatch] = useReducer(reducer, initialState);
   const mainState = useContext(ReducerContext);
   const data = JSON.parse(window.localStorage.getItem('token-data'));
   const [wordsState, setWordsState] = useState({
      addedWords: [],
      change: false
   });
   const [goNext, setGoNext] = useState(false)
   const [done, setDone] = useState(false)

   useEffect(() => {
      console.log(wordsState.addedWords.length)
      if (wordsState.addedWords.length > 1) dispatch({ type: 'setErrorWord', value: "" })
      else dispatch({ type: 'setErrorWord', value: "Musisz wprowadzić przynajmniej jedno słowo" })
   }, [wordsState])

   const add = () => {
      if (state.english && state.polish) {
         wordsState.addedWords.unshift({ key: wordsState.addedWords.length > 0 ? wordsState.addedWords[0].key + 1 : 0, polish: state.polish, english: state.english });
         setWordsState({ ...wordsState, change: true })

         dispatch({ type: "setPolish", value: "" })
         dispatch({ type: "setEnglish", value: "" })
         document.querySelector('#lewyInput').focus();
      }
   }

   const deletee = (number) => {
      const index = wordsState.addedWords.findIndex(el => el.key === number);
      wordsState.addedWords.splice(index, 1);
      setWordsState({ ...wordsState, change: true })
   }

   const addColll = () => {
      const tab = wordsState.addedWords.map(e => e.key)
      console.log(tab)
      if (!state.errors.name && !state.errors.category && !state.errors.wordsLength) {
         mainState.dispatch({ type: 'setLoading2', value: true });
         const time = new Date();
         const form = {
            category: state.category,
            title: state.title,
            icon: state.icon,
            words: [...wordsState.addedWords],
            time: {
               sort: Date.now(),
               day: time.getDate(),
               month: month[time.getMonth()]
            },
            score: '0%',
            color: state.color,
            checked: false,
            memory: {
               umiem: [" "],
               prawieUmiem: [" "],
               nieUmiem: [" ", ...tab]
            }
         }
         addColl({ id: `/colls/${data.localId}`, form }).then(() => {
            setWordsState({ addedWords: [], change: false })
            mainState.dispatch({ type: 'setLoading2', value: false });
            setDone(true)
         })
      }
   }

   const goNextFunction = () => {
      setGoNext(true);
   }
   const goPrevFunction = () => {
      setGoNext(false);
   }

   return (
      <ReducerAddColl.Provider value={{
         state: state,
         dispatch: dispatch
      }}>
         <div className="backGround"></div>
         <MenuBar />
         <main>
            <Options onClick={addColll} onClickPrev={goPrevFunction} onClickNext={goNextFunction} goNext={goNext} />
            {goNext ? <div id="Choosee" className="flex flex-jc-sb" ><ChooseColor /><ChooseIcon /></div> : <>
               <AddWord onClick={add} />
               {wordsState.addedWords.map(el => (
                  <AddedWord onClick={deletee} key={el.key} id={el.key} {...el} />
               ))}</>}
         </main>
         {done ? <Redirect to="/" /> : null}
      </ReducerAddColl.Provider>
   );
}