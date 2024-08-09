import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar'; // Đảm bảo đường dẫn chính xác
import Home from './pages/Home'; 
import Pants from './components/Pants';
import Clothes from './components/Clothes';
import Hats from './components/Hats';
import Accessories from './components/Accessories';
import Login from './pages/Login';
import Register from './pages/Register'
import './assets/app/App.css'; 

const App = () => {
  return (
    <Router>
      <div className="app">
        <NavigationBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/pants" element={<Pants />} />
          <Route path="/clothes" element={<Clothes />} />
          <Route path="/hats" element={<Hats />} />
          <Route path='/accessories' element={<Accessories/>}/>
          <Route path="/hats" element={<Hats />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Thêm các route khác nếu cần */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
