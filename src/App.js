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
import AllBooks from './pages/AllBooks';

function App() {


  const {isFetching} = useSelector(state => state.adminLogin)
  const currUser = localStorage.getItem('user')
  const bookData = useSelector((state)=>state.bookMaintain.bookData)

  return (
    <Router>
    <div className="App">
      <Routes>
       <Route path="/searchLoading" element={bookData ? <Navigate to="/search" /> : <BasicLoading />} />
       <Route path="/loginLoading" element={currUser ? <Navigate to="/dashboard" /> : isFetching ? <BasicLoading /> : <Login  />} />
       <Route path="/" element={<Loading />} />
       <Route path="/allBooks" element={<AllBooks />} />
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
