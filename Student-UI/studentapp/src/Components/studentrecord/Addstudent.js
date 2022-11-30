import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router';


    function Addstudent() {
        const navigate = useNavigate();
        const navigateToSrecords =() =>{
            navigate('/');
        }
        const [data, setData] = useState([]);
        const [show,setShow]=useState(false)
        const [studentDetails,setStudentDetails]=useState({
          Name:'',
          Age:'',
          Mobile:'',
          Email:'',
        })
        const[studentData,setStudentData]=useState([])
        const changeHandler=(e)=>{
            setStudentDetails({
              ...studentDetails,[e.target.name]:e.target.value
            })
          }


    return (
    <div>
      {show && <form onSubmit={(e) => {
    e.preventDefault();
    console.log(e);
    fetch('http://localhost:5000/create', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, /',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(studentDetails)
    }).then(res => res.json())
      .then(res => setStudentData([...studentData, res.data]));
      
        
  }}>
    <input type='type' placeholder='Name' name='Name'  onChange={changeHandler}/>
    <input type='type' placeholder='Age' name='Age'    onChange={changeHandler}/>
    <input type='number' placeholder='Phone' name='Mobile'   onChange={changeHandler}/>
    <input type='email' placeholder='Email' name="Email"   onChange={changeHandler}/>
      <div className='buttonboxx'>
    <button onClick={navigateToSrecords} >Add</button> </div>
  </form>}
    </div>
  )
}

export default Addstudent




{/*<div className="addbox">  
    <a className='addbutton' href='#addpop1'>Add Student</a>
    </div>
    <div id="addpop1" className='addoverlay'>
      <div className='addpop'>
       <h2>Add details</h2>
        <a className='aclose' href='#'>&times;</a>
        <div className='acontent'></div>  */}