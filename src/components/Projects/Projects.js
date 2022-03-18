import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import Studyeze from "../../Assets/Projects/Studyeze.png";
import UseDrive from "../../Assets/Projects/UseDrive.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import Login_auth from "../../Assets/Projects/Login_auth.png";
import budgety from "../../Assets/Projects/budgety.png";
import quizzy from "../../Assets/Projects/quizzy.png";

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
              imgPath={Studyeze}
              isBlog={false}
              title="Studyeze"
              description="Studyeze is a web application developed using HTML5, CSS3, and JavaScript. It is developed as an internship project for Studyeze comapany for their business purposes. In a world where learning only comes from our formative years in school and college, Studyeze is the new, easy, and definitive path for keeping up with the 21st century
              ."
              link="https://venkatesh-tech.github.io/Studyeze//html/finaxo/index.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={UseDrive}
              isBlog={false}
              title="UseDrive"
              description="Use Drive is an optimized storage application for storing your files/documents/images. Use Drive is a cloud-based storage application made with Reactjs and Firebase. You can use this application to store your files. Create an account with your mail id and login to save your files. You can access your files from anywhere just by logging into the website. "
              link="https://auth-development-a240e.web.app/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Portfolio"
              description="This Personal portfolio is designed using HTML5, CSS3, and JavaScript.    Personal portfolios are consistent that need to be taken care of throughout your work. You can easily display the samples of your work, details about yourself, completed projects in the past, and better explain to your clients why they must use your services to their advantage."
              link="https://venkatesh-tech.github.io/Portfolio-CSS/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Login_auth}
              isBlog={false}
              title="Login_Auth"
              description="Login_Auth is an authentication system backed up by firebase security. this can be placed in any react application to set up a login page with email verification and firebase security.
              Firebase uses google email verification for security."
              link="https://venkatesh-tech.github.io/login/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={budgety}
              isBlog={false}
              title="Expenses-calculation"
              description="Expenses-calculation is developed by using html5,css3, and js. It calculates the expenses of a person by taking his income and his total expenses and also calculates the percentage of expenses."
              link="https://dreamy-ride-83e0f2.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quizzy}
              isBlog={false}
              title="Quizzy"
              description="This is a multiple-choice quiz app. It calculates the number of answers correct out of all questions. It displays the percentage of correct answers in the section. It is designed using basic CSS."
              link="https://quizzy-site.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
