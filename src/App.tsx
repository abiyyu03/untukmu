// import './App.css'
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import StoryList from './pages/StoryList';
import ReadStory from './pages/ReadStory';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cerita' element={<StoryList />} />
            <Route path='/cerita/:slug' element={<ReadStory />} />
        </Routes>
    )
}

export default App
