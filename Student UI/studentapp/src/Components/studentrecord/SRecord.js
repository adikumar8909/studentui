import React from 'react'
import './SRecords.css'
function SRecord() {
  return (
    <div>
      <div id='tablebox'>
        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Mobile</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Name1</td>
              <td>11</td>
              <td>12345678</td>
              <td>test1@gmail.com</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Name1</td>
              <td>11</td>
              <td>12345678</td>
              <td>test1@gmail.com</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Name1</td>
              <td>11</td>
              <td>12345678</td>
              <td>test1@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='buttonbox'>
        <button>Add Student</button>
        <button>Update Student</button>
        <button>Delete Student</button>
      </div>
    </div>
  )
}

export default SRecord