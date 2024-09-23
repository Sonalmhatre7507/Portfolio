import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I became fascinated with programming and I have at least learned something, I think… 🤷‍♂️
              <br />I am a <b className="purple">Computer Engineering </b> graduate from Usha Mittal Institute of Technology, earning an A+ distinction.
              
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Python, JavaScript, HTML, CSS, and AWS. </b>
              </i>
              <br />
              <br />
              I am proficient in &nbsp;
              <i>
                <b className="purple">MySQL </b> and
                various software tools.{" "}
                
              </i>
              <br />
              <br />
              My leadership abilities were developed as the <b className="purple">Sponsorship Head</b> and
              <i>
                
              </i>
              &nbsp; in the NSS Council. I am passionate about leveraging my technical expertise to contribute to innovative projects. I thrive in fast-paced environments and aim to make a meaningful impact.
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={10} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Sonalmhatre7507"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sonal-mhatre-a13971221/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
