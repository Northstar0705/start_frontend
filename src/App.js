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
import AdminLogin from './pages/Admin/AdminLogin.jsx';
import AdminDashboard from './pages/Admin/AdminDashboard.jsx';
import ManageUsers from './pages/Admin/ManageUsers.jsx';
import MentorApplications from './pages/Admin/MentorApplications.jsx';
import Settings from './pages/Settings.jsx';
import ViewApplication from './pages/Admin/ViewApplication.jsx';
import Calender from './pages/Admin/Calender.jsx';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* mentor */}
        <Route path='/mentor/apply' element={<Apply />} />
        <Route path="/mentor" element={<Mentor />} />
        {/* admin  */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<ManageUsers />} />
        <Route path="/admin/applications" element={<MentorApplications />} />
        <Route path="/admin/applications/:id" element={<ViewApplication />} />
        <Route path="/admin/calender" element={<Calender />} />
        {/* mentee  */}
        <Route path="/mentee/home" element={<Home />} />
        <Route path="/mentee/application" element={<Applications />} />
        <Route path="/mentee/inquiries" element={<Inquiries />} />
        <Route path="/mentee/wishlist" element={<Wishlist />} />
        <Route path="/mentor/browse" element={<Browse />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
