import React from 'react'
import './Popup.css'
const Popup = () => {
  return (
	<div>
	      <div>
      
<div>
	<a className="buttone" href="#popup1">Edit</a>
</div>

<div id="popup1" className="overlay">
	<div className="popup">
		<h2>Update Details</h2>
		<a className="close" href="#">&times;</a>
		<div className="content">
			Thank to pop me out of that button, but now i'm done so you can close this window.
		</div>
	</div>
</div>
    </div>
	</div>
  )
}

export default Popup
