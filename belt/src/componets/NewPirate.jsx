import React, { useState,useEffect } from "react";
import axios from 'axios'
import { Link, useHistory } from "react-router-dom";



const NewPirate = () => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [treasure, setTreasure] = useState("");
    const [catchphrase, setCatchphrase] = useState("");
    const [crewPosition, setCrewPosition] = useState("");
    const [pegLeg, setPegLeg] = useState(true)
    const [eyePatch, setEyePatch] = useState(true)
    const [hookHand, setHookHand] = useState(true)
    const [errors, setErrors] = useState([]);
    const history = useHistory();
    const [allPirates, setAllPirates] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api')
            .then(response => setAllPirates(response.data))
            .catch(err => console.log(err))
    }, [])


    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api', {
            name,
            image,
            treasure,
            catchphrase,
            crewPosition,
            pegLeg,
            eyePatch,
            hookHand,
        })
            .then(res => {
                console.log(res)
                history.push('/pirates')
            })
            .catch(err => {
                console.log(err.response.data);
                const { errors } = err.response.data;
                const messages = Object.keys(errors).map(error => errors[error].message)
                console.log(messages);
                setErrors(messages);
            })
    }

    const captainExists = (arr) =>{
        if (arr.some(e => e.crewPosition === 'Captain')) {
            return true
          }else{
              return false;
          }
    }

    return (
        <div>
            <div className="top">
                <h1 >Add Pirate</h1>
                <button><Link to="/pirates">Crew Board</Link></button>
            </div>
            <>
                {errors.map((err, index) => <p style={{ color: "red" }} key={index}>{err}</p>)}
            </>
            <div>
                <form onSubmit={onSubmitHandler}>
                    <div>
                        <p>
                            <label>Name:</label>
                            <input type="text" onChange={(e) => setName(e.target.value)} name='name' value={name} />
                        </p>
                        <p>
                            <label>Image URL:</label>
                            <input type="text" onChange={(e) => setImage(e.target.value)} name='image' value={image} />
                        </p>
                        <p>
                            <label># of Treasure Chests:</label>
                            <input type="number" onChange={(e) => setTreasure(e.target.value)} name='treasure' value={treasure} />
                        </p>
                        <p>
                            <label>Catchphrase:</label>
                            <input type="textbox" onChange={(e) => setCatchphrase(e.target.value)} name='catchphrase' value={catchphrase} />
                        </p>
                    </div>
                    <div>
                        <div>
                            <label>Crew Position:</label>
                            <select defaultValue={crewPosition} onChange={(e) => setCrewPosition(e.target.value)} name="crewPosition">
                                <option>#</option>
                                {
                                    // console.log(captainExists(allPirates))
                                    captainExists(allPirates) ?
                                    null
                                     : <option value="Captain">Captain</option>
                                }
                                
                                <option value="First Mate">First Mate</option>
                                <option value="Quarter Master">Quarter Master</option>
                                <option value="Boatswain">Boatswain</option>
                                <option value="Powder Monkey">Powder Monkey</option>
                            </select>
                        </div>
                        <div>
                            <label>
                                <input name="pegLeg" type="checkbox" checked={pegLeg} onChange={(e) => setPegLeg(e.target.checked)} />Peg Leg
                            </label>
                            <label>
                                <input name="eyePatch" type="checkbox" checked={eyePatch} onChange={(e) => setEyePatch(e.target.checked)} />Eye Patch
                            </label>
                            <label>
                                <input name="hookHand" type="checkbox" checked={hookHand} onChange={(e) => setHookHand(e.target.checked)} />Hook Hand
                            </label>
                        </div>
                        <button type="submit">Add Pirate</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewPirate;