import {useState} from "react";
import { getJoke } from "../Utils/fetch";
function Home() {
    const [setup, setSetup] = useState([])
    const [punchline, setPunchline] = useState('')
    const [loading, setLoading] = useState(false)

    const generateJoke = () =>{
        setLoading(true)
        getJoke()
        .then((result)=>{
            return result.json();
        })
        .then((result)=>{
            setSetup(<h1>{result.setup}</h1>)
            return result
        })
        .then((result)=>{
            setPunchline(result.punchline)
        })
        .finally(()=>{
            setLoading(false);
        })
        .catch((error)=>{
            alert('something wrong happened');
        })
    }
    
    return (
        <>
           <div>
                <p>{setup} {punchline}</p>
                <br />
                <button className="btn btn-primary" onClick={generateJoke} disabled={loading}>
                    Generate Joke
                </button>
           </div>
        </>
    );
}

export default Home;