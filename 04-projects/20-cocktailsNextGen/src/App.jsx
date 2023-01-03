import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import SingleCokctail from "./pages/SingleCocktail";
import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./pages/About";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route to="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/cocktails/:singleCocktailId"
            element={<SingleCokctail />}
          />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
