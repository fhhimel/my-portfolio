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
import watch_store from "./assets/watch_store.png";
import ScrollToTop from "./ScrollToTop";

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
            <h2 className="text-center mb-4">Welcome</h2>
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
              <div className="col-md-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/32/C%2B%2B_logo.png"
                  alt="C++"
                  className="img-fluid skill-image"
                />
                <br />
                <br />
                <h4 className="text-center">C++</h4>
              </div>
              <div className="col-md-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                  alt="JS++"
                  className="img-fluid skill-image"
                />
                <br />
                <br />
                <h4 className="text-center">JavaScript</h4>
              </div>
              <div className="col-md-2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGgWCoikyxg3D_gT4XmcTinwbZBhtmWi92ad7YyB7Dmg&s"
                  alt="NodeJS"
                  className="img-fluid skill-image"
                />
                <br />
                <br />
                <h4 className="text-center">NodeJS</h4>
              </div>
              <div className="col-md-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                  alt="React"
                  className="img-fluid skill-image"
                />
                <br />
                <br />
                <h4 className="text-center">React</h4>
              </div>
              <div className="col-md-2">
                <img
                  src="https://w7.pngwing.com/pngs/67/315/png-transparent-flutter-hd-logo-thumbnail.png"
                  alt="PHP"
                  className="img-fluid skill-image"
                />
                <br />
                <br />
                <h4 className="text-center">Flutter</h4>
              </div>
              <div className="col-md-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png"
                  alt="PHP"
                  className="img-fluid skill-image"
                />
                <br />
                <br />
                <h4 className="text-center">PHP</h4>
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
                    src={watch_store}
                    className="card-img-top card_img"
                    alt="Project 1"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Watch Store</h5>
                    <a
                      href="https://watch-store-brown.vercel.app/"
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
                    src={project3}
                    className="card-img-top card_img"
                    alt="Project 1"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Education Site</h5>
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
                    src={projecthd}
                    className="card-img-top card_img"
                    alt="Project 1"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Hoodie Shop</h5>
                    <a
                      href="https://hoodie-shop.vercel.app/"
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
              <div className="col-md-6 contact_section">
                <h3>
                  Email <span>(Click below to send me an email)</span>
                </h3>
                <p className="mail_section">
                  <a href="mailto:fhhimel18@gmail.com">fhhimel18@gmail.com</a>
                </p>
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
      <ScrollToTop />
    </>
  );
}

export default App;
