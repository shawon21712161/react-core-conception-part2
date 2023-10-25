// export default function Todo({task, isDone}){
//     return(
//         <li>Task : {task}</li>
//     )
// }

// conditional rendaring option 1
// export default function Todo({task, isDone}){
//    if(isDone === true){
//     return(
//         <li>Finished : {task}</li>
//     )
//    }
//    else{
//     return(
//         <li>Working on : {task}</li>
//     )
//    }
// }


 // conditional rendaring option 2

 export default function Todo({task, isDone}){
    
    if (isDone){
        return <li> Finish : {task}</li>
    }
    return <li> Working : {task}</li>
 }


//  conditional rendaring option 3(Using ternary operator)

// export default function Todo({task, isDone}){
//     return(
//         <li>{isDone ? 'Finished' : 'Running'}: {task}</li>
//     )
// }



//  conditional rendaring option 4(Using AND && operator)

// export default function Todo({task, isDone}){
//     return(
//         <li>{task} {isDone && ':(Done)'}</li>
//     )
// }


//  conditional rendaring option 5(Using OR || operator)

// export default function Todo({task, isDone}){
//     return(
//         <li>{task} {isDone || ': (Do It)'}</li>
//     )
// }