
import styles from "./Button.module.css"

type ButtonProps={
    children: React.ReactNode,

}

export default function Button(props: ButtonProps){
    return (
        <button className={styles.button} > {props.children} </button>
    )
}
