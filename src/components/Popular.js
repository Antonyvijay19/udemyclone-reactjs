import c1 from "../Assets/images/c1.jpg"
import c2 from "../Assets/images/c2.jpg"
import c3 from "../Assets/images/c3.jpg"
import c4 from "../Assets/images/c4.jpg"

function Popular(){
    return(
        <div className="popular">
    <h1 className="popular__title">Most Popular</h1>
    <p>Pick the best fit</p>
    <div className="popular__container">
      <div className="course-card">
        <img src={c1} alt="css"></img>
        <h3>HTML 2023</h3>
        <p>vijay</p>
        <p>4.9 ⭐⭐⭐⭐</p>
        <p>449 <del>1999</del></p>
      </div>
      <div className="course-card">
        <img src={c2} alt="css"></img>
        <h3>CSS 2023</h3>
        <p>jose</p>
        <p>4.6⭐⭐⭐⭐</p>
        <p>449 <del>1499</del></p>
      </div>
      <div className="course-card">
        <img src={c3} alt="Javascript"></img>
        <h3>Javascript 2023</h3>
        <p>abdur</p>
        <p>3.6⭐⭐⭐</p>
        <p>449 <del>1399</del></p>
      </div>
      <div className="course-card">
        <img src={c4} alt="React JS"></img>
        <h3>React JS</h3>
        <p>john</p>
        <p>4.6 ⭐⭐⭐⭐</p>
        <p>449 <del>2000</del></p>
        </div>
        <div className="course-card">
          <img src={c1} alt="mongo"></img>
          <h3>mongo DB 2023</h3>
          <p>vijay</p>
          <p>4.9 ⭐⭐⭐⭐</p>
          <p>449 <del>1999</del></p>
        </div>
        <div className="course-card">
          <img src={c2} alt="nosql"></img>
          <h3>nosql 2023</h3>
          <p>jose</p>
          <p>4.6⭐⭐⭐⭐</p>
          <p>449 <del>1499</del></p>
        </div>
        <div className="course-card">
          <img src={c3} alt="azure"></img>
          <h3>azure 2023</h3>
          <p>abdur</p>
          <p>3.6⭐⭐⭐</p>
          <p>449 <del>1399</del></p>
        </div>
        <div className="course-card">
          <img src={c4} alt="React JS"></img>
          <h3>React JS</h3>
          <p>john</p>
          <p>4.6 ⭐⭐⭐⭐</p>
          <p>449 <del>2000</del></p>
          </div>
</div>
</div>
    )
}

export default Popular