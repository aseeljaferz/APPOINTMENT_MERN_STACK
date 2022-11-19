import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './navbar.css';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";

export default function Navb() {
    const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className='navborder'>
        <div className='container-flow mainnav'>
            <div className='row'>
                <Navbar  sticky="top" expand="lg">
                    <Container fluid>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                {/* <span><Link style={{textDecoration:"none"}} className="Home" to="/home"><h6>HOME</h6></Link></span>                        */}
                                <span><Link style={{textDecoration:"none"}} className="booking" to="/booking"><h6>SET AN APPOINTMENT</h6></Link>   </span>
                                <span><Link style={{textDecoration:"none"}} className="applist" to="/AppointmentList"><h6>VIEW BOOKING</h6></Link>   </span>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div className="container">
          <div className="  text-center" style={{marginTop:"-11px",marginLeft:"64.8%", position:"absolute"}}> 
            Login ID: <b>{user && user.email}</b>
          </div>
          <div className="d-grid gap-2">
            <Button variant="dark" style={{width:"150px" , height:"38px", marginTop:"-17px", borderRadius:"11px", marginLeft:"910%"}} onClick={handleLogout}>
              LOG OUT
            </Button>
          </div>
        </div>
        </div>
    </div>
  );
}
