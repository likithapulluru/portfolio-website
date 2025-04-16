    import React, { useState, useEffect } from 'react';
    import './App.css';


    import javaLogo from './assets/java-logo.svg';
    import reactLogo from './assets/react.svg';
    import seleniumLogo from './assets/selenium.svg';
    import springLogo from './assets/spring.svg';
    import mysqlLogo from './assets/mysql.svg';
    import githubLogo from './assets/github.svg';
    import postmanLogo from './assets/postman.svg';
    import cLogo from './assets/c.svg';
    import cucumberLogo from './assets/cucumber.svg';
    import jenkinsLogo from './assets/jenkins.svg';
    import amazonwebservicesLogo from './assets/amazonwebservices.svg';
    import apachemavenLogo from './assets/apachemaven.svg';
    import appiumLogo from './assets/appium.svg';
    import azureLogo from './assets/azure-devops-svgrepo-com.svg';
    import javascriptLogo from './assets/javascript.svg';
    import jiraLogo from './assets/jira.svg';
    import linuxLogo from './assets/linux.svg';
    import linkedinIcon from './assets/linkedin.svg';
    import gmailIcon from './assets/gmail.svg';
    import mongodbLogo from './assets/mongodb.svg';
    import pythonLogo from './assets/python-brands.svg';
    import nodejsLogo from './assets/node-js-brands.svg';
    import backgroundLight from './assets/backgroundLight.jpg';
    import backgroundDark from './assets/backgroundDark.jpg';
    import overlayImage from './assets/overlay-right-image.jpg'; 

    function App() {
      const [darkMode, setDarkMode] = useState(false);
      const roles = ["Software Engineer", "SDET", "QA Analyst"];
      const [currentRole, setCurrentRole] = useState(0);

      useEffect(() => {
        const typingDuration = 3000; 
        const pauseAfterTyping = 1000; // pause 1s after typing
      
        const interval = setTimeout(() => {
          setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
        }, typingDuration + pauseAfterTyping);
      
        return () => clearTimeout(interval);
      }, [roles.length]);
      

      
      useEffect(() => {
        const revealElements = document.querySelectorAll('.reveal');
        const handleScroll = () => {
          revealElements.forEach((el) => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 100;
            if (elementTop < windowHeight - elementVisible) {
              el.classList.add('active');
            } else {
              el.classList.remove('active');
            }
          });
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      return (
        <div className={darkMode ? 'dark-mode' : 'light-mode'}>
          <header className="header">
            <nav className={`navbar ${darkMode ? 'dark' : 'light'}`}>
              <div className="navbar-left">
                <a href="/_">likithค pนllนrน</a>
              </div>
              <div className="navbar-right">
                <a href="#about">About Me</a>
                <a href="#skills">Skills</a>
                <a href="#Education and Experience">Education</a>
                <a href="#Education and Experience">Experience</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
                <button onClick={() => setDarkMode(!darkMode)} className="toggle-btn" title="Toggle Dark Mode">
                  {darkMode ? '🌞' : '🌙'}
                </button>
              </div>
            </nav>
          </header>

          <section className="hero" id="home" style={{ backgroundImage: `url(${darkMode ? backgroundDark : backgroundLight}) ` }}>
            <div className="hero-content">
            <h1 className="typing-effect">
    Hi, I am <span className="gradient-name">Likitha Pulluru</span>
  </h1>



              <div className="rotating-roles typing-left">
      <span className="typing-slide" key={roles[currentRole]}>
        {roles[currentRole]}
      </span>
    </div>


              <div className="social-icons">
                <a href="https://www.linkedin.com/in/likitha-pulluru-15895418b/" target="_blank" rel="noopener noreferrer">
                  <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
                </a>
                <a href="https://github.com/likithapulluru" target="_blank" rel="noopener noreferrer">
                  <img src={githubLogo} alt="GitHub" className="social-icon" />
                </a>
                <a href="mailto:likithapulluru@gmail.com" target="_blank" rel="noopener noreferrer">
                  <img src={gmailIcon} alt="Gmail" className="social-icon" />
                </a>
              </div>

              <a href="/Likitha_Resume.pdf" download className="resume-btn">
                Download Resume
              </a>
            </div>
            <img
      src={overlayImage}
      alt="Overlay"
      className="overlay-image"
    />

          </section>


          <div className="container">
            <section id="about" className="section reveal">
              <h2 className="section-title">About Me</h2>
              <div className="project-card">
                <p className="section-text">
                Hi! I'm a passionate software test engineer and an emerging full-stack developer who loves building clean, functional applications and ensuring they're rock-solid through thorough testing. With hands-on experience in Java, Selenium, REST APIs, and React, I bridge the gap between development and quality assurance. I enjoy working on real-world projects, learning new tech, and turning ideas into user-friendly solutions. Outside of code, I’m all about creativity, continuous learning, and a good aesthetic.
                </p>
              </div>
            </section>

            <section id="skills" className="section reveal">
              <h2 className="section-title">Skills</h2>
              <div className="skills-card">
                <div className="skills-grid">
                  {[
                    { logo: javaLogo, name: 'Java' }, { logo: reactLogo, name: 'React.js' }, { logo: seleniumLogo, name: 'Selenium' },
                    { logo: springLogo, name: 'Spring Boot' }, { logo: mysqlLogo, name: 'MySQL' }, { logo: githubLogo, name: 'GitHub' },
                    { logo: postmanLogo, name: 'Postman' }, { logo: cLogo, name: 'C' }, { logo: cucumberLogo, name: 'Cucumber' },
                    { logo: jenkinsLogo, name: 'Jenkins' }, { logo: amazonwebservicesLogo, name: 'AWS' }, { logo: apachemavenLogo, name: 'Apache Maven' },
                    { logo: appiumLogo, name: 'Appium' }, { logo: azureLogo, name: 'Azure' }, { logo: javascriptLogo, name: 'JavaScript' },
                    { logo: jiraLogo, name: 'Jira' }, { logo: linuxLogo, name: 'Linux' }, { logo: mongodbLogo, name: 'MongoDB' },
                    { logo: pythonLogo, name: 'Python' }, { logo: nodejsLogo, name: 'NodeJS' }
                  ].map(skill => (
                    <div className="skill-card" key={skill.name}>
                      <img src={skill.logo} alt={skill.name} className="skill-icon" />
                      <p>{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <section id="Education and Experience" className="section reveal">
    <h2 className="section-title">Education and Experience</h2>
    <div className="timeline">
      <div className="timeline-item left">
        <div className="timeline-dot"></div>
        <div className="content">
          <h3>Master's in Computer and Information Science</h3>
          <p>Indiana University - Purdue University, Indianapolis</p>
        </div>
        <h4 className="timeline-date">Jan 2023 - Dec 2024</h4>
      </div>

      <div className="timeline-item right">
        <div className="timeline-dot"></div>
        <div className="content">
          <h3>Software Engineer Analyst - Accenture</h3>
          <ul className="bullet-points">
            <li>Developed automation framework & tests by implementing POM with Selenium, and TestNG, improving release efficiency by 30% and reducing defects by 95%.</li>
            <li>Optimized CI/CD pipelines using Jenkins and Maven, enhancing deployment efficiency by 25%.</li>
            <li>Performed performance testing with JMeter to validate system scalability and reliability.</li>
            <li>Collaborated with cross-functional teams in an Agile environment to improve deployment efficiency and reduce integration issues.</li>
            <li>Ensured high-quality releases and optimized user experiences for mobile applications across devices, including iPads.</li>
            <li>Validated RESTful APIs with Postman & REST Assured, ensuring accurate request/response structures.</li>
            <li>Developed and executed automation tests for E-Commerce and Saas applications like ServiceNow.</li>
          </ul>
        </div>
        <h4 className="timeline-date">June 2022 - Dec 2022</h4>
      </div>

      <div className="timeline-item left">
        <div className="timeline-dot"></div>
        <div className="content">
          <h3>Software Engineer Associate - Accenture</h3>
          <ul className="bullet-points"></ul>
          <li>Achieved 98% test coverage by designing and executing manual & automated test cases, identifying edge cases using Selenium, Java, TestNG, and BDD (Cucumber with Gherkin).</li>
            <li>Reduced post-release defects by 95% through regression and sanity testing and optimized CI/CD pipelines with Jenkins and Maven.</li>
            <li>Performed cross-browser testing using Selenium Grid, ensuring consistent behavior across browsers, improving coverage by 30%.</li>
            <li>Collaborated with teams using Git for version control, Jira for task management, and Azure DevOps for project management, improving development speed by 15% and ensuring on-time delivery.</li>
        </div>
        <h4 className="timeline-date">Sep 2020 - May 2022</h4>
      </div>

      <div className="timeline-item right">
        <div className="timeline-dot"></div>
        <div className="content">
          <h3>Bachelor's in Electronics and Communication Engineering</h3>
          <p>CVR College of Engineering</p>
        </div>
        <h4 className="timeline-date">Aug 2016 - Aug 2020</h4>
      </div>
    </div>
  </section>






            <section id="projects" className="section reveal">
              <h2 className="section-title">Projects</h2>
              <div className="projects-list">
                <div className="project-card">
                  <h3 className="project-title">Student Course Enrollment System</h3>
                  <p className="project-tech">Java (Spring Boot), MySQL, React.js</p>
                  <ul>
                    <li>Developed a Course Enrollment System with Spring Boot and React.js</li>
                    <li>Implemented student authentication, enrollment tracking, and RESTful APIs</li>
                    <li>Used MySQL database for managing students and courses</li>
                  </ul>
                  <a href="https://likitha-movie-search-app.netlify.app/" target="_blank" rel="noreferrer" className="project-link">View Project</a>
                </div>

                <div className="project-card">
                  <h3 className="project-title">Movie Search App</h3>
                  <p className="project-tech">React.js, JavaScript, CSS, TMDb API</p>
                  <ul>
                    <li>Built a Movie Search App using React.js and TMDb API to fetch real-time movie data</li>
                    <li>Used JavaScript and Axios for API interactions</li>
                  </ul>
                  <a href="/_" target="_blank" className="project-link">View Project</a>
                </div>

                <div className="project-card">
                  <h3 className="project-title">E-Commerce Mobile App Test Automation</h3>
                  <p className="project-tech">Appium, Java, TestNG, Selenium</p>
                  <ul>
                    <li>Automated an e-commerce mobile application with Appium and Java</li>
                    <li>Performed backend API testing with REST Assured and validated database consistency</li>
                    <li>Executed tests on emulators and real Android devices</li>
                  </ul>
                  <a href="/_" target="_blank" className="project-link">View Project</a>
                </div>
              </div>
            </section>


            <section id="contact" className="contact-section">
              <h2>Contact Me</h2>
              <form action="https://formspree.io/f/manekbzk" method="POST" className="contact-form">
                <label>
                  Name:
                  <input type="text" name="name" placeholder="Your Name" required />
                </label>
                <label>
                  Email:
                  <input type="email" name="email" placeholder="you@example.com" required />
                </label>
                <label>
                  Message:
                  <textarea name="message" rows="5" placeholder="Type your message..." required></textarea>
                </label>
                <button type="submit">Send Message</button>
              </form>
            </section>
          </div>
        </div>
      );
    }

    export default App;
