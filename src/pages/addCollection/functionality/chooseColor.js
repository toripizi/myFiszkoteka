import { useContext, useEffect, useState } from "react";
import reducerAddColl from "../../../context/reducerAddColl";

const kolory = ['6B8E23', '9370DB', 'DB7093', 'FF6EC7', '8E236B', '2F2F4F', '23238E', '00009C', 'CFB53B', 'FF7F00', 'FF2400', 'DB70DB', '8FBC8F', 'BC8F8F', '5959AB', '4F2F4F', '6F4242', '8C1717', '6B4226', '8E6B23', 'A68064', 'E47833', 'DB9370', 'D8BFD8', '3299CC', '236B8E', '38B0DE', 'ADEAEA', 'FFEBEE', 'FFCDD2', 'EF9A9A', 'E57373', 'EF5350', 'F44336', 'E53935', 'D32F2F', 'C62828', 'B71C1C',
   '4A148C', 'EA80FC']

export default function ChooseColor() {
   const form = useContext(reducerAddColl);
   const [tab, setTab] = useState(['A6B8E23'])

   const onClickHandler = e => {
      form.dispatch({
         type: "setColor",
         value: e.target.style.backgroundColor
      })
      if (tab[0]) {
         const div2 = document.querySelector(`#${tab[0]}`)
         div2.classList.remove('checked')
      }
      setTab([e.target.id])
      const div = document.querySelector(`#${e.target.id}`)
      div.classList.add('checked')
   }

   useEffect(() => {
      const div = document.querySelector(`#A6B8E23`)
      div.classList.add('checked')
   }, [])

   return (
      <div className="flex flex-ai-c flex-jc-c flex-column"><h1>Wybierz kolor</h1>
         <div id="boxColor" className="flex">
            {kolory.map(kolor => {
               return (
                  <div
                     key={kolor}
                     onClick={e => onClickHandler(e)}
                     id={`A${kolor}`}
                     style={{ backgroundColor: `#${kolor}` }}></div>)
            })}
         </div>
         {/* <input
            type="text"
            value={form.color}
            className="input"
            onChange={e => form.dispatch({ type: "setColor", value: e.target.value })} /> */}
      </div>
   );
}