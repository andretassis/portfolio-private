import styles from './ButtonB.module.css'

function ButtonB({ text }) {
    return (
        <>
            <button className={styles.btn}>{text}</button>
        </>
    )

}

export default ButtonB