import { useState } from "react";
import styles from "../styles/Balancete.module.css";
import TableRow from "@/components/tr/tableRow";

export default function Balancete() {
  const [saldoInicial, setSaldoInicial] = useState(0);
  const [listaEntradas,setListaEntradas] = useState([])
  const [statusModal, setStatusModal] = useState(true)

  return (
    <div>
      <div className={styles.balancete}>
        <div>
          <h2>Entradas</h2>
          <div>
            <table className={styles.balancete_lista}>
              <thead>
                <tr>
                  <th>Valor</th>
                  <th>Descrição</th>
                </tr>
              </thead>
              <tbody>
                  {listaEntradas.map((value,index)=>(
                    <TableRow descricao="" valor={0} />
                  ))}
              </tbody>
            </table>
            <button>Adicionar</button>
          </div>
        </div>
        <div>
          <h2>Despesas</h2>
          <div>
            <ul className={styles.balancete_lista}>
              <li>Total:</li>
            </ul>
            <button>Adicionar</button>
          </div>
        </div>
      </div>
      <div>
        <h3>Soma Total</h3>
      </div>
    </div>
  );
}
