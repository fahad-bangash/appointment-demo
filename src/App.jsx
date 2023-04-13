import React from "react";
import Header from "./components/layout/Header";
import Main from "./components/pages/Main";
import Login from "./components/auth/Login";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import Register from "./components/auth/Register";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Main />} />
            <Route path="/register/" element={<Register />} />

            <Route path="/login/" element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
