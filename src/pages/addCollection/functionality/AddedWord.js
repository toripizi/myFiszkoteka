export default function AddedWord(props) {
   return (
      <div className="flex flex-ai-c flex-jc-c pojemnik">
         <div type="text" className="flex flex-ai-c input lewy"  >{props.polish}</div>
         <div className="flex flex-ai-c flex-jc-c pojemnikPrawy">
            <div type="text" style={{ width: "80%" }} className="flex flex-ai-c input prawy" >{props.english}</div>
            <button onClick={() => props.onClick(props.id)} className="button plusIcon flex flex-ai-c flex-jc-c">
               <i className="icon-trash"></i>
            </button>
         </div>
      </div >
   );
}