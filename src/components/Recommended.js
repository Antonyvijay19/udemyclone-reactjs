import c1 from "../Assets/images/c1.jpg"
import c2 from "../Assets/images/c2.jpg"
import c3 from "../Assets/images/c3.jpg"
import c4 from "../Assets/images/c4.jpg"

function Recommended(){
    return(
        <div className="Recommended">
        <h1 className="Recommended__title">Recommended For you</h1>
        <p>Pick the best fit</p>
        <div className="Recommended__container">
        <div className="course-card">
          <img src={c1} alt="python"></img>
          <h3>Python Programming 2023</h3>
          <p>vijay</p>
          <p>4.9 ⭐⭐⭐⭐</p>
          <p>449 <del>1999</del></p>
        </div>
        <div className="course-card">
          <img src={c2} alt="cyber security"></img>
          <h3>Cyber security 2023</h3>
          <p>jose</p>
          <p>4.6⭐⭐⭐⭐</p>
          <p>449 <del>1499</del></p>
        </div>
        <div className="course-card">
          <img src={c3} alt="Data Science"></img>
          <h3>Data Science 2023</h3>
          <p>abdur</p>
          <p>3.6⭐⭐⭐</p>
          <p>449 <del>1399</del></p>
        </div>
        <div className="course-card">
          <img src={c4} alt="full stack "></img>
          <h3>Full stack development</h3>
          <p>vjohn</p>
          <p>4.6 ⭐⭐⭐⭐</p>
          <p>449 <del>2000</del></p>
          </div>
        </div>
        </div>
    )
}


export default Recommended