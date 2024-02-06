import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import "./Root.css";

export default function Root() {
  return (
    <div className="main">
      <Header />

      {<Outlet />}
      <Footer />
    </div>
  );
}
