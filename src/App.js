import './App.css';
import ChatPage from './ChatPage/ChatPage.js';
import BasePage from './registerPage/BasePage';
import BasePage2 from './registerPage/BasePage2';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BasePage2 />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </Router>
  )
}

export default App;
