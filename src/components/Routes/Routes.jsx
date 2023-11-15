import Project from './Project/Project.jsx';
import Aboutme from './Aboutme/Aboutme.jsx';

import { Routes, Route, Navigate } from 'react-router-dom';

const RoutesCont = () => {
  return (
    <>
 
      <Routes>
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/projects" element={<Project />} />
       <Route
          path="/"
          element={<Navigate to="/aboutme" />}
        /> 
      </Routes>
  
    </>
  );
};

export default RoutesCont;