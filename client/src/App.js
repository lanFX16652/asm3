import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Homepage/HomePage";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Checkout from "./pages/Checkout/Checkout";
import Login from "./pages/Login/Login";
import HistoryDetail from "./pages/HistoryDetail/HistoryDetail";
import Layout from "./components/layout/Layout";
import SignUp from "./pages/SignUp/SignUp";
import History from "./pages/History/History";
import "antd/dist/reset.css";
import AuthWrapper from "./components/AuthWrapper";
import Shop from "./pages/Shop";
import Example from "./pages/Example/Example";
import ChatPopup from "./components/ChatPopup";

function App() {
  return (
    <Layout>
      <Routes>
        <Route element={<AuthWrapper />}>
          <Route element={<ChatPopup />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/shoppage" element={<Shop />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/history" element={<History />} />
            <Route path="/history/:orderId" element={<HistoryDetail />} />
            <Route path="/example" element={<Example />} />
          </Route>
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
