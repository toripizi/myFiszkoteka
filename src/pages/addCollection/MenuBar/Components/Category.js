import { useContext, useEffect } from "react";
import reducerAddColl from "../../../../context/reducerAddColl";

export default function Category() {
   const form = useContext(reducerAddColl);

   useEffect(() => {
      const input = document.querySelector('#searchOption')
      if (!form.state.category) {
         form.dispatch({ type: 'setErrorCategory', value: "Wprowadź kategorie" })
         input.classList.add("errorInput3")
      }
      else {
         form.dispatch({ type: 'setErrorCategory', value: "" })
         input.classList.remove("errorInput3")
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [form.state.category])

   return (
      <div id="searchOption" style={{ width: "50%" }} className="flex flex-ai-c flex-jc-c">
         <i className="icon-tag"></i>
         <input className="typeText"
            onChange={e => form.dispatch({ type: "setCategory", value: e.target.value })}
            value={form.state.category}
            type="text"
            placeholder="Wpisz kategorie: " />
      </div>
   );
}