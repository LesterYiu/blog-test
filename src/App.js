import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';
import { useNavigate } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';


function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then( () => {
      localStorage.clear()
      setIsAuth(false);
      window.location.pathname = "/login";
    })
  }

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        {isAuth ? <Link to="/createpost">Create</Link> : null}
        {isAuth ? <button onClick={signUserOut}>Log Out</button> : <Link to="/login">Login</Link>}
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth}/>} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth}/>}/>
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
      </Routes>
    </Router>
  );
}

export default App;
