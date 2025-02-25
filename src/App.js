import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { AllProjects } from './Pages/AllProjects';
import { SingleProject } from './Pages/SingleProject';
import NoPage from './Pages/NoPage';
import { Layout } from './Layout';

import './index.css';
import './resp.css';

function App() {

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
