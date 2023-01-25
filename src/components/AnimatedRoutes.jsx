import React from "react";

import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Home } from "../pages/Home";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import SurveyQuest from "../pages/survey/Survey";
import { Navbar } from "../Navigation/Navbar";

export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <header>
        <Navbar />
      </header>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/survey" element={<SurveyQuest />} />
      </Routes>
    </AnimatePresence>
  );
};
