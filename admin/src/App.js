import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from './pages/Dashboard/DashBoard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
