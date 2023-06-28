import { Link } from "react-router-dom";
import Story from "../story";
import styles from './stories.module.css';

const Stories = (props: any) => {
    const { stories } = props;
    return (
        <div className={styles.container}>
            <h1 className={styles.stories_title}>For you</h1>
            {stories.map((story: any) => {
                return (
                    <Link to={`/cerita/${story.slug}`} className={styles.stories_link}>
                        <Story story={story} key={story.id} />
                    </Link>
                )
            })}
            <Link to="/" className={styles.stories_back_button}>
                <p>Kembali</p>
            </Link>
        </div >
    )
}

export default Stories;