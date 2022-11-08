import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Stopwatch from './Components/Stopwatch';
import Navbar from './Components/Navbar';
import Signup from './Components/Login';
import Home from './Components/Home';
function App() {
	
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/Stopwatch" element={<Stopwatch />}></Route>
					<Route path="/SignUp" element={<Signup />}></Route>
				</Routes>
			</BrowserRouter>

		</div>

	);
}

export default App;