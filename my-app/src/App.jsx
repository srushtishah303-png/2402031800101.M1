// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// import Hello2 from "./Hello2"
// import Button from "./Button"
// import Hello from "./Hello"
// import Hello1 from "./Hello1"

import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Products from "./Phone"
import Phone from "./Products"
import Laptop from "./Laptop"

function App() {

  function User(){
    console.log(useParams())
    const { id } = useParams()
    return <h2>User Profile ID: {id}</h2>
  }

  function NotFound(){
    return <h2> 404 - page Not Found</h2>
  }

  /*const hobbies = ["Reading", "coding", "Traveling"]

  function ByeMessage() {
    alert("Hello from ByeMessage Box")
  }

  function Message() {
    alert("Hello from Message Box")
  }*/

  return (
    <>
      {/*    */}

      {/* <Hello2 name="Srushti Shah" age={25} city="Chandigarh" hobbies={hobbies} /> */}

      {/* <Button label="click me" handleClick={Message} /> */}

      {/* <Button label="Just Click" handleClick={ByeMessage} /> */}

      {/* <Hello2 name="kim" /> */}

      {/*      */}

      {/* <Hello /> */}

      {/* <Hello1 /> */}

      {/*        */}

      {/* </> */}

      {/* ) */}

      {/* } */}

      {/*  */}

      {/* export default App */}

      <BrowserRouter>

      <h1> React Router Exmpale</h1>

      <nav>
       <Link to="/">Home</Link> |
       <Link to="/about">About</Link> |
       <Link to="/contact">Contact</Link> |
       <Link to="/user/10">User</Link> |
       <Link to="/products">Products</Link>
     </nav>



        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/products" element={<Products />} >
              <Route path="phone" element={<Phone />} />
              <Route path="laptop" element={<Laptop />} />
          </Route>
          <Route path="*" element={<NotFound />} />
       
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


