import React from "react";

function CalculatorAdvancedButtons() {
  return (
    <div>
      <div>
      <div className="input-group">
  <input type="text" className="form-control border-2 border-primary p-5 " placeholder="Recipient's username" aria-label="Recipient's username with two button addons"/>
  <button className="btn btn-outline-primary fs-3" type="button"><i className="fa-solid fa-paper-plane "></i> enviar</button>
  <button className="btn btn-outline-danger fs-3" type="button"><i className="fa-solid fa-trash-can "></i> Borrar</button>
</div>
      </div>
      

      <div className="row row-cols-1 row-cols-md-4  mt-5 p-5">
        <div className="col">
          <div className="card">
            <img
              src={require("../../images/prueba.PNG")}
              className="card-img-top img-thumbnail"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src={require("../../images/prueba.PNG")}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src={require("../../images/prueba.PNG")}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src={require("../../images/prueba.PNG")}
              className="card-img-top "
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalculatorAdvancedButtons;
