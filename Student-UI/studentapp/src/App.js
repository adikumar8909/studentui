import './App.css';
import { BrowserRouter, Routes, Route, renderMatches, } from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard';
import Navbar from './Components/Navbar/Navbar';
import SRecord from './Components/studentrecord/SRecord';
import Systemlog from './Components/Systemlogs/Systemlog';
import { Component } from 'react';



function App() {

	
	return (
		<div>
			
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Dashboard />}></Route>
					<Route path="/SRecords" element={<SRecord />}></Route>
					<Route path="/Systemlog" element={<Systemlog />}></Route>
					<Route path='/form' element={<form/>}></Route>
				</Routes>
			</BrowserRouter>
			

		</div>
	
	);}


export default App;