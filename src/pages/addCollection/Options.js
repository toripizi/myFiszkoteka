export default function Options(props) {
   return (
      <div id="options" style={{ opacity: '1', height: '80px' }} className="flex flex-ai-c flex-jc-sb">
         {props.goNext ?
            <button
               onClick={() => props.onClickPrev()}
               className="button flex flex-ai-c flex-jc-c" >
               <i style={{ fontSize: "40px" }} className="icon-left"></i></button>
            : <div></div>}
         <div className="flex" id="options-buttons">
            {props.goNext ?
               <button
                  onClick={() => props.onClick()}
                  className="button flex flex-ai-c flex-jc-c" >Dodaj</button>
               : <button
                  onClick={() => props.onClickNext()}
                  className="button flex flex-ai-c flex-jc-c" >
                  <i style={{ fontSize: "40px" }} className="icon-right"></i></button>}
         </div>
      </div >
   );
}