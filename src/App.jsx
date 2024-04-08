import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Usercard from "./components/Usercard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./features/store";
import AllRepositories from "./components/AllRepositories";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  const changeTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div
          className={`min-h-screen ${
            darkTheme ? "bg-black text-white" : "bg-white text-black"
          }`}>
          <div className="container mx-auto py-8">
            {/* <Home changeTheme={changeTheme} /> */}
            <Routes>
              <Route path="/" element={<Home changeTheme={changeTheme} />} />
              {/* <Route path="/user" element={<Usercard />} /> */}
              <Route path="/repositories" element={<AllRepositories />} />
            </Routes>
            {/* <Usercard /> */}
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
