export function reducer(state, action) {
   switch (action.type) {
      case 'setEmail':
         return { ...state, email: action.value };
      case 'setPassword':
         return { ...state, password: action.value };
      case 'setPassword2':
         return { ...state, password2: action.value };
      case 'setErrorEmail':
         return { ...state, errors: { ...state.errors, email: action.value } };
      case 'setErrorPassword':
         return { ...state, errors: { ...state.errors, password: action.value } };
      case 'setErrorPassword2':
         return { ...state, errors: { ...state.errors, password2: action.value } };
      case 'setHaveAccount':
         return { ...state, haveAccount: action.value }
      default:
         throw new console.error("błąd AuthReducer");
   };
}

export const initialState = {
   errors: {
      email: "",
      password: "",
      password2: ""
   },
   email: "",
   password: "",
   password2: "",
   haveAccount: false
}