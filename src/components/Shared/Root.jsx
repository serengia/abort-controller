import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Root.css";
import { createContext } from "react";

export const AppContext = createContext();

export default function Root() {
  return (
    <div className="main">
      <AppContext.Provider value={{ logoTxt: "LOGO" }}>
        <Header />
        {<Outlet />}
        <Footer />
      </AppContext.Provider>
    </div>
  );
}
