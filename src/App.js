import './App.css';
import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Search from './pages/Search';
import Loading from './pages/Loading';
import BasicLoading from './pages/BasicLoading';
import { useSelector } from 'react-redux';

function App() {


  const {currUser,isFetching} = useSelector(state => state.adminLogin)
  // const currUser = true
  const books = true
  return (
    <Router>
    <div className="App">
      <Routes>
       <Route path="/searchLoading" element={books ? <Navigate to="/search" /> : <BasicLoading />} />
       <Route path="/loginLoading" element={currUser ? <Navigate to="/dashboard" /> : isFetching ? <BasicLoading /> : <Login  />} />
       <Route path="/" element={<Loading />} />
       <Route path='/home' element={<Home/>} />
       <Route path='/login' element={<Login />} />
       <Route path="/dashboard" element={currUser ? <Dashboard /> : <Navigate to='/home' />} />
       <Route path="/search" element={<Search />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
