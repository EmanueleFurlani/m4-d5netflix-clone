
import './App.css'
import NetflixNavbar from "./components/NetflixNavbar"
import Header from './components/Header'
import NetflixFooter from "./components/NetflixFooter"
import Home from './components/Home';
import {Container} from 'react-bootstrap'

function App() {
  return (
    <>
      <Container fluid>
        <NetflixNavbar />
        <Header />
        <Home />
        <NetflixFooter />
      </Container>
</>
  );
}

export default App;
