import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from './pages/Products/Products';
import Login from './pages/Login/Login';
import { MainLayout } from './Layout';
import AuthWrapper from './components/AuthWrapper';
import UnauthorizedPage from './pages/UnauthorizedPage/UnauthorizedPage';
import Dashboard from './pages/Dashboard/Dashboard';
import LiveChat from './pages/LiveChat/LiveChat';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthWrapper />}>
          <Route element={<MainLayout />}>
            <Route path='/' element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Products />} />
            <Route path="/unauthorized" element={<UnauthorizedPage />} />
            <Route path="/chats" element={<LiveChat />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
