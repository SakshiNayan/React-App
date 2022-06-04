import { useState } from "react"

const Data=()=>{
    const[firstName, setFirstName]=useState("");
    const[lastName, setLastName]=useState("");
    const[age, setAge]=useState(0);
    
    const handleFirstName=(e)=>{
       console.log(e.target.value); 
       setFirstName(e.target.value);
    }
    const handleLastName=(e)=>{
        setLastName(e.target.value); 
    }
    const handleAge=(e)=>{
        setAge(e.target.value); 
    }
    const handleFormClear = ()=> {
        setFirstName("");
        setLastName("");
        setAge("");
    }
    
    return(
        <div>
            <lable for="firstName">FirstName:</lable>
            <input onChange={handleFirstName} id="firstName" value={firstName}></input>
            <lable for="lastName">LastName:</lable>
            <input onChange={handleLastName} id="lastName" value={lastName}></input>
            <lable for="age">Age:</lable>
            <input onChange={handleAge} id="age" value={age}></input>
            <div>
                <div>FullName: {firstName +" "+ lastName}</div>
                <div>Age: {age}</div>
            </div>
            <button onClick={handleFormClear}>Clear Form</button>
        </div>
    )
}
export default Data;