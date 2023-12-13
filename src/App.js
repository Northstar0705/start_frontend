import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './page/Signup.jsx';
import Login from './page/Login.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
