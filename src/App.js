import './App.css';
import '../src/Theme/Style/style.css';
import '../src/Theme/Style/responsive.css';
import Footer from './Component/Footer';
import Header from './Component/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Services from './Pages/Services';
import CustomSearch from './Pages/Custom-Search';
import Career from './Pages/Career';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import ForgotPassword from './Pages/ForgotPassword';
import Blog from './Pages/Blog';
import Industries from './Pages/industries';
import PressRelease from './Pages/PressRelease';
import IndustryDetails from './Pages/Industry_Details';
import UserProfile from './Pages/Profile';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Services />} />
        <Route path="/custom_search" element={<CustomSearch />} />
        <Route path="/about" element={<About />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forfot-password" element={<ForgotPassword />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/press_release" element={<PressRelease />} />
        <Route path="/industry-detail" element={<IndustryDetails />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
