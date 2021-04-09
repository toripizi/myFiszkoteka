export default function RightNav(props) {
   return (
      <div id="rightNav">
         <div id="rightNav-score" className="flex flex-ai-c flex-jc-c">
            <span>Wynik:</span> {props.score}%
         </div>
      </div>
   );
}