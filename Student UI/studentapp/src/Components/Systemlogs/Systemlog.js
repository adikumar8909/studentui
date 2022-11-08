import React from 'react'
import { useNavigate} from 'react-router-dom';
function Systemlog() {
    const navigate = useNavigate();

    const navigateToDashboard = () => {
      // 👇️ navigate to /Srecords
      navigate('/');
    };
    return (
        <div>
            <div id='tablebox'>
                <table class="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Event</th>
                            <th scope="col">StudentId</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Created</td>
                            <td>11</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Updated</td>
                            <td>11</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Deleted</td>
                            <td>13</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='Buttonbox'>
                <button  onClick={navigateToDashboard}>Go Back</button>
            </div>
        </div>
    )
}

export default Systemlog