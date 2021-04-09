import { useContext } from "react";
import { Redirect, Route } from "react-router";
import ContextReducer from '../context/reducer';

export default function AuthRoute(props) {
   const reducer = useContext(ContextReducer);
   return reducer.state.isLogedin
      ? <Route {...props} />
      : <Redirect to="/" />
}