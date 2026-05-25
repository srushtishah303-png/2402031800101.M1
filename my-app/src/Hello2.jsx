// function Hello2(props){


//     const{name, age, city} = props

//     return (
//         <div>
//             <h2>Hello, {name}</h2>
//                <h2>Age: {age}</h2>
//                   <h2>City: {city}</h2>
//         </div>
//     )

// }

// export default Hello2


function Hello2({name="srushti", age=28, city="Unknown",hobbies}){
    return (
        <div>
            <h2>Hello, {name}</h2>
            <p>Age : {age}</p>
             <p>City : {city}</p>
             <ul>
                {hobbies.map((hobby, index)=> (  
                    <li key={index}>{hobby}</li>
                ))}
             </ul>
        </div>
    )
}

 export default Hello2

