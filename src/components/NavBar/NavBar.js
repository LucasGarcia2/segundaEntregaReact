import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <NavLink to="/">
        <h3>Proyecto Ecommerce</h3>
      </NavLink>
      <div className="Categories">
        <NavLink
          to={"/category/telefonos"}
          activeClassName="ActiveOption"
          className="Option"
        >
          Telefonos
        </NavLink>
        <NavLink
          to={"/category/tablets"}
          activeClassName="ActiveOption"
          className="Option"
        >
          Tablets
        </NavLink>
        <NavLink
          to={"/category/notebooks"}
          activeClassName="ActiveOption"
          className="Option"
        >
          Notebooks
        </NavLink>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
