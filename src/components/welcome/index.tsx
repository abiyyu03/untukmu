import { Link } from "react-router-dom";
import styles from "./welcome.module.css";

const Welcome = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.welcome_title}>Kata-kata awal</h1>
            <Link to="/cerita" className={styles.welcome_button}>Baca</Link>
        </div>
    )
}

export default Welcome;