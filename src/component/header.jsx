import { NavLink } from "react-router-dom";

const AppNavbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container p-4">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className={"nav-link"} to={"/"}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={"nav-link"} to={"/history"}>
                History
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default AppNavbar;
