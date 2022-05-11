import {Navbar, Container, Nav} from  'react-bootstrap';
import { Routes, Route } from "react-router";
import {Link} from 'react-router-dom';
import { Home } from './Components/Home';
import { Info } from './Components/info';
import { Saved } from './Components/Saved';
import { linkStyle } from './Styles/CustomStyles';
function App() {
  return <>
    <Navbar bg="primary" variant="dark" className="shadow-lg">
    <Container className="d-flex justify-content-right">
    <Navbar.Brand href="#home">Recipe App</Navbar.Brand>
    <Nav>
      <Link style={linkStyle} to="/">Home</Link>
      <Link style={linkStyle} to="/saved" >Saved</Link>
    </Nav>
    </Container>
  </Navbar>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/saved" element={<Saved/>}></Route>
    <Route path="/info" element={<Info/>}></Route>
  </Routes>
  </>
}

export default App;
