import { useContext, useEffect, useState } from "react";
import reducerAddColl from "../../../context/reducerAddColl";

const icons = ['icon-sun', 'icon-emo-happy', 'icon-emo-wink', 'icon-emo-devil', 'icon-emo-surprised', 'icon-emo-tongue', 'icon-emo-grin', 'icon-emo-saint', 'icon-emo-laugh', 'icon-emo-squint', 'icon-aboveground-rail', 'icon-airport', 'icon-art-gallery', 'icon-bar', 'icon-basketball', 'icon-bicycle', 'icon-cafe', 'icon-campsite', 'icon-cinema', 'icon-college', 'icon-commerical-building', 'icon-credit-card', 'icon-minefield', 'icon-monument', 'icon-hospital', 'icon-heliport', 'icon-harbor', 'icon-grocery-store', 'icon-giraffe', 'icon-garden', 'icon-fuel', 'icon-football', 'icon-fire-station', 'icon-fast-food', 'icon-pitch', 'icon-police', 'icon-restaurant', 'icon-skiing', 'icon-soccer', 'icon-tree-2']

export default function ChooseColor() {
   const form = useContext(reducerAddColl);
   const [tab, setTab] = useState([form.state.icon])

   const onClickHandler = e => {
      form.dispatch({
         type: "setIcon",
         value: e.target.classList.value
      })
      if (tab[0]) {
         const div2 = document.querySelector(`#${tab[0]}`)
         div2.classList.remove('checked')
      }
      setTab([e.target.classList.value])
      const div = document.querySelector(`#${e.target.classList.value}`)
      div.classList.add('checked')
   }

   useEffect(() => {
      const div = document.querySelector(`#${form.state.icon}`)
      div.classList.add('checked')
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   return (
      <div className="flex flex-ai-c flex-jc-c flex-column">
         <h1>Wybierz Ikonke</h1>
         <div id="boxIcon" className="flex">
            {icons.map(icon => {
               return (
                  <div
                     className="flex flex-ai-c flex-jc-c"
                     onClick={e => onClickHandler(e)}
                     id={icon}>
                     <i className={icon}></i>
                  </div>)
            })}
         </div>
      </div>
   );
}