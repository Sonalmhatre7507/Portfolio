import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Image tampering detection using Convolutional Neural Network"
              description="Preprocessed and trained a CNN model on over 1,000 authentic and manipulated image datasets, achieving a
95% accuracy rate. Enhanced sensitivity by 20% and reduced false positives to less than 5% through comprehensive evaluations. Utilized feature extraction, anomaly detection, and error analysis to validate image authenticity, reducing forgery
detection time by 30% and showcasing expertise in deep learning for image forensics."
              ghLink="https://github.com/VaishnaviGagare/CNN-Based-Image-Tampering-Detection-Model"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="WanderLust – Travel Platform"
              description="Engineered a robust travel platform offering personalized suggestions based on real-time weather data, enhancing
the user experience and increasing engagement by 25%.Incorporated CRUD operations with real-time weather forecasts, improving data retrieval speed by 30% and
enhancing platform responsiveness, leading to a 15% increase in user engagement and satisfaction. Designed secure user authentication, managing 150 concurrent users and facilitating 3,000-6,000 daily
authentications, showcasing scalability. Created an advanced review filtering and recommendation system, resulting in a 35% increase in user-to-user
interactions and a 20% boost in booking conversions."
              ghLink=""
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="College inventory purchase system [database management system]"
              description="This is a web-based application designed to serve dual purposes. The system facilitates general purchasing needs, handling over 200 types of college equipment (e.g., computers, keyboards) and items for college events annually. Serves as a communication hub between users and vendors, processing 500 orders monthly, providing real-time
updates, and improving order management efficiency by 25%."
              ghLink=""
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Stock Market Prediction"
              description="Collaborated in a team of three to design a machine learning model that effectively compares original stock prices with predicted values. Conducted comprehensive research and surveys on various existing models to improve accuracy and performance. Implemented a Stock Price Prediction system using RNN-LSTM, training the LSTM model on a structured dataset of AAPL stock prices. The project also included developing a fully functional web application to display predictions in real-time, leveraging Python and advanced machine learning techniques."
              ghLink="https://github.com/VaishnaviGagare/Stock-Price-Prediction"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Weather with precaution 2021"
              description="Developed an interactive weather website that provides users with real-time weather updates based on their current location. The site integrates geolocation to automatically detect the user's location and display accurate weather forecasts. Additionally, it offers personalized safety precautions and suggestions tailored to the upcoming weather conditions, helping users prepare accordingly. Built using a tech stack of HTML, CSS, and JavaScript, the website ensures a responsive and user-friendly experience, delivering essential weather information in an intuitive format."
              ghLink="https://github.com/Sonalmhatre7507/Weather-with-precausion"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
