import { useEffect, useState } from "react"

export default function User(){
    const [users, setUsers] = useState([])
    
    useEffect (()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data => setUsers(data))
    },[])
    return(
        <div className="usersStyle">
            <h3>Users : {users.length}</h3>
        </div>
    )
}

/*
1. Declare a state to hold to data.
2. UseEffect with Callback and D.ependency Array.
3. Use fetch to load Data  
4. set loaded data to the state.
*/