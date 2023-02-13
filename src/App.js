import './App.css';
import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProgressBar from '@badrap/bar-of-progress'
import Search from './pages/Search';


// progress bar 
const progress = new ProgressBar({
  size:4,
  color:"#FE595E",
  className:"z-50",
  delay:100
})

progress.start()
setTimeout(() => {
  progress.finish();
}, 1000);

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/login' element={<Login />} />
       <Route path="/dashboard" element={<Dashboard />} />
       <Route path="/search" element={<Search />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
