export default function AddedWord(props) {
   return (
      <div className="flex flex-ai-c flex-jc-c pojemnik">
         <div type="text" className="hide-for-mobile flex flex-ai-c input lewy"  >{props.polish}</div>
         <div id="divToAddWords" className="flex flex-ai-c flex-jc-c pojemnikPrawy">
            <div id="lewyInput" type="text" className="hide-for-desktop flex flex-ai-c input lewy"  >{props.polish}</div>
            <div id="prawyInput" type="text" style={{ width: "80%" }} className="flex flex-ai-c input prawy" >{props.english}</div>
            <button onClick={() => props.onClick(props.id)} className="hide-for-mobile button plusIcon flex flex-ai-c flex-jc-c">
               <i className="icon-trash"></i>
            </button>
         </div>
         <button onClick={() => props.onClick(props.id)} className="hide-for-desktop button plusIcon flex flex-ai-c flex-jc-c">
            <i className="icon-trash"></i>
         </button>
      </div >
   );
}