import Landing from './pages/Landing';
import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import Apply from './pages/Mentor/Apply.jsx';
import Mentor from './pages/Mentor/Mentor.jsx';
import Home from './pages/Home.jsx';
import Applications from './pages/Applications.jsx';
import Inquiries from './pages/Inquiries.jsx';
import Wishlist from './pages/Wishlist.jsx';
import Browse from './pages/Browse.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/mentor/apply' element={<Apply />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/mentee/home" element={<Home/>} />
        <Route path="/mentee/application" element={<Applications/>} />
        <Route path="/mentee/inquiries" element={<Inquiries/>} />
        <Route path="/mentee/wishlist" element={<Wishlist/>} />
        <Route path="/mentor/browse" element={<Browse/>} />
      </Routes>
    </div>
  );
}

export default App;
