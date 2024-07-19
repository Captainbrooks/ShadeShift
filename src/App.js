import React from "react";
import Navbar from "./components/Navbar";
import Booklist from "./components/Booklist";
import ThemeContextProvider from "./contexts/ThemeContext";
import AuthContextProvider from "./contexts/AuthContext";
import Home from "./Home";
import ThemeToggle from "./components/ThemeToggle";
import BookContextProvider from "./contexts/BookContext";



function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ThemeContextProvider>
          <Home />

          <Navbar />
      <BookContextProvider>
            <Booklist />
            </BookContextProvider>

          <ThemeToggle />
        </ThemeContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
