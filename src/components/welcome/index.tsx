import { Link } from "react-router-dom";
import styles from "./welcome.module.css";

const Welcome = () => {
    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.welcome_title}>Tulisan Penggugah jiwa, <u>untukmu</u></h1>
                <Link to="/tulisan" className={styles.welcome_button}>Baca</Link>
                {/* <Link to="/cerita" className={styles.saved_button}>Saved</Link> */}
            </div>
            <footer className={styles.footer}>
                <p><b>Created by </b>@abiyyucakra03, <b>in React + Typescript</b></p>
                {/* <p><b>stories by</b> @lvra.ptr_</p> */}
            </footer>
        </>
    )
}

export default Welcome;