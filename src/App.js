import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Home/Header';
import Home from './components/Home/Home';
import Tools from './components/Tools/Tools';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tool" element={<Tools />} />
      </Routes>
    </div>
  );
}

export default App;
