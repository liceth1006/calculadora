import { Link } from "react-router-dom";

function Navbar() {
  
  return (
    <>
      <ul className="nav  nav-underline  mb-0  " >
        {["Basico", "Avanzado", "Historial"].map((item, index) => (
          <li className="nav-item ms-2  " key={index}>
            <Link
               className="nav-link fs-3 "
              aria-current="true"
              to={item === "Basico" ? "/" : `/${item.toLowerCase()}`}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Navbar;
