import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Dashborad from "./page/Dashborad";
import ForgotPassword from "./page/ForgotPassword";
import Login from "./page/Login";
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
