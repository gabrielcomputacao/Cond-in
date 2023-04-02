import { useState } from "react";
import styles from "./panelControl.module.css";
import ListaNavegacao from "../listaNavegacao/listaNavegacao";
import { ListaComponents } from "../listaNavegacao/listaComponents";



export default function PanelControl() {
  const [largura, setLargura] = useState(7);
  const handleLarguraNavegacao = () => {
    if (largura === 7) {
      setLargura(20);
    } else {
      setLargura(7);
    }
  };
  const styleLargura = {
    width: `${largura}%`,
  };

  
 
  return (
    <div className={styles.controlPanel} style={styleLargura}>
      <div className={styles.buttonPanel}>
        <button onClick={() => handleLarguraNavegacao()}>Clicar</button>
      </div>
      <div>
        <ListaNavegacao childrens={ListaComponents} />
      </div>
    </div>
  );
}
