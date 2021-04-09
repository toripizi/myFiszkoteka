import { useContext, useEffect, useReducer, useRef } from 'react';
import ReducerContext from '../../context/reducer';
import { reducer, initialState } from './reducerAuth';
import Rejestracja from './rejestracja';
import Logowanie from './logowanie';
import ReducerAuth from "../../context/reducerAuth";

export default function Auth() {
   const mainState = useContext(ReducerContext);
   const [state, dispatch] = useReducer(reducer, initialState);
   const formLog = useRef();

   useEffect(() => {
      mainState.state.isLogedin
         ? formLog.current.style.display = "none"
         : formLog.current.style.display = "block"
   }, [mainState.state.isLogedin])

   return (
      <ReducerAuth.Provider value={{
         state: state,
         dispatch: dispatch
      }}>
         <form ref={formLog}>
            {state.haveAccount
               ? <Logowanie />
               : <Rejestracja />}
         </form>
      </ReducerAuth.Provider>
   );
}