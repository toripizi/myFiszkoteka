export function reducer(state, action) {
   switch (action.type) {
      case 'setIsLogedin':
         return { ...state, isLogedin: action.value };
      case 'setLoading':
         return { ...state, loading: action.value };
      case 'setLoading2':
         return { ...state, loading2: action.value };
      case 'setDane':
         return { ...state, dane: [...action.newDane.sort((a, b) => a.time.sort < b.time.sort ? 1 : -1)] };
      case 'setDataBaseColls':
         return { ...state, dataBaseColls: [...action.newDataBase] };
      default:
         throw new console.error("błąd w mianReducer ://");
   }
}

export const initialState = {
   dataBaseColls: [],
   dane: [],
   loading: false,
   loading2: false,
   isLogedin: window.localStorage.getItem('token-data') ? true : false
}
