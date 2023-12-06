import { Link } from "react-router-dom";
import styles from "./welcome.module.css";

const Welcome = () => {
    return (
        <section className={styles.parent_welcome}>
            <div className={styles.container}>
                <h1 className={styles.welcome_title}>Penggugah jiwa, <u>untukmu</u></h1>
                <p className={styles.welcome_desc} rel="noopener noreferrer">Untukmu yang sedang dirundung duka, lara dan sedih hati.
                    Aku tak tau seberapa dalam luka dan sakit itu. Tapi, semoga kumpulan tulisan ini menjadi penyemangat dan sedikit mengobati.</p>
                <Link to="/tulisan" className={styles.welcome_button}>Yuk Baca</Link>
                {/* <Link to="/cerita" className={styles.saved_button}>Punya kisah ?, yuk share cerita kamu</Link> */}
            </div>
            <footer className={styles.footer}>
                <p>Initiated by <a href="https://github.com/abiyyu03">@abiyyu03</a>, using React + Typescript</p>
                <p></p>
            </footer>
        </section>
    )
}

export default Welcome;