import { Link } from "@reach/router"
import { navigate } from "@reach/router"
import { useState } from "react"


const Home = props => {

    const [number, setNumber] = useState(1);
    const [param, setParam] = useState("planets");

    const sumbitHandler = e => {
        e.preventDefault()
        navigate(`/${param}/${number}`)
    }
    const changeHandler = e => {
        isNaN(e.target.value) ? setParam(e.target.value) : setNumber(e.target.value)
    }
    return(
        <>
        <form onSubmit={sumbitHandler}>
            <select onChange={changeHandler}>
                <option value="planets" >Planet</option>
                <option value="people" >People</option>
            </select>
            <input type="number" onChange={changeHandler}/>
            <input type="submit" value="Search" />
        </form>
        </>
    )
}
export default Home;