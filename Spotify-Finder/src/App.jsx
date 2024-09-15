
import './App.css'
import SearchBar from './components/search-bar/SearchBar';

function App() {

  const clientID = import.meta.env.VITE_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

  return (
    <>
      <SearchBar/>
    </>

  )
}

export default App
