import React from "react";
import Button from "../button/Button";

interface listaNavegacaoProps  {
  childrens: React.ReactNode[];
};


export default function ListaNavegacao({childrens}: listaNavegacaoProps) {
  return (
    <div>
      <h2>Ferramentas</h2>
        <ul>
           { 
            childrens.map((item, index)=>
                (
                    <li key={index}>{item}</li>
                )
            ) 
           }
        </ul>
    </div>
  );
}
