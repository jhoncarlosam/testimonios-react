import React from "react";
import '../css/Testimonio.css'

function Testimonio(props) {
  return (
    <>
      <div className="contenedor-testimonio">
        <img
          className="imagen-testimonio"
          src={require(`../imgs/img${props.imagen}.png`)}
          alt="Foto de Emma"
        />
        <div className="contenedor-texto-testimonio">
          <p className="nombre-testimonio">
          <strong>{props.name}</strong> in {props.country}</p>
          <p className="cargo-testimonio">
          {props.position} at <strong>{props.company}</strong></p>
          <p className="texto-testimonio">"{props.testimonial}"</p>
        </div>
      </div>
    </>
  );
}
export default Testimonio;
