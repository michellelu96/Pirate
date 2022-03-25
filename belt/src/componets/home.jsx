import React, { useState, useEffect, Component } from "react";
import { Link, Route, useHistory } from 'react-router-dom';
import axios from 'axios'
import '../style/allstyling.css'

const Home =()=>{
    const [allPirates, setAllPirates] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api')
            .then(response => setAllPirates(response.data))
            .catch(err => console.log(err))
    },[])

    const deletePirate = (id) => {
        axios.delete("http://localhost:8000/api/pirate/delete/" + id)
            .then(res => {
                console.log(res.data);
                console.log("SUCCESS DELETE");
                setAllPirates(allPirates.filter((pirate) => pirate._id !== id))
            })
            .catch(err => console.log(err))
    }

    return(
        <>
        <div className="containers">
            <div className="top">
            <h1>Pirate Crew</h1>
            <p><Link to="/pirate/new">Add Pirate</Link></p>
            </div>

            {
                        allPirates.map((pirate, key) => {
                            return (
                                <div className = "flexing" key={key}>
                                    <img height ="50px" width="50px"src ={pirate.image}></img>
                                    <h5>{pirate.name}</h5>
                                        <button><Link to={`/pirate/${pirate._id}`}>View Pirate</Link></button>
                                        <button onClick={()=> deletePirate(pirate._id)}>Walk the Plank</button>
                                </div>
                            )
                        })
                    }

        </div>
        </>
    )
}

export default Home;