import { useEffect, useRef } from "react";

export default function ChooseOne(props) {
   const form = useRef();

   useEffect(() => {
      if (props.show) {
         form.current.style.top = "100%";
         form.current.style.opacity = "1";
         form.current.style.zIndex = "5";
      } else {
         form.current.style.top = "-200%";
         form.current.style.opacity = "0";
         form.current.style.zIndex = "-5";
      }
   }, [props.show])

   return (
      <form className="flex" ref={form} id="ChooseOne">
         <div className="flex flex-ai-c flex-jc-c"><i className="icon-pencil"></i><input type="radio" value="1" name="icon" /></div>
         <div className="flex flex-ai-c flex-jc-c"><i className="icon-pencil"></i><input type="radio" value="2" name="icon" /></div>
         <div className="flex flex-ai-c flex-jc-c"><i className="icon-pencil"></i><input type="radio" value="3" name="icon" /></div>
         <div className="flex flex-ai-c flex-jc-c"><i className="icon-pencil"></i><input type="radio" value="4" name="icon" /></div>
         <div className="flex flex-ai-c flex-jc-c"><i className="icon-pencil"></i><input type="radio" value="5" name="icon" /></div>
         <div className="flex flex-ai-c flex-jc-c"><i className="icon-pencil"></i><input type="radio" value="6" name="icon" /></div>
         <div className="flex flex-ai-c flex-jc-c"><i className="icon-pencil"></i><input type="radio" value="7" name="icon" /></div>

         <div className="flex flex-ai-c flex-jc-c"><i className="icon-pencil"></i><input type="radio" value="8" name="icon" /></div>
         <div className="flex flex-ai-c flex-jc-c"><i className="icon-pencil"></i><input type="radio" value="9" name="icon" /></div>
         <div className="flex flex-ai-c flex-jc-c"><i className="icon-pencil"></i><input type="radio" value="10" name="icon" /></div>
         <div className="flex flex-ai-c flex-jc-c"><i className="icon-pencil"></i><input type="radio" value="11" name="icon" /></div>
         <div className="flex flex-ai-c flex-jc-c"><i className="icon-pencil"></i><input type="radio" value="12" name="icon" /></div>
         <div className="flex flex-ai-c flex-jc-c"><i className="icon-pencil"></i><input type="radio" value="13" name="icon" /></div>
         <div className="flex flex-ai-c flex-jc-c"><i className="icon-pencil"></i><input type="radio" value="14" name="icon" /></div>

         <div className="flex flex-ai-c flex-jc-c"><i className="icon-pencil"></i><input type="radio" value="15" name="icon" /></div>
         <div className="flex flex-ai-c flex-jc-c"><i className="icon-pencil"></i><input type="radio" value="16" name="icon" /></div>
         <div className="flex flex-ai-c flex-jc-c"><i className="icon-pencil"></i><input type="radio" value="17" name="icon" /></div>
         <div className="flex flex-ai-c flex-jc-c"><i className="icon-pencil"></i><input type="radio" value="18" name="icon" /></div>
         <div className="flex flex-ai-c flex-jc-c"><i className="icon-pencil"></i><input type="radio" value="19" name="icon" /></div>
         <div className="flex flex-ai-c flex-jc-c"><i className="icon-pencil"></i><input type="radio" value="20" name="icon" /></div>
         <div className="flex flex-ai-c flex-jc-c"><i className="icon-pencil"></i><input type="radio" value="21" name="icon" /></div>
      </form>
   );
}