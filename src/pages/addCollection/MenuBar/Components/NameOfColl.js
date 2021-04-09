import { useContext, useEffect } from "react";
import reducerAddColl from "../../../../context/reducerAddColl";

export default function NameOfColl() {
   const form = useContext(reducerAddColl);

   useEffect(() => {
      const input = document.querySelector('#searchBar')
      if (!form.state.title) {
         form.dispatch({ type: 'setErrorName', value: "Wprowadź nazwe" })
         input.classList.add("errorInput2")
      }
      else {
         form.dispatch({ type: 'setErrorName', value: "" })
         input.classList.remove("errorInput2")
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [form.state.title])

   return (
      <div id="searchBar" style={{ width: "50%" }} className="flex flex-ai-c flex-jc-c">
         <i className="icon-pencil"></i>
         <input
            id="main-input"
            type="text"
            value={form.state.title}
            onChange={e => form.dispatch({ type: "setName", value: e.target.value })}
            placeholder="Wprowadź nazwę kolekcji: " />
      </div>
   );
}