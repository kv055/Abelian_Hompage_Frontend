import React from "react";

import { Selected_Site_Context } from "./context_test";

// Linked Sites
import Landing_Page from "./Sites/Landing_Page";
import About_Us_Page from "./Sites/About";
import Methodology_Vision_Page from "./Sites/Methodology_Vision";
import User_Login_Page from "./Sites/User_Login";



function App() {
  const [Selected_Site, set_Selected_Site] = React.useState('Landing_Page');
  
  
  let Site_to_render = Landing_Page

  React.useEffect(() => {
    // Code to execute when Selected_Site changes
    console.log(Selected_Site);

    switch (Selected_Site) {
      case 'Landing_Page':
        Site_to_render = Landing_Page;
        console.log('Landing_Page');
        break;
      case 'About_Page':
        Site_to_render = About_Us_Page;
        console.log('About_Page');
        break;
      case 'Methodology_Vision_Page': 
        Site_to_render = Methodology_Vision_Page;
        console.log('Methology_Vision_Page');
        break;
      case 'User_Login_Page':
        Site_to_render = User_Login_Page;
        console.log('User_Login_Page');
        break;
      case 'Terminal_Demo_Page':
        Site_to_render = <p>In developement</p>;
        console.log('Terminal_Demo_Page');
        break;
      // default:
      //   Site_to_render = Landing_Page;
    }
  }, [Selected_Site]); 
  let L = 0
  return (
    <Selected_Site_Context.Provider value={{Selected_Site, set_Selected_Site}}>
      <Site_to_render />
    </Selected_Site_Context.Provider>
  );
}

export default App;