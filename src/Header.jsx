import React from "react";
import { ReactComponent as Logo } from "../src/images/logo.svg";
function Header() {

  const themes = [
    "Kawai",
    "universe",
    "Enchanted Nightfall","Crypto","Color"
  ];

const selectTheme = (index) => {
  const theme = themes[index];
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("selectedTheme", theme);
};
const handleItemClick = (index) => {
  selectTheme(index);
  console.log("click")
  console.log(index)
};








  return (
    <header className="container-fluid  pt-2 ">
      <div className="row">
        <div className="col-12 col-md-4">
          <div className="pb-2 ps-md-5 ms-md-3">
            <a href="/">
              <Logo
                className="img-fluid d-inline-block"
                alt="Logo"
                width="300.47"
                height="80"
              />
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6 pt-3  ">
          <h1 className="text-center text-color fs-1 fw-bold ">CalcuApp</h1>
        </div>
        <div className="col-12 col-md-2 p-md-3 ">
        <div className="dropdown">
  <button className="btn bg-button-color dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  Personalizar
  </button>
  <ul className="dropdown-menu dropdown-menu-dark">
  {themes.map((theme, index) => (
    <li key={index}  onClick={() => handleItemClick(index)}>
      <span className="dropdown-item" >
        {theme}
      </span>
    </li>
  ))}
</ul>
</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
