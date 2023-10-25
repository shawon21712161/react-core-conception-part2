// import { useEffect, useState } from "react"
// import Friend from "./friend"

// export default function Friends (){
//     const [friends, setFriends] = useState([]) 

//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(data => setFriends(data))
//     },[])
//     return(
//         <div className="friendsStyle">
//             <h3>Friends: {friends.length}</h3>
//             {
//                 friends.map(friend => <Friend friend={friend}></Friend>)
//             }
//         </div>
    
//     )
// }

/*
1. Declare a state to hold to data.
2. UseEffect with Callback and D.ependency Array.
3. Use fetch to load Data  
4. set loaded data to the state.
*/