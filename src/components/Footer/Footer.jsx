import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />
          <span className="secondaryText">
            Pugbertoliebers
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Información Adicional </span>
          <span className="secondaryText">Mz D Casa 20 San Jacinto</span>
          <div className="flexCenter f-menu">
            <span>Propiedades</span>
            <span>Servicios</span>
            <span>Productos</span>
            <span>Sobre nosotros</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
