import { useContext } from 'react';
import ReducerContext from '../../../context/reducer';

export default function Wylogowanie() {
   const reducer = useContext(ReducerContext);

   const logout = () => {
      reducer.dispatch({ type: 'setIsLogedin', value: false })
      window.localStorage.removeItem('token-data');
   }

   return (
      reducer.state.isLogedin
         ? <button className="button" onClick={logout}>Wyloguj się</button>
         : null
   );
}