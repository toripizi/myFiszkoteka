import { useContext } from "react";
import reducerAddColl from "../../../context/reducerAddColl";

export default function AddWord(props) {
   const form = useContext(reducerAddColl);

   return (
      <div className="flex flex-ai-c flex-jc-c pojemnik" >
         <input
            id="lewyInput"
            value={form.state.polish}
            onChange={e => form.dispatch({ type: "setPolish", value: e.target.value })}
            onKeyDown={(e) => e.key === "Enter" && props.onClick()}
            type="text"
            className="flex flex-ai-c flex-jc-c input lewy"
         />
         <div className="flex flex-ai-c flex-jc-c pojemnikPrawy">
            <input
               value={form.state.english}
               onChange={e => form.dispatch({ type: "setEnglish", value: e.target.value })}
               onKeyDown={(e) => e.key === "Enter" && props.onClick()}
               type="text"
               style={{ width: "80%" }}
               className="flex flex-ai-c flex-jc-c input prawy"
            />
            <button onClick={() => props.onClick()} className="button plusIcon flex flex-ai-c flex-jc-c">
               <i className="icon-plus"></i>
            </button>
         </div>
      </div>
   );
}