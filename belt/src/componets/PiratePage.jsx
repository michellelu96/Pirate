import React, {useEffect,useState} from "react";
import axios from 'axios'
import { useParams,useHistory, Link } from "react-router-dom/cjs/react-router-dom.min";
import '../style/allstyling.css'

const PiratePage = (props) =>{
    const [pirate,setPirate] = useState({});
    const {id} = useParams();
    const history = useHistory();
    const [pegLeg,setPegLeg] = useState()
    const [eyePatch, setEyePatch] = useState()
    const [hookHand,setHookHand] = useState()

    useEffect(()=>{
        axios.get('http://localhost:8000/api/pirate/' + id)
        .then(response => {
            setPirate(response.data)
            setPegLeg(response.data.pegLeg)
            setEyePatch(response.data.eyePatch)
            setHookHand(response.data.hookHand)
        }
        )
        .catch(err => console.log(err))
    }, [id])


    return(
        <div>
            <div className="top">
            <h1>{pirate.name} </h1>
            <p><Link to="/pirates">Deck Crew</Link></p>
            </div>
            <div>
            <img height = "100px" width ="100px"src={pirate.image}></img>
            <h1>Catchphrase: {pirate.catchphrase}</h1>
        </div>
        <div>
            <h2>About</h2>
            <p>Postition: {pirate.crewPosition}</p>
            <p>Number of Treasures: {pirate.treasure}</p>
            <p>Peg Leg: {pegLeg} </p>
            <p>Eyepatch: {eyePatch}</p>
            <p>Hook Hand:{hookHand}</p>
            </div>
        </div>
    )
}

export default PiratePage;