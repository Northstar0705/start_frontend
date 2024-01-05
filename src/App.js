import Landing from './pages/Landing';
import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import Apply from './pages/Mentor/Apply.jsx';
import Mentor from './pages/Mentor/Mentor.jsx';
import Home from './pages/Home.jsx';
import AdminLogin from './pages/Admin/AdminLogin.jsx';
import AdminDashboard from './pages/Admin/AdminDashboard.jsx';
import ManageUsers from './pages/Admin/ManageUsers.jsx';
import MentorApllications from './pages/Admin/MentorApllications.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/mentor/apply' element={<Apply />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/mentee/home" element={<Home />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<ManageUsers />} />
        <Route path="/admin/applications" element={<MentorApllications />} />
      </Routes>
    </div>
  );
}

export default App;
