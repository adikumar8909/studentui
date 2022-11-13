import React from 'react'
import { useEffect, useState } from "react";
import './SRecords.css'
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
      <div id='tablebox'>
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">SNo</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Mobile</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.SNo}</td>
                <td>{item.Name}</td>
                <td>{item.Age}</td>
                <td>{item.Mobile}</td>
                <td>{item.Email}</td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
      <div className='buttonbox'>
        <button onClick={()=>setShow(!show)}>Add Student</button>
        <button>Update Student</button>
        <button>Delete Student</button>
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
      

      {
        studentData?.map((student,index)=>{
          console.log(student);
          return(
                 <p>{index+1 } {student.Name}</p>
            )
        })}
      

    </div>
  ) 
}

export default SRecord