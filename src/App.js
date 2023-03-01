import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import Nav from './components/Nav';
import Display from './components/Display';
import Dropdown from './components/Dropdown';

function App() {

  let [song, setSong] = useState(null)

async function getSong(input, type) {
    let url = `https://spotify23.p.rapidapi.com/search/?q=${input}&type=${type}&offset=0&limit=5&numberOfTopResults=5`
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
    // console.log(data)
    // console.log(res)


    setSong(data)
    
  } catch(error) {
      console.log(error)
    }
}

  return (
    <div className="App">
      <Nav />
      <Dropdown getSong={ getSong }/>
      <Form getSong={ getSong }/>
      {song &&<Display song={song}/>}
    </div>
  );
}

export default App;
