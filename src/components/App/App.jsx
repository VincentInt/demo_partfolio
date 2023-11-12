import './App.css';
import Aboutme from '../Aboutme/Aboutme.jsx';
import Gradient from '../Gradient/Gradient.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import Project from '../Project/Project.jsx';

function App() {
  return (
    <main className="App">
      <Gradient />
      <Project />
      {/* <Aboutme /> */}
      <Navigation />
    </main>
  );
}

export default App;
