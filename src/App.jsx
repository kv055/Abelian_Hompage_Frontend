import React from "react";

import { Selected_Site_Context } from "./context_test";

// Linked Sites
import Landing_Page from "./Sites/Landing_Page";
import About_Us_Page from "./Sites/About";
import Methodology_Vision_Page from "./Sites/Methodology_Vision";
import User_Login_Page from "./Sites/User_Login";
import Blog_Page from "./Sites/Blog";

function App() {
  const [Selected_Site, set_Selected_Site] = React.useState('Landing_Page')

  function Rendering_function(Site_Name){
    switch (Site_Name) {
      case 'Landing_Page':
          return Landing_Page
        break;
      case 'About Us':
          return About_Us_Page
        break;
      case 'Methodology & Vision': 
          return Methodology_Vision_Page
        break;
      case 'User Login':
          return User_Login_Page
        break;
      case 'Blog':
          return Blog_Page
        break;
      default:
        return Landing_Page
    }
  }
  
  let To_Render = Rendering_function(Selected_Site)

  return (
    <Selected_Site_Context.Provider value={{Selected_Site, set_Selected_Site}}>
      <To_Render />
    </Selected_Site_Context.Provider>
  );
}

export default App;
