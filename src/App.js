import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Services from './components/Services.js';
import About from './components/About.js';
import Team from './components/Team.js';
import Search from './components/Search.js';
import Banner from './components/Banner.js';
import LastNews from './components/LastNews.js';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />

      <div className="back-to-top"></div>

      <Routes>
        <Route path='/' element={<Banner />} />
        <Route path='/home' element={<Banner />} />
        <Route path='services' element={<Services />} />
        <Route path='about' element={<About />} />
        <Route path='blog' element={<About />} />
        <Route path='team' element={<Team />} />
        <Route path='search' element={<Search />} />
        <Route path='services' element={<LastNews />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
