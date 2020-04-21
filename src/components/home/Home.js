import React from 'react';
import './Home.css';
import  home from './home.png';

class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			topHeader: '',
			bottomHeader: '',
		}
	}

	componentDidMount() {

		setTimeout(() => {document.querySelector('#stars').style.opacity = 1}, 100)
		setTimeout(() => {document.querySelector('#stars2').style.opacity = 1}, 2200)
		setTimeout(() => {document.querySelector('#stars3').style.opacity = 1}, 3300)
		
		const pushThisToTop = 'Hello, I am Damien.';
		const pushThisToBottom = 'I am a web developer.';
		let i=0;
		let j=0;
		setTimeout(() => {
			let iterator = setInterval(() => {
				this.setState({
					topHeader: this.state.topHeader + pushThisToTop[i],
				})
				i++
				if (i === pushThisToTop.length) {
					clearInterval(iterator);
				}
				} , 150)
		}, 3000)
		//Wait until that one is finished
		setTimeout(() => {
			let anotherIterator = setInterval(() => {
				this.setState({
					bottomHeader: this.state.bottomHeader + pushThisToBottom[j],
				})
				j++
				if (j === pushThisToBottom.length) {
					clearInterval(anotherIterator);
				}
			} , 120)
		}, 6500)

		setTimeout(() => {
			document.querySelector('.button').style.display = 'block';
			setTimeout(() => { 
				document.querySelector('.button').style.transform = 'scale(1)'; 
			}, 1500)
		}, 8000)

			window.onscroll= function() {
				// let scroll = ;
				let scrollY = window.scrollY;

				document.querySelector('.header').style.opacity = `${1 - scrollY / 200}`;
				document.querySelector('.globe').style.transform = `scale( ${1 + scrollY / 1000})`;
				document.querySelector('.button').style.opacity = `${1 - scrollY / 200}`;
			}

		
	}

	
	


	render() {
		return(
      	<div className='homePage'>
      		<div className='background'>
	      		<div id='stars' className='parallax'/>
				<div id='stars2' className='parallax'/>
				<div id='stars3' className='parallax'/>
			</div>
			<div className='header' data-opacity='0'>
				<h1>{this.state.topHeader}</h1>
				<h2>{this.state.bottomHeader}</h2>
				<br />
				<br />
				<div className='button'>
					<a href='#about'><button type='button' >See more</button></a>
				</div>
			</div>
			<div className='button'>
				<a href='#about'><button type='button' >See more</button></a>
			</div>
			<div className='globe' data-opacity='0'>
				<img className='shift' src={home} alt='earth' />
			</div>
		</div>
		);
	}
}

export default Home;