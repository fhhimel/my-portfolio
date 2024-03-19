import { Link as ScrollLink } from "react-scroll";

import "./App.css";

import profie_pic from "./assets/profile_pic.jpg";
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import project3 from "./assets/project3.png";
import project4 from "./assets/project4.png";
import project5 from "./assets/weather_app.png";
import projectcar from "./assets/projectcar.png";
import projecthd from "./assets/projecthd.png";
import crypto_site from "./assets/crypto_site.png";
import photography_site from "./assets/photography_site.png";
import club_site from "./assets/club_site.png";
import gym_site from "./assets/gym_site.png";
import interior_site from "./assets/interior_site.png";
import mic_site from "./assets/mic_shop.png";

function App() {
  return (
    <>
      <div>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <a className="navbar-brand" href="/">
            Fahim Hasan Himel
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <ScrollLink
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={800}
                  className="nav-link"
                >
                  About
                </ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={800}
                  className="nav-link"
                >
                  Skills
                </ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={800}
                  className="nav-link"
                >
                  Projects
                </ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={800}
                  className="nav-link"
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </div>
        </nav>
        {/* About Section */}
        <section id="about" className="py-5">
          <div className="container">
            <h2 className="text-center mb-4">Welcome!</h2>
            <div className="row">
              <div className="col-md-6">
                <p className="about_text">
                  <br />
                  Highly motivated and skilled fresher with a passion for
                  developing innovative software solutions. Proﬁcient in various
                  programming languages including C++, JavaScript and Python. I
                  have hands-on experience in designing, developing, and
                  maintaining software, web as well as mobile applications.
                </p>
              </div>
              <div className="col-md-6 text-center">
                <img
                  src={profie_pic}
                  alt="Profile Picture"
                  className="img-fluid rounded-circle profile-img"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Skills Section */}
        <section id="skills" className="bg-light py-5">
          <div className="container">
            <h2 className="text-center mb-4">Skills</h2>
            <div className="row">
              <div className="col-md-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/32/C%2B%2B_logo.png"
                  alt="C++"
                  className="img-fluid skill-image"
                />
                <br />
                <br />
                <h4 className="text-center">C++</h4>
              </div>
              <div className="col-md-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                  alt="JS++"
                  className="img-fluid skill-image"
                />
                <br />
                <br />
                <h4 className="text-center">JavaScript</h4>
              </div>
              <div className="col-md-3">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGgWCoikyxg3D_gT4XmcTinwbZBhtmWi92ad7YyB7Dmg&s"
                  alt="NodeJS"
                  className="img-fluid skill-image"
                />
                <br />
                <br />
                <h4 className="text-center">NodeJS</h4>
              </div>
              <div className="col-md-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                  alt="React"
                  className="img-fluid skill-image"
                />
                <br />
                <br />
                <h4 className="text-center">React</h4>
              </div>
            </div>
          </div>
        </section>
        {/* Projects Section */}
        <section id="projects" className="py-5">
          <div className="container">
            <h2 className="text-center mb-4">Projects</h2>
            <div className="row">
              <div className="col-md-4">
                <div className="card project-card">
                  <img
                    src={projectcar}
                    className="card-img-top card_img"
                    alt="Project 1"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Car Shop</h5>
                    <p className="card-text">A platform for purchasing cars.</p>
                    <a
                      href="https://car-shop-plum.vercel.app/"
                      className="btn btn-dark"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card project-card">
                  <img
                    src={crypto_site}
                    className="card-img-top card_img"
                    alt="Project 1"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Crypto Site</h5>
                    <p className="card-text">A crypto currency site.</p>
                    <a
                      href="https://crypto-site-umber.vercel.app/"
                      className="btn btn-dark"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card project-card">
                  <img
                    src={photography_site}
                    className="card-img-top card_img"
                    alt="Project 1"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Photography Site</h5>
                    <p className="card-text">A Photography Site.</p>
                    <a
                      href="https://photography-site-sage.vercel.app/"
                      className="btn btn-dark"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card project-card">
                  <img
                    src={gym_site}
                    className="card-img-top card_img"
                    alt="Project 1"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Gym Site</h5>
                    <p className="card-text">A Gym Site.</p>
                    <a
                      href="https://gym-site-sigma.vercel.app/"
                      className="btn btn-dark"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card project-card">
                  <img
                    src={mic_site}
                    className="card-img-top card_img"
                    alt="Project 1"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Microphone shop</h5>
                    <p className="card-text">
                      Website for purchasing microphone.
                    </p>
                    <a
                      href="https://mic-site.vercel.app/"
                      className="btn btn-dark"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card project-card">
                  <img
                    src={interior_site}
                    className="card-img-top card_img"
                    alt="Project 1"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Interior Site</h5>
                    <p className="card-text">A Interior Design Company Site.</p>
                    <a
                      href="https://interior-site-rosy.vercel.app/"
                      className="btn btn-dark"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card project-card">
                  <img
                    src={club_site}
                    className="card-img-top card_img"
                    alt="Project 1"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Club Site</h5>
                    <p className="card-text">Website for a sport club.</p>
                    <a
                      href="https://club-site-zeta.vercel.app/"
                      className="btn btn-dark"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card project-card">
                  <img
                    src={projecthd}
                    className="card-img-top card_img"
                    alt="Project 1"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Hoodie Shop</h5>
                    <p className="card-text">
                      Varieties of Hoodies are for sale.
                    </p>
                    <a
                      href="https://hoodie-shop.vercel.app/"
                      className="btn btn-dark"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card project-card">
                  <img
                    src={project3}
                    className="card-img-top card_img"
                    alt="Project 1"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Learning Management System</h5>
                    <p className="card-text">
                      A school management system. Now only UI part with React is
                      on live. I'm working on backend functionality in NodeJS.
                    </p>
                    <a
                      href="https://react-learning-management-system-nine.vercel.app/"
                      className="btn btn-dark"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card project-card">
                  <img
                    src={project1}
                    className="card-img-top card_img"
                    alt="Project 1"
                  />
                  <div className="card-body">
                    <h5 className="card-title">OdysseyGuide</h5>
                    <p className="card-text">
                      A platform for exploring travel blogs of favorite travel
                      destination. Developed in MERN stack technology.
                    </p>

                    <a
                      href="https://odyssey-guide.vercel.app/"
                      className="btn btn-dark"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card project-card">
                  <img
                    src={project2}
                    className="card-img-top card_img"
                    alt="Project 1"
                  />
                  <div className="card-body">
                    <h5 className="card-title">BloodCircle</h5>
                    <p className="card-text">
                      A platform for searching blood donors which is developed
                      in MERN stack technology.
                    </p>
                    <a
                      href="https://blood-circle.vercel.app/"
                      className="btn btn-dark"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card project-card">
                  <img
                    src={project4}
                    className="card-img-top card_img"
                    alt="Project 1"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Quiz App</h5>
                    <p className="card-text">A simple quiz web application.</p>
                    <a
                      href="https://react-quiz-app-seven-beta.vercel.app/"
                      className="btn btn-dark"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card project-card">
                  <img
                    src={project5}
                    className="card-img-top card_img"
                    alt="Project 1"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Live Weather</h5>
                    <p className="card-text">
                      Website for getting live weather data.
                    </p>
                    <a
                      href="https://react-weather-app-omega-liart.vercel.app/"
                      className="btn btn-dark"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card project-card">
                  <img
                    src="https://raw.githubusercontent.com/fhhimel/mern-ecommerce-website/main/preview_1.PNG"
                    className="card-img-top card_img"
                    alt="Project 1"
                  />
                  <div className="card-body">
                    <h5 className="card-title">MERN eCommerce</h5>
                    <p className="card-text">
                      An eCommerce website developed in MERN
                    </p>
                    <a
                      href="https://github.com/fhhimel/mern-ecommerce-website"
                      className="btn btn-dark"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section id="contact" className="text-white py-5">
          <div className="container">
            <h2 className="text-center mb-4">Contact Me</h2>
            <div className="row">
              <div className="col-md-6">
                <form action="#" method="post">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      rows={5}
                      placeholder="Message"
                      defaultValue={""}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
              <div className="col-md-6">
                <h3>Email</h3>
                <p>fhhimel18@gmail.com</p>
                <h3>Phone</h3>
                <p>+8801711188115</p>
                <h3>Address</h3>
                <p>Mirpur, Dhaka.</p>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="bg-dark text-white text-center py-3">
          <div className="container">
            <p>© 2024 Fahim Hasan Himel. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
