import React from 'react';
import './Contact.css';

const Contact = () => {
	return(
		<div className='contactContainer'>
			<div className='titleContainer'>
				<h2>Contact</h2>
			</div>
			<div className='contactInfo'>
				<h2>I am always seeking to improve my skills and love a new challenge.</h2>
				<br />
				<br/>
				<h3>Want to talk more?</h3>
				<p>Click the button to send me an Email</p>
			</div>
			<div className='contactButton'>				
				<a href="mailto:d.lewinski95@gmail.com">Message</a>
			</div>
		</div>
	);
}

export default Contact;