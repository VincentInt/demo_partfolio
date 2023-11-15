import './App.css';

import Navigation from '../Navigation/Navigation.jsx';
import Gradient from '../Gradient/Gradient.jsx';
import RoutesCont from '../Routes/Routes.jsx'

function App() {
  return (
    <main className="App">
      <Gradient />
      <RoutesCont/>
      <Navigation />
    </main>
  );
}

export default App;
