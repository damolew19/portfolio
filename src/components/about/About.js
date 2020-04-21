import React from 'react';
import './About.css';
import me from './me.jpg';

const About = () => {
	return(
		<div id='about' className='aboutContainer'>
			<div className='titleContainer'>
				<h2>About</h2>
			</div>
			<div className='portraitContainer'>
				<div className='portrait anim' data-delay='0s'>
					<img src={me} alt='me' />
				</div>
			</div>
			<div className='infoContainer anim' data-delay='0.7s'>
				<div className='info '>
					<h1>Who am I?</h1>
					<br />
					<br />
					<h3>I am an aspiring front end developer, passionate about creating beautiful and user friendly appliations.</h3>
					<br/>
					<br />
					<p>I build my websites using HTML, CSS and JavaScript. I like to explore the depths of UI/UX design, and program my ideas into a functioning web app. Seeing my websites come into life is extremely rewarding.</p>
					<br />
					<div className='divider'>
						<figure>...</figure>
					</div>
					<br />
					<br />
					<h3>What do I know?</h3>
					<ul className='skills'>
						<li>HTML5</li>
						<li>CSS3</li>
						<li>JavaScript</li>
						<li>React</li>
						<li>Git</li>
						<li>Figma</li>
					</ul>
					<br />
					<br />
					<p className='caption'>Check out some of my stuff down below!</p>
				</div>
			</div>
		</div>
		);
}

export default About;