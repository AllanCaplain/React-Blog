import React from 'react'
import TopBar from './components/component/topbar/TopBar'
import Home from './components/component/pages/home/Home'
import Single from './components/component/pages/single/Single'
import Write from './components/component/pages/write/Write'
import Settings from './components/component/pages/settings/Settings'
import Login from './components/component/pages/login/Login'
import Register from './components/component/pages/register/Register'
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

const App = () => {
  const currentUser = true;
  return (
    function App() {
      return (
        <Router>
          <TopBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts"><Home /></Route>
            <Route path="/register"> {currentUser ? <Home /> : <Register />}</Route>
            <Route path="/login"> {currentUser ? <Home /> : <Login />}</Route>
            <Route path="/post/:id"><Single /></Route>
            <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
            <Route path="/settings">{currentUser ? <Settings /> : <Login />}</Route>
          </Routes>
        </Router>
      );
    }
  )
}

export default App