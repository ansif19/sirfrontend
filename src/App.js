import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import AddData from './components/AddData';
import { Route, Router } from 'react-router-dom';
import Viewdata from './components/Viewdata';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Route path = '/' element={<Viewdata/>}/>
        <Route path ='/app' element={<AddData/>}/>
      </Router>
    </div>
  );
}

export default App;
