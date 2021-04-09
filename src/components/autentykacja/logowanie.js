import { useContext, useRef, useEffect } from "react";
import ReducerContext from "../../context/reducer";
import AuthContext from "../../context/reducerAuth";
import axios from '../../axios/axiosAuth';

export default function Logowanie() {
   const mainState = useContext(ReducerContext);
   const authState = useContext(AuthContext);
   const password = useRef();
   const email = useRef();
   const re = /^[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*@([a-zA-Z0-9_-]+)(\.[a-zA-Z0-9_-]+)*(\.[a-zA-Z]{2,4})$/i;

   const onClickEventLogowanie = async e => {
      mainState.dispatch({ type: 'setLoading2', value: true });
      console.log("asd")
      try {
         console.log("asdasd")
         const res = await axios.post('/accounts:signInWithPassword', {
            email: authState.state.email,
            password: authState.state.password,
            returnSecureToken: true
         });
         window.localStorage.setItem('token-data', JSON.stringify(res.data));
         mainState.dispatch({ type: 'setIsLogedin', value: true });
      }
      catch (ex) {
         if (ex.response.data.error.message === ('EMAIL_EXISTS'))
            authState.dispatch({ type: "setErrorEmail", value: "Taki e-mail już istnieje" })
         console.log(ex.response)
      }
      mainState.dispatch({ type: 'setLoading2', value: false });
   }

   useEffect(() => {
      if ((authState.state.email.length < 4 && authState.state.email.length > 1) || (authState.state.email.match(re) == null && authState.state.email.length > 1)) authState.dispatch({ type: "setErrorEmail", value: "jakis błąd" })
      else authState.dispatch({ type: "setErrorEmail", value: "" })
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [authState.state.email])

   useEffect(() => {
      if (authState.state.password.length < 6 && authState.state.password.length > 1)
         authState.dispatch({ type: "setErrorPassword", value: "jakis błąd" })
      else authState.dispatch({ type: "setErrorPassword", value: "" })
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [authState.state.password])

   return (
      <div className="auth flex flex-ai-c flex-jc-c">
         <div className="auth-box flex flex-ai-c">
            <input
               ref={email}
               className={`input ${authState.state.errors.email ? "errorInput" : null}`}
               type="email"
               value={authState.state.email}
               onChange={(e) => authState.dispatch({ type: "setEmail", value: e.target.value })}
               placeholder="E-mail" />
            <input
               ref={password}
               className={`input ${authState.state.errors.password ? "errorInput" : null}`}
               type="password"
               value={authState.state.password}
               onChange={(e) => authState.dispatch({ type: "setPassword", value: e.target.value })}
               placeholder="hasło" />
            <a
               style={{ width: "200px", height: "50px", margin: "20px" }}
               className="button"
               onClick={() => onClickEventLogowanie()}> Zaloguj się</a>
            <h5 onClick={() => authState.dispatch({ type: "setHaveAccount", value: false })}>Zarejestruj się</h5>
         </div>
      </div>
   );
}