import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";

const App = () => (
    <Router basename="/chat-room-react-node.js">
        <Routes >
            <Route path="/" element={<Join />} />
            <Route path="/chat" element={<Chat />} />
        </Routes>
    </Router>
);

export default App;
