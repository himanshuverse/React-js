
 function Student(props){
    return(
        <div className="student">
             <p> Name :{props.name}</p>
             <p>Age:{props.age}</p>
             <p>Student:{props.isStudent ? "Yes" :"No"}</p>
        </div>
       
    )
 }
 Student.PropTypes={
         name:PropTypes.string,
         age:PropTypes.number,
         isStudent:PropTypes.bool,
 }

 Student.defaultProps={
    name:"guest",
    age:0,
    isStudent:false,
 }
 export default Student