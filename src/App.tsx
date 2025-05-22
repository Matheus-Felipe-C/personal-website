import './App.css'
import githubLogo from './assets/github.svg';
import linkedinLogo from './assets/linkedin.svg';
import emailLogo from './assets/envelope.svg';
import substackLogo from './assets/substack.svg';

function App() {

  return (
    <>
        {/* Navbar */}
        <nav>
            <ul className='navbar-links'>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Experience</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>

        {/* Main content */}

        <main>
            <section className="hero-section">
                <h1>Hi, I'm Matheus Felipe</h1>
                <h2>Back End Developer</h2>
                <p className='initial-pitch'>
                    A passionate developer, with knowledge in React, PHP, and TypeScript. Currently pursuing a Bachelor's in Information Systems at IFBA.
                </p>
                <div className="cta-btn">
                    <button className='primary-btn'>View my work</button>
                    <button className='primary-btn'>Resume</button>
                </div>
                <div className="hero-socials">
                    <a className='social-btn' href=""><img src={githubLogo} alt="GitHub Logo" /></a>
                    <a className='social-btn' href=""><img src={linkedinLogo} alt="LinkedIn logo" /></a>
                    <a className='social-btn' href=""><img src={emailLogo} alt="email logo" /></a>
                    <a className='social-btn' href=""><img src={substackLogo} alt="substack logo" /></a>
                </div>
            </section>
        </main>
    </>
  )
}

export default App
