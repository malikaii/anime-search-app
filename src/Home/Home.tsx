import React from 'react'
import {useState} from 'react';
import './Home.css';
function Home() {

    const [searchInput, setSearchInput] = useState("");
    const [animeData, setAnimeData]: any = useState([]);
    const handleChange = (e: any) => {
        setSearchInput(e.target.value);
        
        
    } 
    const fetchResults = async () => {
        await fetch(`https://api.jikan.moe/v4/anime?q=${searchInput}`)
        .then(res => res.json())
        .then((result) => {
            setAnimeData(result.data);             
        }).catch((err) => {
            console.log(err);
            
        });
    }

    

  return (
    <div className="container">
        <h2 className="text-center">Anime Search</h2>
        <div className="form-group">
          <input type="text" value={searchInput} onChange={handleChange} />
          <button onClick={fetchResults}>Search</button>
        </div>
        <table className="table" >
            <thead className='thead-dark'>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Image</th>
                    <th>Episode(s)</th>
                    <th>Status</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                    {
                        animeData.map((entry: any, key: number) => (
                        <tr key={key}>
                            <th>{key}</th>
                            <td>{entry.title}</td>
                            <td><img className="my-images" src={entry.images.jpg.image_url} alt="none" /></td>
                            <td>{entry.episodes}</td>
                            <td>{entry.status}</td>
                            <td>{entry.type}</td>

                        </tr>))
                    }
            </tbody>
        </table>

    </div>
  )
}

export default Home;