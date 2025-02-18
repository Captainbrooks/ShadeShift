import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";


const Navbar = () => {
  const { islightTheme, dark, light } = useContext(ThemeContext);
  const { isAuthenticated , toggleAuth } = useContext(AuthContext);

  const theme = islightTheme ? dark : light;

  
  return ( 
    
    <nav
    style={{
      background: theme.ui,
      color: theme.syntax,
    }}
  >
    <h1>Context App</h1>
    <button onClick={toggleAuth}>{isAuthenticated ? "Logged in" : "Logged out"}</button>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
   );
}
 
export default Navbar;






