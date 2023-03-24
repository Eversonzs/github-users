import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import User from "../components/User";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar bg="dark" variant="dark">
          <Container className="justify-content-center">
            <Nav className="ml-auto">
              <Nav.Link href="/home">Home</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/user/:githubUser" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
