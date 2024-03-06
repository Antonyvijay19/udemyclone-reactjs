import image from "../Assets/images/smile.jpg"

function Smile(){
    return(
        <div className="smile">
      <img src={image} alt="smile"></img>

      <div className="smile__offer">
        <h2> Udemy Year End Last day sale offers ! </h2>
        <p>Top courses offer at just rs.499</p>
        <p>Hurry Up, Dont miss it !!</p>
      </div>
    </div>
    )
}

export default Smile