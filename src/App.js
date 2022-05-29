import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Home/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ProtectRoute from './components/Login/ProtectRoute';
import Register from './components/Login/Register';
import Purchase from './components/Tools/Purchase';
import Tools from './components/Tools/Tools';
import MyOrder from './components/Dashboard/MyOrder';
import Dashboard2 from './components/Dashboard/Dashboard2';
import AddReview from './components/Dashboard/AddReview';
import Users from './components/Dashboard/Users';
import MyProfile from './components/Dashboard/MyProfile';
import Blogs from './components/Home/Blogs';
import NotFound from './components/Home/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tool" element={<Tools />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/purchase/:purchaseId" element={<ProtectRoute><Purchase /></ProtectRoute>} />
      <Route path="/dashboard" element={
      <Dashboard />
      } >
      <Route index element={<Dashboard2></Dashboard2>}></Route>
      <Route path="orders" element={<MyOrder></MyOrder>}></Route>
      <Route path="addreview" element={<AddReview></AddReview>}></Route>
      <Route path="users" element={<Users></Users>}></Route>
      <Route path="profile" element={<MyProfile></MyProfile>}></Route>
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
