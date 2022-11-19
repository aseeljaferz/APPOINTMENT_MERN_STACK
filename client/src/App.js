import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About.jsx";
import Booking from "./components/Booking.jsx";
import AppointmentList from "./components/AppointmentList"
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  return (
    <div className="maindiv">
    <div className="firstdiv">
    <Container style={{ width: "400px"}}>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route path="/home" element={ <ProtectedRoute> <Home /> </ProtectedRoute> } />
              <Route path="/booking" element={<Booking/>}></Route>
              <Route path="/" element={<Login />}/>
              <Route path="/appointmentlist" element={<AppointmentList/>}></Route>
              <Route path="/about" element={<About/>}/> 
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
    </div>
    </div>
  );
}

export default App;
