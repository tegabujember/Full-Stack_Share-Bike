import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Logout from "./components/Logout";
import { useState, useEffect } from "react";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "./components/NotFound";

function App() {
  //check if user is logged in
  const [auth, setAuth] = useState(false);
  const [auth1, setAuth1] = useState(true);

  const isLoggedIn = async () => {
    try {
      const res = await fetch("/auth", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (res.status === 200) {
        setAuth(true);
        setAuth1(false);
      }
      if (res.status === 401) {
        setAuth(false);
        setAuth1(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <>
      <Navbar auth={auth1} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/service" element={<Services />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/" element={<ProtectedRoute auth={auth1} />}>
          <Route exact path="/login" element={<Login />} />
        </Route>
        <Route exact path="/" element={<ProtectedRoute auth={auth1} />}>
          <Route exact path="/register" element={<Register />} />
        </Route>
        <Route exact path="/" element={<ProtectedRoute auth={auth} />}>
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route exact path="/" element={<ProtectedRoute auth={auth} />}>
          <Route exact path="/logout" element={<Logout />} />
        </Route>
        <Route exact path="/*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
