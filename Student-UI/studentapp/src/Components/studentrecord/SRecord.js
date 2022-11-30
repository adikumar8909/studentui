import React from 'react'
import { useEffect, useState } from "react";
import './SRecords.css'
import './addpop.css'
import Popup from './Popup';
import Deletepop from './Deletepop';
function SRecord() {
  const [data, setData] = useState([]);
  const [show,setShow]=useState(false)
  const [studentDetails,setStudentDetails]=useState({
    Name:'',
    Age:'',
    Mobile:'',
    Email:'',
  })
  const[studentData,setStudentData]=useState([])

 
  const fetchData = () => {
    fetch('http://localhost:5000/getstudents', {
      method: 'GET',
      headers: {
        'Accept': 'application/json, text/plain, /',
        'Content-Type': 'application/json'
      },
    }).then(res => res.json())
      .then(res => setStudentData(res.data));
  };

  const changeHandler=(e)=>{
    setStudentDetails({
      ...studentDetails,[e.target.name]:e.target.value
    })
  }

  useEffect(() => {
    fetchData();
  }, []);// eslint-disable-line react-hooks/exhaustive-deps






  return (
    <div>
     <h1 className="recordheading">Record Table</h1>
      <div id='tablebox'>
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Sno</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Mobile</th>
              <th scope="col">Email</th>
              <th scope="col">Edit Student</th>
              <th scope="col">Update Student</th>
              
            </tr>
          </thead>
          <tbody>
         {studentData.length>0 && studentData.map((student,index)=> (
              <tr key={index }>
                <td>{index+1}</td>
                <td>{student.Name}</td>
                <td>{student.Age}</td>
                <td>{student.Mobile}</td>
                <td>{student.Email}</td>
             <td>  <Popup></Popup> </td>
             <td> <Deletepop></Deletepop> </td>
          
             
              </tr>
            ))}

          </tbody>
        </table>
      </div>
     

      <div>
		<div>
		<a className="addbutton" href='#addpop1'>Add Student</a>
	  </div>
	  <div id='addpop1' className='addoverlay'>
		<div className='addpop'>
			<h2>Add details</h2>
			<a className='aclose' href='#'>&times;</a>
			<div className="content">

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

    <button>Add</button>
</form>} 
<div className='buttonbox'>
     
     <button className='btn3' onClick={()=>setShow(!show)}>Add Student</button>
          </div>
      </div>
			</div>
		</div>
	  </div>
	</div>
   


   
        
      
     
  )
}

export default SRecord
 