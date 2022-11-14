import React from 'react'
import {useState, useEffect} from 'react';
function Home() {

    const [searchInput, setSearchInput] = useState("");
    const [animeData, setAnimeData]: any = useState([]);
    const handleChange = (e: any) => {
        setSearchInput(e.target.value);
        
    }    
    // const titles: string[] = ;
    
    const fetchResults = async () => {
        await fetch(`https://api.jikan.moe/v4/anime?q=${searchInput}`)
        .then(res => res.json())
        .then((result) => {
            setAnimeData(result.data);
            console.log(animeData); 
            });
    }

  return (
    <div className="">
        <h2 className="text-center">Anime Search</h2>
        <div className="form-group">
          <i className="fa fa-search"/>
          <input type="text" value={searchInput} onChange={handleChange} />
          <button onClick={fetchResults}>Search</button>
        </div>
    

<table className="table" >
    <thead className='thead-dark'>
        <tr>
            <th>#</th>
            <th colSpan={2}>Title</th>
        </tr>
    </thead>
    <tbody>
            {
                animeData.map((entry: any, key: number) => (
                <tr>
                    <th>{key}</th>
                    <td key={key}>Title: {entry.title}</td>
                </tr>))
            }
    </tbody>
</table>

    </div>
  )
}

export default Home;