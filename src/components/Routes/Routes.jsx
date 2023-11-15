import Project from './Project/Project.jsx';
import Aboutme from './Aboutme/Aboutme.jsx';

import { Routes, Route, Navigate } from 'react-router-dom';

const RoutesCont = () => {
  return (
    <>
      <Routes>
        <Route path="/winchesta_partfolio/aboutme" element={<Aboutme />} />
        <Route path="/winchesta_partfolio/projects" element={<Project />} />
        <Route
          path="/winchesta_partfolio/"
          element={<Navigate to="/winchesta_partfolio/aboutme" />}
        />
      </Routes>
    </>
  );
};

export default RoutesCont;