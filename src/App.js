import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage/Homepage';
import AboutUs from "./pages/AboutUs/AboutUs";
import Profile from "./pages/Profile/Profile";
import FeedDescriptionPage from "./pages/FeedDescriptionPage/FeedDescriptionPage";
import Login from './pages/Login/Login';

function App() {
  console.log(`Secret value is: ${process.env.REACT_APP_SECRET_VALUE}`);
  console.log(`Secret value 2 is: ${process.env.REACT_APP_SECRET_VALUE2}`);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        {isLoggedIn ? (
          <div>
            <Navbar setIsLoggedIn={setIsLoggedIn} />
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/about-us" element={<AboutUs />} />
              <Route exact path="/profile" element={<Profile />} />
              <Route exact path="/feed-description/:id" element={<FeedDescriptionPage />} />
            </Routes>
          </div>
        ) : (
          <div>
            <Login setLoggedIn={setIsLoggedIn} />
          </div>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;