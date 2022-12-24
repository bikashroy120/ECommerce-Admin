import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import BlogCategoryList from "./page/BlogCategoryList";
import BlogList from "./page/BlogList";
import BrandList from "./page/BrandList";
import CategoryList from "./page/CategoryList";
import ColerList from "./page/ColerList";
import Coustomer from "./page/Coustomer";
import Dashborad from "./page/Dashborad";
import ForgotPassword from "./page/ForgotPassword";
import Login from "./page/Login";
import Order from "./page/Order";
import ProductList from "./page/ProductList";
import ResetPassword from "./page/ResetPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/forgot-password" element={<ForgotPassword />}/>
        <Route path="/reset-password" element={<ResetPassword />}/>
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashborad />} />
          <Route path="customers" element={<Coustomer />} />
          <Route path="product-list" element={<ProductList/>} />
          <Route path="brand-list" element={<BrandList />} />
          <Route path="category-list" element={<BlogCategoryList />} />
          <Route path="color-list" element={<ColerList />} />
          <Route path="blog-list" element={<BlogList />} />
          <Route path="orders" element={<Order />} />
          <Route path="blog-category-list" element={<CategoryList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
