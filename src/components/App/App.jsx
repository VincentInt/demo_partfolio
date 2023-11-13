import './App.css';
import Aboutme from '../Aboutme/Aboutme.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import Project from '../Project/Project.jsx';
import { Routes, Route, Navigate } from 'react-router-dom';
import Gradient from '../Gradient/Gradient.jsx';

function App() {
  return (
    <main className="App">
      <Gradient/>
      <Routes>
        <Route path="/demo_partfolio/aboutme" element={<Aboutme />} />
        <Route path="/demo_partfolio/projects" element={<Project />} />
        <Route path="/demo_partfolio/" element={<Navigate to="/demo_partfolio/aboutme" replace />} />
      </Routes>
      <Navigation />
    </main>
  );
}

export default App;
