import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { AllProjects } from './Pages/AllProjects';
import { SingleProject } from './Pages/SingleProject';
import { NoPage } from './Pages/NoPage';
import { Layout } from './Layout';

import LoadingRocket from './images/loading-rocket.gif';

import { useState } from 'react';

import './index.css';
import './resp.css';

function App() {

  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  window.onload = () => {
    
    setLoading(true);

    setTimeout(() => {

      setFadeOut(true);

      setTimeout(() => {

        setLoading(false);

      }, 300);

    }, 1000);

  };

  return (
    <BrowserRouter>
      {loading ? (
        <div className={`loading ${fadeOut ? 'fade-out' : ''}`}>
          <img src={LoadingRocket} alt="Loading Rocket"></img>
          <h1>Loading...</h1>
        </div>
      ) : (
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<AllProjects />} />
            <Route path="/projects/:id" element={<SingleProject />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
