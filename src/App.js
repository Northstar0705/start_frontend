import Landing from './pages/Landing';
import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import Apply from './pages/Mentor/Apply.jsx';
import Mentor from './pages/Mentor/Mentor.jsx';
import Settings from './pages/Settings.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/mentor/apply' element={<Apply />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
