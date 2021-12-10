import { BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/BottomNavbar/Navbar';
import Header from './components/Header/Header';
import Trending from './pages/Trending/Trending';
import Movies from './pages/Movies/Movies'
import Search from './pages/Search/Search'
import TvSeries from './pages/TvSeries/TvSeries'
import { Container } from '@material-ui/core';
import {Routes} from 'react-router-dom';

const App=()=> {
  return (
     <Router>
      <Header/>
    <div className="App">
      <Container>
        <Routes>
          <Route path="/" element={<Trending />} exact/>
          <Route path="/Movies" element={<Movies />} exact />
          <Route path="/TvSeries" element={<TvSeries />} exact />
          <Route path="/Search" element={<Search />} exact />
        </Routes>
      </Container>
    </div>
      <Navbar/>
    </Router>
  );
}

export default App;
