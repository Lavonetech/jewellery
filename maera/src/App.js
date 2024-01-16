import Layout from "./admin/screens/Layout";
import Home from "./componenets/Home";
import ProductDetails from "./componenets/ProductDetails";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from "./admin/theme";
import Products from "./admin/screens/Products";
import CreateProduct from "./admin/screens/createProduct";
import Footer from "./items/Footer";
import EditProduct from "./admin/screens/EditProduct";
import Register from "./user/Register";
import Login from "./user/Login";
import Customers from "./admin/screens/customers";
import Orders from "./admin/screens/Orders";
import Process from "./componenets/Process";
import About from "./componenets/About";
import Contact from "./componenets/Contact";
import Gallery from "./componenets/Gallery";
import EditUser from "./admin/screens/EditUser";
import PrivateRoutes from "./utils/PriivateRoutes";
import ScrollTop from "./componenets/ScrollTop";


function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);


  return (
    <div>
   
      <BrowserRouter>
      <ScrollTop/>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route element={<PrivateRoutes/>}>
            <Route path="/products" element={<Layout />}>
              <Route index element={<Products />} />
            </Route>
            <Route path="/customers" element={<Layout />}>
              <Route index element={<Customers />} />
            </Route>
            <Route path="/orders" element={<Layout />}>
              <Route index element={<Orders/>} />
            </Route>
            </Route>
          </Routes>
        </ThemeProvider>
       
        <Routes>
      
          <Route path="/" element={<Home />} />
          <Route path="/productdetails/:id"element={<ProductDetails />} />
          <Route exact path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mprocess" element={<Process/>} />
          <Route path="/about-us" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/ourcreations" element={<Gallery/>} />
          
          <Route element={<PrivateRoutes/>}>
          <Route path="/createproduct" element={<CreateProduct />} />
          <Route path="/edit/:id" element={<EditProduct />} />
          <Route path="/edituser/:id" element={<EditUser/>} />
          </Route>
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
