import logo from './logo.svg';
import './App.css';
import LoginPg from './components/LoginPg'
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import SignUp from "./components/SignUp";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/SignUp" element={<SignUp/>}/>
              <Route path="/" element={<LoginPg/>}/>
          </Routes>
      </Router>
  );
}

export default App;
