import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Homepage/HomePage";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Checkout from "./pages/Checkout/Checkout";
import Login from "./pages/Login/Login";
import HistoryDetail from "./pages/HistoryDetail/HistoryDetail";

// import CartPage from "./pages/CartPage";
// import CheckoutPage from "./pages/CheckoutPage";
// import DetailPage from "./pages/DetailPage";
// import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";
// import ShopPage from "./pages/ShopPage";
import Layout from "./components/layout/Layout";
import { useSelector } from "react-redux";
import { selectUser } from "./store/userSlice";
import SignUp from "./pages/SignUp/SignUp";
import History from "./pages/History/History";
import 'antd/dist/reset.css';
import AuthWrapper from "./components/AuthWrapper";
import Shop from "./pages/Shop";
import Example from "./pages/Example/Example";
import ChatPopup from "./components/ChatPopup";

function App() {
  const user = useSelector(selectUser);

  return (
    <Layout>
      {/*user ? <Logout /> : <LoginPage />*/}
      <Routes>
        <Route element={<AuthWrapper />}>
          <Route element={<ChatPopup />} >
            <Route path="/" element={<HomePage />} />
            <Route path='/product/:id' element={<ProductDetail />} />
            <Route path="/shoppage" element={<Shop />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/history" element={<History />} />
            <Route path="/history/:orderId" element={<HistoryDetail />} />
            <Route path="/example" element={<Example />} />
          </Route>
        </Route>


        {/* <Route path="/shoppage" exact element={<ShopPage />} />
        <Route path="/shoppage/:productId" element={<DetailPage />} />
        <Route path="/checkoutpage" element={<CheckoutPage />} />
        <Route path="/cartpage" element={<CartPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/registerpage" element={<RegisterPage />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
