import Contact from "./Contact"
import { useNavigate } from "react-router-dom"

export default function Home(){

     const navigate = useNavigate();

  const gotoAbout = () =>{
     navigate("/about")
      
  }
  

     return (
          <div>
               <h2>Welcome to Home</h2>
               <button  onClick={gotoAbout}>Go to About</button>
          </div>
     )
}