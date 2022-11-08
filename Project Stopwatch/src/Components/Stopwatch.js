import React from 'react'
import "./Stopwatch.css";
function Stopwatch() {
	
	function starttime(){
    
		alert("time start");
	  }
	function stoptime(){
		alert("time stopped");
	}
	function resettime(){
		alert("reset time");
	}
return (
	<div>
		<div className='body'>
			<div className='box'>
			<h1>STOPWATCH</h1>
			<p><span id="seconds">00</span>:<span id="tens">00</span></p>
			<button id="button-start" onClick={starttime}>Start</button>
			<button id="button-stop" onClick={stoptime}>Stop</button>
			<button id="button-reset" onClick={resettime}>Reset</button>
			</div>
		</div>
	</div> 
	
);
}

export default Stopwatch