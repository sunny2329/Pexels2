import { useCallback, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx'
import Saved from './components/Saved.jsx';

function App() {

  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("business");
  const [loader, setLoader] = useState(true);
  const [saved, setSaved] = useState([])

  const API_KEY = "IPVfg12TUsUOWpkzfLK97Te6w1GOkd7DKJOVEQt4LIdTGjgbIDo1snAo"
  const URL = `https://api.pexels.com/v1/search?query=${search}&per_page=80`


  const fetchData = useCallback(async () => {
    const response = await axios.get(
      URL,
      {
        headers: {
          Authorization: API_KEY,
        }
      }
    );
    // const data = await response.json();
    // return response;
    // console.log(response.data);
    // console.log(response.data);
    console.log(response);
    setLoader(false);
    setImages(response.data.photos);

  })
  useEffect(() => {

    const data = JSON.parse(localStorage.getItem('images'));
    if (data) {
      setSaved(data);
    }

    fetchData();


  }, [search, setSearch]);


  useEffect(() => {
    if (saved.length != 0) {
      const json = JSON.stringify(saved);
      localStorage.setItem('images', json);
    }
  }, [saved])

  console.log(saved);

  return (
    <>
      <Router>
        <Navbar setSearch={setSearch} />
        <Routes>
          <Route path='/' element={<Home images={images} load={loader} setSaved={setSaved} saved={saved} />} />
          <Route path='/saved' element={<Saved saved={saved} loader={loader} />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
