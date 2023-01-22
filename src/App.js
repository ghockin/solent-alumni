import './App.css';

import Landing from './pages/landingpage.js';
import Homepage from './pages/homepage.js';
import NewUser from './pages/newuser.js';
import OldUser from './pages/exuser.js';
import Perks from './pages/perks.js';
import News from './pages/news.js';
import Explore from './pages/explore.js';
import Footer from './pages/footerpage.js';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/solent-alumni" element={<Homepage></Homepage>}></Route>
          <Route path="/solent-alumni/homepage" element={<Homepage></Homepage>}></Route>
          <Route path="/solent-alumni/newuser" element={<NewUser></NewUser>}></Route>
          <Route path="/solent-alumni/exuser" element={<OldUser></OldUser>}></Route>
          <Route path="/solent-alumni/perks" element={<Perks></Perks>}></Route>
          <Route path="/solent-alumni/news" element={<News></News>}></Route>
          <Route path="/solent-alumni/explore" element={<Explore></Explore>}></Route>
          <Route path="/solent-alumni/footer" element={<Footer></Footer>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
