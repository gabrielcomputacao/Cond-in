
import styles from "./Input.module.css"

type InputProps={
    tipo: string,
    place: string,
}


export default function Input(props: InputProps){
    return (
        <input className={styles.input} type={props.tipo} placeholder={props.place}/>
    )
}