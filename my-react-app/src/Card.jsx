import pic from "./assets/WhatsApp Image 2025-07-05 at 00.00.59_f1c15b6d (1).jpg"

function Card(){
    return(
      <div  className="card">
        <img  className="img" src={pic} alt="Profile picture" />
        <h2 className="title">  My X's account </h2>
        <p className="text">follow me</p>

      </div>
    )
}
export default Card;