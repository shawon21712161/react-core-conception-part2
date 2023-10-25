import { useState } from "react"

export default function Team (){

    const [team, setTeam]= useState(11);
    const handleAdd =()=>{
        const newTeam = team +1;
        setTeam(newTeam);
    }

    const handleReduce =()=>{
        const newTeam = team-1;
        setTeam(newTeam);
    }

    return (
        <div>
            <h3>Players : {team}</h3>
            <button onClick={handleAdd}>Add Player</button>
            <button onClick={handleReduce}>Reduce Player</button>
        </div>
    )
}