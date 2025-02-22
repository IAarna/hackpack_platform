import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import VideoBackground from './components/layout/VideoBackground';
import Home from './pages/Home';
import About from './pages/About';
import Hackathons from './pages/Hackathons';
import Team from './pages/Team';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <VideoBackground />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/hackathons" element={<Hackathons />} />
          <Route path="/team" element={<Team />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
