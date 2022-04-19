import './App.css';
import "./Sidebar.css"
import LoginPg from './components/LoginPg';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import PlaylistPg from "./components/PlaylistPg";
import PlyListGen from "./components/PlyListGen";
import Prac from "./components/Prac";
import {AuthProvider} from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Logout from "./components/Logout";

function App() {
  return (
      <AuthProvider>

      <Router>
          <Routes>
              <Route path="/SignUp" element={<SignUp/>}/>
              <Route path="/signOut" element={<Logout/>}/>
              <Route path="/Home" element={<PrivateRoute><Home/></PrivateRoute>}/>
              <Route path="/PlaylistPg" element={<PrivateRoute><PlaylistPg/></PrivateRoute>}/>
              <Route path="/PlyListGen" element={<PrivateRoute><PlyListGen/></PrivateRoute>}/>
              <Route path="/Prac" element={<PrivateRoute><Prac/></PrivateRoute>}/>
              <Route path="/" element={<LoginPg/>}/>
          </Routes>
      </Router>

       </AuthProvider>
  );
}

export default App;
