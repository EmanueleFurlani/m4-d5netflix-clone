
import './App.css'
import NetflixNavbar from "./components/NetflixNavbar"
import Header from './components/Header'
import NetflixFooter from "./components/NetflixFooter"

function App() {
  return (
    <>
      <NetflixNavbar />
      <Header />
      <NetflixFooter />
    </>
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {Container} from 'react-bootstrap'

function App() {
  return (
      <Container fluid>
        <Home />
      </Container>

  );
}

export default App;
