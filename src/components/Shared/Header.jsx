import { Link } from "react-router-dom";
import "./Header.css";
import { useContext } from "react";
import { AppContext } from "./Root";

export default function Header() {
  const cxt = useContext(AppContext);
  return (
    <div className="header">
      <span>{cxt.logoTxt}</span>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/reducer"}>Reducer</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </div>
  );
}
