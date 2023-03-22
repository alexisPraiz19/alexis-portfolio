// Herramientas
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { tech } from "../../typescript/detailsOf_attributes";

// Common component para ahorrar espacio
import LinkFolder from "./LinkFolder";

// Lógica TS
import detailsOf from "../../typescript/readDetailsOf";

// Componente principal de exportación
export default function ContentDetailsOf(): JSX.Element {
  const { skill } = useParams();
  const detailsOf_attributes = tech.find((index:any) => index.id == skill)!;

  useEffect(()=>{ detailsOf(skill) });

  return (
    <div className="details-container">
     { /* contenido principal */ }
     <div className="details-content">
        <figure className="detail-figure">
            <figcaption className="detail-caption">{ detailsOf_attributes.id }</figcaption>
            <img src={ detailsOf_attributes.image } alt={`${detailsOf_attributes.id}-logo`} className="detail-image"/>
        </figure>

        <ul className="concepts-container"></ul>
     </div>
     
     {/* Enlace para enviar a carpeta de google drive donde se encuentra lo que he estudiado  */}
     <LinkFolder/>
    </div>
  )
}
