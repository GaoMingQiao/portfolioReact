import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function MyNavbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <>
      <Navbar className={scrolled ? "scrolled" : ""}>
        <Container className="sticky">
          <Navbar.Brand href="#home">
            {/* <img src={""} alt="logo" /> */}
            Mingqiao GAO
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {
                onUpdateActiveLink("home");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {
                onUpdateActiveLink("projects");
              }}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {
                onUpdateActiveLink("skills");
              }}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={
                activeLink === "about" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {
                onUpdateActiveLink("about");
              }}
            >
              About
            </Nav.Link>
          </Nav>
          <div className="social-icon">
            <a href="https://github.com/GaoMingQiao">
              {" "}
              <i className="bi bi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/ming-qiao-gao/">
              <FontAwesomeIcon icon={faLinkedin} size="1x" />
            </a>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
