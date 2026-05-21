import './App.css'

function Hello1() {


    const inVisible = true;
     
    return (
        <div>
            <h1 className={inVisible ? "visible" : "invisible"}>Conditional rendering</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sint ad quaerat fugit cupiditate blanditiis distinctio voluptate iste id, iusto nemo cum praesentium nostrum nesciunt! Architecto cum officia consectetur aliquid!</p>
        </div>
    )

//     const message = true;

//  return(
//     <div>
//         { message && <p>you have new message!</p>}
//     </div>
//  )



// const isLoggedIn = false;

// return(
//     <div>
//         {
//             isLoggedIn ? <h1> Welcome user!</h1> : <h2> Please login!</h2>
//         }
//     </div>
// )

// let message;

// if(isLoggedIn){
//     message = <h1> Welcome user!</h1>
// }else{

//      message = <h2> Please login!</h2>

// }


//  return<div>message</div>

}

export default Hello1