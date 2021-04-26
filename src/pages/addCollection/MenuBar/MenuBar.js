import Category from "./Components/Category";
import NameOfColl from "./Components/NameOfColl";

export default function MenuBar() {
   return (
      <nav id="navForCategoryAndName" className="flex flex-ai-c flex-jc-sb">
         <NameOfColl />
         <Category />
      </nav>
   );
}