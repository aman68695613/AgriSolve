
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MarketPlace from './pages/MarketPlace';
import AI from './pages/AI';
import Community from './pages/Community';
import Profile from './pages/Profile';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/marketplace' element={<MarketPlace />} />
        <Route path='/ai' element={<AI/>} />
        <Route path='/community' element={<Community />} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
