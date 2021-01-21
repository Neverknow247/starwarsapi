import {Router} from '@reach/router'
import './App.css';
import Home from './components/Home.jsx'
import Display from './components/Display'

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <Display path="/:param/:id" />
      </Router>
    </div>
  );
}

export default App;
