import { useState } from "react";
import styles from "./panelControl.module.css";
import ListaNavegacao from "../listaNavegacao/listaNavegacao";
import { ListaComponents } from "../listaNavegacao/listaComponents";



export default function PanelControl() {
  const [largura, setLargura] = useState(100);
  const handleLarguraNavegacao = () => {
    if (largura === 100) {
      setLargura(300);
    } else {
      setLargura(100);
    }
  };
  const styleLargura = {
    width: `${largura}px`,
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
