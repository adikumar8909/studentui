import React from 'react'
import { useEffect, useState } from "react";
import './SRecords.css'
import Deletepop from './Deletepop' 
import Popup from './Popup';
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
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
    }).then(res => res.json())
      .then(res => setStudentData(...studentData,res.data));
  };

  const changeHandler=(e)=>{
    setStudentDetails({
      ...studentDetails,[e.target.name]:e.target.value
    })
  }

  useEffect(() => {
    
    fetchData();
  }, [studentDetails]);// eslint-disable-line react-hooks/exhaustive-deps






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
              
              <th scope="col">Delete Student</th>
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
               
              <><Deletepop>  <td><button  className='btn4 btn-link' >Delete</button>  </td></Deletepop></>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
     


   
{show && <form onSubmit={(e) => {
    e.preventDefault();
    console.log(e);
    fetch('http://localhost:5000/create', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(studentDetails)
    }).then(res => res.json())
      .then(res => console.log(res));
        
  }}>
    <input type='type' placeholder='Name' name='Name'  onChange={changeHandler}/>
    <input type='type' placeholder='Age' name='Age'    onChange={changeHandler}/>
    <input type='number' placeholder='Phone' name='Mobile'   onChange={changeHandler}/>
    <input type='email' placeholder='Email' name="Email"   onChange={changeHandler}/>

    <button>Add</button>
  </form>}

  
     <div className='buttonbox'>
     
    <button className='btn3' onClick={()=>setShow(!show)}>Add Student</button>
    <Popup><button  className='btn5 btn-link' >Edit</button> </Popup> 
    
  </div>
  
  
    </div>
  )
}

export default SRecord

// 3333333333