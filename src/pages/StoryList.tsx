import { useState } from "react";
import Stories from "../components/stories";
import data from "../utils/constant/data";

const StoryList = () => {
    const [stories, setStories] = useState(data);
    return <Stories stories={stories} setStories={setStories} />;
}
export default StoryList;