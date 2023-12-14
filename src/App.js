import Landing from './pages/Landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './page/Signup.jsx';
import Login from './page/Login.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
