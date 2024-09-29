
import './App.css'
import SearchBar from './components/search-bar/SearchBar';
import AlbumDetails from './components/album-details/AlbumDetails';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<SearchBar/>}></Route>
      <Route path='/albums/:albumId' element={<AlbumDetails/>}></Route>
    </Routes>

    </>

  )
}

export default App
