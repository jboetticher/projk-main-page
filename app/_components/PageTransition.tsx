import styles from "../_styles/page-transition.module.css";

export default function SquircleBackdrop() {

    return (
        <div className={styles.clipContainer}>
            <div className={styles.loadingAnimationContainer}>
                <div className={styles.blackOut} />
                <div className={`${styles.diagonalLine} ${styles.purple} ${styles.animate}`}></div>
                <div className={`${styles.diagonalLine} ${styles.green} ${styles.animate}`}></div>
            </div>
        </div>
    )
}
