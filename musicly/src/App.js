import logo from './logo.svg';
import './App.css';
import LoginPg from './components/LoginPg';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import PlaylistPg from "./components/PlaylistPg";
import PlyListGen from "./components/PlyListGen";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/SignUp" element={<SignUp/>}/>
              <Route path="/Home" element={<Home/>}/>
              <Route path="/PlaylistPg" element={<PlaylistPg/>}/>
              <Route path="/PlyListGen" element={<PlyListGen/>}/>
              <Route path="/" element={<LoginPg/>}/>
          </Routes>
      </Router>
  );
}

export default App;
