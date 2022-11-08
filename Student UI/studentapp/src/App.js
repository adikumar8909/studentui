import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard';
import Navbar from './Components/Navbar/Navbar';
import SRecord from './Components/studentrecord/SRecord';
import Systemlog from './Components/Systemlogs/Systemlog';

function App() {
	
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Dashboard />}></Route>
					<Route path="/SRecords" element={<SRecord />}></Route>
					<Route path="/Systemlog" element={<Systemlog />}></Route>
					
				</Routes>
			</BrowserRouter>

		</div>

	);
}

export default App;