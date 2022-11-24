import React from 'react'
import './Deletepop.css'
const Deletepop = () => {
  return (
	<div>
		<div>
		<a class="buttond" href='#popd'>Delete</a>
	  </div>
	  <div id='popd' className='overlay'>
		<div className='pop'>
			<h2>Delete details</h2>
			<a className='closed' href='#'>&times;</a>
			<div className="contentd">
				thnks for popup
			</div>
		</div>
	  </div>
	</div>
  )
}

export default Deletepop

