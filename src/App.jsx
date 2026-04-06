import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import Users from "./pages/Users";
import "./pages/style.css";
function App() {

  return (
    <div>
      <Router>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:id" element={<Users />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
