export default function RightNav(props) {
   return (
      <div id="rightNav" className="flex flex-jc-c flex-ai-c">
         <div className="stats flex flex-ai-c flex-jc-c">
            <span className="text">Wynik:</span>
            <span className="dana" style={{ paddingLeft: "5px"}}>{props.score}%</span>
         </div>
         <div className="stats flex flex-ai-c flex-jc-c">
            <div className="flex flex-ai-c flex-jc-c flex-column stats-text">
               <span className="text" style={{ borderBottom: "2px solid #171717", padding: "2px" }}>słówek</span>
               <span className="text">min</span>
            </div>
            <span className="dana stats-right"><i className="icon-right" /> 10</span>
         </div>
      </div>
   );
}