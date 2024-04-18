import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <ul className="nav nav-tabs  mb-0 " >
        {["Basico", "Avanzado", "Historial"].map((item, index) => (
          <li className="nav-item ms-2  " key={index}>
            <Link
              className="nav-link"
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
