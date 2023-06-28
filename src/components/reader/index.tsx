import { Link, useParams } from 'react-router-dom';
import styles from './reader.module.css';
import data from "../../utils/constant/data";

const Reader = () => {
    const { slug } = useParams();
    const story = data.find((story) => story.slug == slug);
    if (story == undefined) {
        throw Error("The value is undefined")
    }
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.reader_title}>{story.title}</h1>
                <p className={styles.reader_content} dangerouslySetInnerHTML={{ __html: story.content }}>
                    { }
                </p>
            </div>
            <div className={styles.reader_action}>
                <Link id={styles['kembali']} className={styles.reader_action_button} to="/cerita">Kembali</Link>
                <Link id={styles['simpan']} className={styles.reader_action_button} to="/">Simpan</Link>
                <Link id={styles['kutip']} className={styles.reader_action_button} to="/">Kutip</Link>
            </div>
        </div>
    )
}

export default Reader;