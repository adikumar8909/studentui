import React from 'react'
import './Dashboard.css'
import { useNavigate} from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const navigateToSrecords = () => {
    // 👇️ navigate to /Srecords
    navigate('/Srecords');
  };
  const navigateToSystemlogs = () => {
    // 👇️ navigate to /Srecords
    navigate('/Systemlog');
  };
 
  return (
    <div>
        <div className='box'>
            <button className='btn1' onClick={navigateToSrecords}>Student Records</button>
            <button className='btn1' onClick={navigateToSystemlogs}>System Logs</button>
            
        </div>
    </div>
  )
}

export default Dashboard