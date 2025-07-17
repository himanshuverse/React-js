import Student from "./Student"; 
function App() {
 return(
  <>
  <Student name="rahul" age={30} isStudent={true}/>
    <Student name="ashish" age={20} isStudent={false}/>
      <Student name="rahul" age={30} isStudent={true}/>
    <Student name="ashish" age={20} isStudent={false}/>
     <Student/>
   </>
 );

}

  export default App
