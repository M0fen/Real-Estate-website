import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Encuentra fácilmente lo que buscas con Hábitat</span>
          <span className="secondaryText">
           Suscríbete y recibe atractivas ofertas de parte de nosotros.
            <br />
            Encuentra tu propiedad ya!
          </span>
          <button className="button" href>
            <a href="mailto:carloscaicedo188@gmail.com">Manos a la obra !</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
