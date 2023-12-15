import Landing from './pages/Landing';
import {Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import Mentor from './pages/Mentor/Mentor.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mentor" element={<Mentor />} />
      </Routes>
    </div>
  );
}

export default App;
