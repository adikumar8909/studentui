import React from 'react'
import './Popup.css'
const Popup = () => {
  return (
	<div>
 <div>
	<a class="button" href="#popup1">Edit</a>
</div>

<div id="popup1" class="overlay">
	<div class="popup">
		<h2>Here i am</h2>
		<a class="close" href="#">&times;</a>
		<h1>sadjsjkhkj sajdasjkh</h1>
		<div id="cont" class="content">
			Thank to pop me out of that button, but now i'm done so you can close this window.
		</div>
	</div>
</div>

</div>
  )
}

export default Popup
