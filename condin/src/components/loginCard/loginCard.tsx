
import styles from "./loginCard.module.css"

type loginCardProps = {
    children: React.ReactNode,
    title: string,
}

export default function LoginCard({title,children}: loginCardProps){
    return (
        <div className={styles.card}>
            <h4 className={styles.title}>{title}</h4>
            {children}
        </div>
    )
}