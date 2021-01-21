import { navigate } from "@reach/router";
import axios from "axios";
import { useEffect, useState } from "react";


const Display = props => {
    const [info, setInfo] = useState("");

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${props.param}/${props.id}`)
        .then(response => {
            console.log(response.data)
            setInfo(response.data)
        }).catch(err => {
            console.log(err);
        })
    }, []);

    const clickHandler = e => {
        navigate("/")
    }

    return(
        <>
        <button onClick={clickHandler}>Go Back</button>
        {props.param == "planets"
        ? <>
        <h1>{info.name}</h1>
        <p>Climate: {info.climate}</p>
        <p>Terrain: {info.terrain}</p>
        <p>Surface Water: {info.surface_water}%</p>
        <p>Population: {info.population}</p>
        </>
        : <>
        <h1>{info.name}</h1>
        <p>Height: {info.height}</p>
        <p>Mass: {info.mass}</p>
        <p>Hair Color: {info.hair_color}</p>
        <p>Skin Color: {info.skin_color}</p>
        </>
        }
        </>
    )
}
export default Display;