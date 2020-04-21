import React from 'react';
import './Work.css'
import dtn from './dtnThumbnail.png';
import hp from './hpThumbnail.png';

const Work = () => {
	return(
		<div id='work' className='workContainer'>
			<div className='projectContainer music'>
				<div className='titleContainer'>
					<h2>Work</h2>
				</div>
				<div className='projectLayout'>
					<div className='projectThumbnail'>
						<a href='https://damolew19.github.io/my-labels/html/index.html' target="_blank" rel="noopener noreferrer"><img src={dtn} alt='Drop The Needle' /></a>
					</div>
					<div className='projectInfo'>
						<h3>Drop The Needle</h3>
						<h5>Web Application</h5>
						<p>Welcome to my own music blog. This website was created using vanilla JavaScript and I utilize components from the CSS3, HTML5 and ES6 packages.</p>
						<button><a href='https://github.com/damolew19/my-labels' target="_blank" rel="noopener noreferrer">View on GitHub</a></button>
					</div>
				</div>
			</div>
			<div className='projectContainer tan'>
				<div className='titleContainer'>
					<h2>Work</h2>
				</div>
				<div className='projectLayout'>
					<div className='projectThumbnail'>
						<a href='https://damolew19.github.io/home-page/' target="_blank" rel="noopener noreferrer"><img src={hp} alt='Web Browser' /></a>
					</div>
					<div className='projectInfo'>
						<h3 className=''>Home Page</h3>
						<h5>Web Application</h5>
						<p>This is a one page web app, designed to be the welcome page to any internet browser. This app was created using React and it entails a few customizable widgets for the user to play with.</p>
						<button><a href='https://github.com/damolew19/home-page/tree/master' target="_blank" rel="noopener noreferrer" >View on GitHub</a></button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Work;