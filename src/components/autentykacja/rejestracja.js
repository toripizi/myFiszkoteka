import { useContext, useRef, useEffect } from "react";
import ReducerContext from "../../context/reducer";
import AuthContext from "../../context/reducerAuth";
import axios from '../../axios/axiosAuth';

export default function Rejestracja() {
   const mainState = useContext(ReducerContext);
   const authState = useContext(AuthContext);
   const login = useRef();
   const password = useRef();
   const password2 = useRef();
   const email = useRef();
   const re = /^[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*@([a-zA-Z0-9_-]+)(\.[a-zA-Z0-9_-]+)*(\.[a-zA-Z]{2,4})$/i;

   const onClickEventRejestracja = async e => {
      mainState.dispatch({ type: 'setLoading2', value: true });
      try {
         const res = await axios.post('/accounts:signUp', {
            login: authState.state.login,
            email: authState.state.email,
            password: authState.state.password,
            password2: authState.state.password2,
            returnSecureToken: true
         });
         window.localStorage.setItem('token-data', JSON.stringify(res.data));
         mainState.dispatch({ type: 'setIsLogedin', value: true });
      }
      catch (ex) {
         if (ex.response.data.error.message === ('EMAIL_EXISTS'))
            authState.dispatch({ type: "setErrorEmail", value: "Taki e-mail już istnieje" })
      }
      mainState.dispatch({ type: 'setLoading2', value: false });
   }

   useEffect(() => {
      if (authState.state.login.length < 4 && authState.state.login.length > 1)
         authState.dispatch({ type: "setErrorLogin", value: "jakis błąd" })
      else authState.dispatch({ type: "setErrorLogin", value: "" })
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [authState.state.login])

   useEffect(() => {
      if (authState.state.password.length < 6 && authState.state.password.length > 1)
         authState.dispatch({ type: "setErrorPassword", value: "jakis błąd" })
      else authState.dispatch({ type: "setErrorPassword", value: "" })
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [authState.state.password])

   useEffect(() => {
      if (authState.state.password2.length < 6 && authState.state.password2.length > 1)
         authState.dispatch({ type: "setErrorPassword2", value: "jakis błąd" })
      else authState.dispatch({ type: "setErrorPassword2", value: "" })
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [authState.state.password2])

   useEffect(() => {
      if ((authState.state.email.length < 4 && authState.state.email.length > 1) || (authState.state.email.match(re) == null && authState.state.email.length > 1)) authState.dispatch({ type: "setErrorEmail", value: "jakis błąd" })
      else authState.dispatch({ type: "setErrorEmail", value: "" })
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [authState.state.email])

   return (
      <div className="auth auth-rej flex flex-ai-c flex-jc-c">
         <div className="auth-box flex flex-ai-c">
            <input
               ref={login}
               className={`input ${authState.state.errors.login ? "errorInput" : null}`}
               type="text"
               value={authState.state.login}
               onChange={(e) => authState.dispatch({ type: "setLogin", value: e.target.value })}
               placeholder="login" />
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
               value={authState.state.password}
               onChange={(e) => authState.dispatch({ type: "setPassword", value: e.target.value })}
               type="password"
               placeholder="hasło" />
            <input
               ref={password2}
               className={`input ${authState.state.errors.password2 ? "errorInput" : null}`}
               type="password"
               value={authState.state.password2}
               onChange={(e) => authState.dispatch({ type: "setPassword2", value: e.target.value })}
               placeholder="Powtórz hasło" />
            <a
               style={{ width: "200px", height: "50px" }}
               className="button" onClick={() => onClickEventRejestracja()}> Zarejestruj się</a>
            <h5 onClick={() => authState.dispatch({ type: "setHaveAccount", value: true })}>Mam już konto</h5>
         </div>
      </div>
   );
}