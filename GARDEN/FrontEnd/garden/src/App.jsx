import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Login from "./components/account/Login";
import Register from "./components/account/Register";
import Aboutus from "./components/pages/Aboutus";
import Contactus from "./components/pages/Contactus";
import Home from "./components/pages/Home";
import Journals from "./components/pages/Journals";
import Dashboard from "./components/pages/Dashboard";
import Terms from "./components/pages/Terms";
import Privacy from "./components/pages/Privacy";
import Faq from "./components/pages/Faq";
import Profile from "./components/pages/Profile";
import Guide from "./components/pages/Guide";
import AdminLogin from "./components/admin/adminAccount/AdminLogin";
import AdminRegister from "./components/admin/adminAccount/AdminRegister";
import GetData from "./components/admin/GetData";
import AddData from "./components/admin/AddData";
import ViewData from "./components/admin/ViewData";
import UpdateData from "./components/admin/UpdateData";
import Explore from "./components/content/Explore";
import Contact from "./components/content/Contact";
import { useEffect } from "react";
import PlantView from "./components/pages/Plantveiw";
import AdminHome from "./components/admin/AdminHome";
import AdminContact from "./components/admin/AdminContact";
import AdminFeedback from "./components/admin/AdminFeedback";

const ScrollTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
  return null;
};
function App() {
  const location = useLocation();
  const isAdmin = () => {
    return location.pathname.startsWith("/admin");
  };

  return (
    <>
      <ScrollTop />
      {!isAdmin() && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/journal" element={<Journals />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/plantview" element={<PlantView/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/call" element={<Contact />} />
        <Route path="/admin/" element={<AdminHome />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/register" element={<AdminRegister />} />
        <Route path="/admin/contact" element={<AdminContact />} />
        <Route path="/admin/feedback" element={<AdminFeedback />} />
        <Route path="/admin/get" element={<GetData />} />
        <Route path="/admin/add" element={<AddData />} />
        <Route path="/admin/view/:id" element={<ViewData />} />
        <Route path="/admin/edit" element={<UpdateData />} />
        <Route path="/admin/edit/:id" element={<UpdateData />} />
      </Routes>
      {!isAdmin() && <Footer />}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
