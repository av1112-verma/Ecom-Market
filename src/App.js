import './App.css';
import '../src/Theme/Style/style.css';
import Footer from './Component/Footer';
import Header from './Component/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Report from './Pages/Report';
import CustomSearch from './Pages/Custom-Search';
import Subscription from './Pages/Subscription';
import Career from './Pages/Career';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import ForgotPassword from './Pages/ForgotPassword';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<Report />} />
        <Route path="/custom_search" element={<CustomSearch />} />
        <Route path="/about" element={<About />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forfot-password" element={<ForgotPassword />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
