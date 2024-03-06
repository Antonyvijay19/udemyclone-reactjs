import { FaMagnifyingGlass, FaBars } from "react-icons/fa6";
import { FaShoppingCart, FaBell, FaUser  } from "react-icons/fa";


function Navbar(){
    return(
        <div className="navbar">
        <div className="navbar__s1">
          <h1 className="navbar__s1__title">Udemy</h1>
        </div>
        <div className="navbar__s2">
            <i style={{color: "#221c1c"}}><FaMagnifyingGlass /> </i> 
            <input placeholder="Search for anything here.Tech, Business, Art..."/> 
        </div>
        <div className="navbar__s3">
          <p>Courses</p>
          <div className="mylearning">
            <p>My Learning</p>
            <div className="mylearning__popup">
              <p>You did not purschased anything yet</p>
            </div>
          </div>
          <i style={{color: "#0a0a0a"}}><FaShoppingCart /></i>
          <i style={{color: "#0a0a0b"}}><FaBell /></i>
          <i style={{color: "#121212"}}><FaUser /></i>

        </div>
        <div className="navbar__s4">
          <i><FaBars /></i>
          
        </div>
        </div>
      
    )
}

export default Navbar