import React from 'react';
import './App.css';
import Home from '../home/Home';
import About from '../about/About';
import Work from '../work/Work';
import Contact from '../contact/Contact';



class App extends React.Component {

	componentDidMount() {
		// const images = document.querySelectorAll('.anim');
		const parallax = document.querySelectorAll('.parallax')
		const about = document.querySelectorAll('.unfixed')

		let options = {
			threshold: 0
		}

		// const observer = new IntersectionObserver(((entries) => {
		// 	entries.forEach(entry => {
		// 		if (entry.intersectionRatio > 0) {
		// 		entry.target.style.animation = `anim 1s ${entry.target.dataset.delay} forwards ease-out`
		// 		// images.classList.remove('anim')
		// 		}
		// 	})
		// }), options);

		// images.forEach(image => {
		// 	observer.observe(image)
		// });

		const paraObserver = new IntersectionObserver(((entries) => {
			entries.forEach(entry => {
				if (entry.intersectionRatio > 0) {
					console.log(entry)
					parallax.forEach(element => {
						element.style.position = 'fixed';
						element.style.bottom = '0';
					})
				} else {
					console.log(entry.target)
					parallax.forEach(element => {
						element.style.position = 'fixed';
					})
				}
			})
		}), options);

		about.forEach(object => {
			paraObserver.observe(object)
		});
	}

	

  render() {
  	return (
	    <div className='app'>
	      <Home />
	      <About />
	      <Work />
	      <Contact />
	    </div>
    ); 
  }
  
}

export default App;
