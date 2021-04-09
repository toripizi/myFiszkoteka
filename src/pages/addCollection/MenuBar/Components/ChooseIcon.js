import ChooseOne from "./ChooseOne";
import { useState } from "react";

export default function ChooseIcon() {
   const [state, setState] = useState(false);

   return (
      <div style={{ position: "relative" }} id="searchElse" className="flex flex-ai-c flex-jc-sb">
         <label style={{ cursor: "default" }} className="label">
            Wybierz ikonke:
            </label>
         <div id="searchElse-button">
            {state ? <button onClick={() => setState(false)}>Schowaj</button>
               : <button onClick={() => setState(true)}>Pokaż</button>}
         </div>
         <ChooseOne show={state} />
      </div>
   );
}