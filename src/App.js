import './App.css'
import NetflixNavbar from "./components/NetflixNavbar"
import Header from './components/Header'
import NetflixFooter from "./components/NetflixFooter"
import SearchBar from './components/SearchBar';
import fantasyBooks from './fantasyBooks.json'

function App() {
  return (
    <>
      <NetflixNavbar />
      <Header />
      <SearchBar  books={fantasyBooks}/>
      <NetflixFooter />
    </>
  );
}

export default App;
