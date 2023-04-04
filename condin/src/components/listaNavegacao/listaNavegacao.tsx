import React from "react";


export interface listaNavegacaoProps  {
  childrens: {
    caminho: string,
    pagina: string,
  }[],
  
};


export default function ListaNavegacao({childrens}: listaNavegacaoProps) {
  return (
    <div>
      <h2>Ferramentas</h2>
        <ul>
           { 
            childrens.map((item, index)=>
                (
                    
                         <li key={index}>{item.pagina}</li>
                    
                    
                )
            ) 
           }
        </ul>
    </div>
  );
}
