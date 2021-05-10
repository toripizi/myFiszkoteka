export function reducer(state, action) {
   switch (action.type) {
      case 'setName':
         return { ...state, title: action.value };
      case 'setDataBaseColls':
         return { ...state, ...action.value[0] };
      case 'setCategory':
         console.log(value)
         return { ...state, category: action.value };
      case 'setColor':
         return { ...state, color: action.value };
      case 'setIcon':
         return { ...state, icon: action.value };
      case 'setPolish':
         return { ...state, polish: action.value };
      case 'setEnglish':
         return { ...state, english: action.value };
      case 'setChange':
         let value;
         state.change ? value = "" : value = " "
         return { ...state, change: value };
      case 'setErrorName':
         return { ...state, errors: { ...state.errors, name: action.value } };
      case 'setErrorCategory':
         return { ...state, errors: { ...state.errors, category: action.value } };
      case 'setErrorWord':
         return { ...state, errors: { ...state.errors, wordsLength: action.value } };
      default:
         throw new console.error("błąd w addCollReducer ://");
   }
}

export const initialState = {
   errors: {
      name: "",
      category: "",
      wordsLength: 'Musisz wprowadzić przynajmniej jedno słowo'
   },
   title: 'nazwa',
   category: 'kategoria',
   color: "#6B8E23",
   icon: 'icon-sun',
   polish: '',
   english: ''
}