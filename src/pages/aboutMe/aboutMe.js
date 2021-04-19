import Menu from "../../components/Header/menu";

export default function AboutMe() {
   const odkryj = () => {
      document.querySelector('#mobileMenu').style.transform = 'translate(0, 0)'
   }

   return (
      <>
         <Menu />
         <div id="aboutMe" className="flex flex-column">
            <h1 className="flex flex-ai-c flex-jc-sb">
               Hi, I'm Maciek
               <i className="icon-menu-1 " id="menu" onClick={odkryj}></i>
            </h1>
            <p>
               I am studying at the Gdańsk University of Technology, aspiring to software developer or web developer.<br></br>
            I am looking for the internship.
           </p>
            <div id="more" className="flex ">
               <span className="flex flex-ai-c">
                  <i className="icon-linkedin-rect"></i> <a href="https://www.linkedin.com/in/maciej-goncerzewicz-433a96201/">LinkedLn</a>
               </span>
               <span className="flex flex-ai-c">
                  <i className="icon-github-text"></i> <a href="https://github.com/toripizi">GitHub</a>
               </span>
            </div>
         </div>
      </>
   )
}