import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Home/Header';
import Home from './components/Home/Home';
import Purchase from './components/Tools/Purchase';
import Tools from './components/Tools/Tools';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tool" element={<Tools />} />
      <Route path="/purchase/:purchaseId" element={<Purchase />} />
      </Routes>
    </div>
  );
}

export default App;
