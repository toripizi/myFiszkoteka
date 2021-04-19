function Layout(props) {
   return (
      <div id="root-app">
         <>{props.header}</>
         <>{props.menu}</>
         <>{props.options}</>
         <>{props.content}</>
      </div>
   );
}

export default Layout;