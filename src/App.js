import './App.css';
import { useState } from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';
import Trackinfo from './pages/TrackInfo';
import About from './pages/About';
import { Route, Routes } from 'react-router-dom';

function App() {

  let [song, setSong] = useState(null)

async function getSong(input) {
    let url = `https://spotify23.p.rapidapi.com/search/?q=${input}&type=muulti&offset=0&limit=6&numberOfTopResults=5`
    try {
    const res = await fetch(
        url,
        {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
                'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
            }
        }
    );
    const data = await res.json(); // Extracting data as a JSON Object from the response
    console.log(data)
    // console.log(res)


    setSong(data)
    
  } catch(error) {
      console.log(error)
    }
}

  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path='/' element={<Home getSong={ getSong } song={ song }/>}/>
        <Route Path='/trackinfo/:symbol' element={<Trackinfo />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
