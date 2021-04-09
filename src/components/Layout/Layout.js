function Layout(props) {
   return (
      <div id="root-app">
         <div className="backGround"></div>
         <>{props.header}</>
         <>{props.menu}</>
         <>{props.options}</>
         <>{props.content}</>
      </div>
   );
}

export default Layout;