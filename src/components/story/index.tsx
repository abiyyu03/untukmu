import styles from './story.module.css';

const Story = (props: any) => {
    const { story } = props;
    return (
        <div className={styles.container}>
            <h1 className={styles.story_title}>{story.title}</h1>
        </div>
    )
}

export default Story;