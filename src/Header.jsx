import React from "react";

function Header() {
  return (
    <header className="container-fluid border-bottom shadow pt-2 ">
      <div className="row">
        <div className="col-12 col-md-4">
          <div className="pb-2 ps-md-5 ms-md-3">
            <a href="/">
              <img
                className="img-fluid d-inline-block"
                src={require ("../src/images/prueba.PNG")}
                alt="Logo"
                width="300.47"
                height="80"
              />
            </a>
          </div>
        </div>
        <div className="col-10 col-md-6 pt-3  ">
          <h1 className="text-center text-info-emphasis">CaculApp</h1>
        </div>
        <div className="col-2 col-md-2 p-md-3 ">
        <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
</div>
        </div>
        
      </div>
    </header>
  );
}

export default Header;
