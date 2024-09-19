import React from "react";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Signup from "./components/Signup";
import Forget from "./components/Forget";
import SendEmail from "./components/SendEmail";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/login" />} />
          <Route path="/forget" element={<Forget/>}></Route>
          <Route path="/email" element={<SendEmail/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
