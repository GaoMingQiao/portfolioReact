import React from "react";
import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
// import colorSharp from "../assets/img/colorShap.png";
import picture1 from "../assets/img/like.png";
import picture2 from "../assets/img/meal.png";
import picture3 from "../assets/img/pokemon.png";
import picture4 from "../assets/img/captureportfolio.png";
import picture5 from "../assets/img/portfolio_react.png";
import picture6 from "../assets/img/bibliotheque.png";
import ArrowIcon from "./ArrowIcon";

export default function Projects() {
  const projects = [
    {
      id: 101,
      type: "php",
      title: "like bijoux-boutique en ligne",
      description:
        "un site e-commerce de vente des bijoux en pierres et argent",
      imgUrl: picture1,
    },

    {
      id: 102,
      type: "js",
      title: "mealDB",
      description:
        "un site d'afficher des recettes aléatoires générées par Api",
      imgUrl: picture2,
    },
    {
      id: 103,
      type: "js",
      title: "pokedex",
      description: "un site d'afficher des pokémon grâce à Api pokedex",
      imgUrl: picture3,
    },
    {
      id: 104,
      type: "php",
      title: "portfolio en symfony",
      description:
        "un site portfolio que j'ai réalisé en Symfony avec une base de données et back-office",
      imgUrl: picture4,
    },
    {
      id: 105,
      type: "js",
      title: "portfolio en react",
      description: "ce site que j'ai réalisé avec React",
      imgUrl: picture5,
    },
    {
      id: 106,
      type: "php",
      title: "bibliothèque",
      description: "un site de gestion de bibliothèque en php",
      imgUrl: picture6,
    },
  ];
  const filterProjectsByType = (type) => {
    return projects.filter((project) => project.type === type);
  };
  const types = {
    first: "js",
    second: "php",
  };
  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>

            <ArrowIcon />
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center algn-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey={types.first}>Javascript/React</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey={types.second}>Php/Symfony</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey={types.first}>
                  <Row className="cusom-row">
                    {filterProjectsByType(types.first).map((project, index) => {
                      return (
                        <Col key={index} className="custom-col">
                          <ProjectCard {...project} />
                        </Col>
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey={types.second}>
                  <Row className="cusom-row">
                    {filterProjectsByType(types.second).map(
                      (project, index) => {
                        return (
                          <Col key={index} className="custom-col">
                            <ProjectCard {...project} />
                          </Col>
                        );
                      }
                    )}
                  </Row>
                </Tab.Pane>
                {/* <Tab.Pane eventKey="section">
                  <p>some text</p>
                </Tab.Pane>
                <Tab.Pane eventKey={types.second}>
                  <p>some text</p>
                </Tab.Pane> */}
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp} alt="" /> */}
    </section>
  );
}
