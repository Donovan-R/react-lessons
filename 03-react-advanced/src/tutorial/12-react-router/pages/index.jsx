import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Home";
import About from "./About";
import Error from "./Error";
import SharedLayout from "./SharedLayout";
import Products from "./Products";
import SingleProduct from "./SingleProduct";
import Login from "./Login";
import Dashboard from "./Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import SharedProductLayout from "./SharedProductLayout";
// import StyledNavbar from "../components/StyledNavbar";
const ReactRouterSetup = () => {
  const [user, setUser] = useState(null);
  return (
    <Router>
      {/* <StyledNavbar /> */}
      <Routes>
        <Route to="/" element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<SharedProductLayout />}>
            <Route index element={<Products />} />
            <Route path=":productId" element={<SingleProduct />} />
          </Route>
          <Route path="/Login" element={<Login setUser={setUser} />}></Route>
          <Route
            path="/Dashboard"
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          ></Route>
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default ReactRouterSetup;
