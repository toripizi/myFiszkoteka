import MenuBar from '../addCollection/MenuBar/MenuBar';
import AddedWord from "../addCollection/functionality/AddedWord";
import AddWord from '../addCollection/functionality/addWord';
import { useReducer, useContext, useState, useEffect } from 'react';
import { reducer } from '../addCollection/addCollReducer';
import ReducerAddColl from "../../context/reducerAddColl"
import Options from "../addCollection/Options"
import ReducerContext from "../../context/reducer"
import ChooseColor from "../addCollection/functionality/chooseColor";
import ChooseIcon from "../addCollection/functionality/chooseIcon";
import { putColl } from "../../dataBaseOperations/business"
import { Redirect } from 'react-router-dom';
import { useParams } from 'react-router';
import { objectToArrayWithId } from "../../hooks/objectToArrayWithId";
import { downloadColls } from "../../dataBaseOperations/business"

export default function Edit() {
   const mainState = useContext(ReducerContext);
   const data = JSON.parse(window.localStorage.getItem('token-data'));
   const [goNext, setGoNext] = useState(false)
   const [done, setDone] = useState(false)
   const { id } = useParams()
   const initialState = {
      errors: {
         name: "",
         category: "",
         wordsLength: ''
      },
      english: "",
      polish: "",
      change: "",
      memory: {
         nieUmiem: []
      },
      words: [],
      ...mainState.state.dataBaseColls.find(el => el.id === id)
   }
   const [state, dispatch] = useReducer(reducer, initialState);
   const [tab, setTab] = useState(state.memory.nieUmiem)

   const fetch = async e => {
      downloadColls(`/colls/${data.localId}/${id}`).then(result => {
         dispatch({ type: "setDataBaseColls", value: [...objectToArrayWithId(result)] })
         mainState.dispatch({ type: 'setLoading2', value: false });
      })
   }
   useEffect(() => {
      mainState.dispatch({ type: 'setLoading2', value: true });
      fetch()
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   useEffect(() => {
      if (state.words.length > 1) dispatch({ type: "setErrorWord", value: "" })
      else dispatch({ type: "setErrorWord", value: "Musisz wprowadzi?? przynajmniej jedno s??owo" })
   }, [state.change])

   const add = () => {
      if (state.english && state.polish) {
         const newKey = state.words.length > 0 ? state.words[0].key + 1 : 0;
         state.words.unshift({ key: newKey, polish: state.polish, english: state.english });
         setTab([...tab, newKey])
         dispatch({ type: "setChange", value: "" })

         dispatch({ type: "setPolish", value: "" })
         dispatch({ type: "setEnglish", value: "" })
         document.querySelector('#lewyInput').focus();
      }
   }

   const deletee = (number) => {
      const index = state.words.findIndex(el => el.key === number);

      tab.map((el, indexN) => {
         if (el === number) tab.splice(indexN, 1)
      })
      state.memory.prawieUmiem.map((el, indexN) => {
         if (el === number) state.memory.prawieUmiem.splice(indexN, 1)
      })
      state.memory.umiem.map((el, indexN) => {
         if (el === number) state.memory.umiem.splice(indexN, 1)
      })

      state.words.splice(index, 1);
      dispatch({ type: "setChange" })

   }

   const addColll = () => {
      if (!state.errors.name && !state.errors.category && !state.errors.wordsLength) {
         mainState.dispatch({ type: 'setLoading2', value: true });
         const form = {
            ...state,
            memory: {
               umiem: [...state.memory.umiem],
               prawieUmiem: [...state.memory.prawieUmiem],
               nieUmiem: [...tab]
            }
         }
         putColl({ id: `/colls/${data.localId}/${id}`, form }).then(() => {
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
         <MenuBar />
         <div className="backGround"></div>
         <main>
            <Options onClick={addColll} onClickPrev={goPrevFunction} onClickNext={goNextFunction} goNext={goNext} />
            {goNext ? <div id="Choosee" className="flex flex-jc-sb" ><ChooseColor /><ChooseIcon /></div> : <>
               <AddWord onClick={add} />
               {state.words.map(el => (
                  <AddedWord onClick={() => deletee(el.key)} id={el.key} {...el} />
               ))}</>}
         </main>
         {done ? <Redirect to="/" /> : null}
      </ReducerAddColl.Provider>
   );
}