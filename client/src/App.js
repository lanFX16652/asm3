import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Homepage/HomePage";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Checkout from "./pages/Checkout/Checkout";
import Login from "./pages/Login/Login";

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

function App() {
  const user = useSelector(selectUser);

  return (
    <Layout>
      {/*user ? <Logout /> : <LoginPage />*/}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path="/shoppage" element={<></>} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/history" element={<History />} />
        <Route path="/history/:id" element={<></>} />

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
