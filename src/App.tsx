import './App.css'
import githubLogo from './assets/github.svg';
import linkedinLogo from './assets/linkedin.svg';
import substackLogo from './assets/substack.svg';
import myselfPic from './assets/myself.jpg';

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
                <div className="hero-summary">
                    <div className="hero-summary-text">
                        <h1>Hi, I'm Matheus Felipe</h1>
                        <h2>Back End Developer</h2>
                        <p className='initial-pitch'>
                            A passionate developer, with knowledge in React, PHP, and TypeScript. Currently pursuing a Bachelor's in Information Systems at IFBA.
                        </p>
                        </div>
                    <div className="cta-btn">
                        <button className='primary-btn'>View my work</button>
                        <button className='primary-btn'>Resume</button>
                    </div>
                    <div className="hero-socials">
                        <a className='social-btn' href="https://github.com/Matheus-Felipe-C" target='_blank'><img src={githubLogo} alt="GitHub Logo" /></a>
                        <a className='social-btn' href="https://www.linkedin.com/in/matheus-felipe-dev/" target='_blank'><img src={linkedinLogo} alt="LinkedIn logo" /></a>
                        <a className='social-btn' href="https://www.productiveprocrastination.dev/" target='_blank'><img src={substackLogo} alt="substack logo" /></a>
                    </div>
                </div>
                <img src={myselfPic} alt="A picture of myself, using a black shirt, with short hair and glasses" className='profile-picture'/>
            </section>
        </main>
    </>
  )
}

export default App
