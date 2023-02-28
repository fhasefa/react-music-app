import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import Dropdown from './components/Dropdown';

function App() {

  let [song, setSong] = useState('')

async function getSong(input) {
    let url = `https://spotify23.p.rapidapi.com/search/?q=${input}&type=tracks&offset=0&limit=1&numberOfTopResults=5`
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
    {console.log(data)}

    setSong(data)
    
  } catch(error) {
      console.log(error)
    }
}

  return (
    <div className="App">
      <Dropdown />
      <Form getSong={ getSong }/>
    </div>
  );
}

export default App;
