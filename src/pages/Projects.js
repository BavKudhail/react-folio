// this is where json file data from porjects comes in. Reusable component// dont forget to import it
// render six instances of projectgallery projects
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import projectData from "../details.json";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../pages/Projects.css";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/pencil.png";

function Projects(props) {
  const background = `url(${backgroundImage})`;
  const [selectProject, setSelectProject] = useState(null);
  const navigate = useNavigate();

  const moreDeets = (projectId) => {
    setSelectProject(projectId);
    console.log("Selected project ID:", projectId);
    // navigating to the next page with clicked projectId
    navigate("/projectgallery", { state: { projectId: projectId } });
  };
  useEffect(() => {
    localStorage.setItem("selectedProject", selectProject);
  }, [selectProject]);
  return (
    <Layout>
      <h1
        style={{
          fontFamily: "Sofia, sans-serif",
          marginBottom: "0.2em",
        }}
      >
        Just pick the project you would like to see{" "}
      </h1>
      <div
        className="projectsBody text-center"
        style={{ margin: "30px", backgroundImage: background }}
      >
        <Row
          xs={1}
          md={2}
          className="g-4"
          style={{ fontFamily: "Sofia, sans-serif" }}
        >
          {projectData.map((project) => (
            <Col key={project.id}>
              <Card
                className="square-card"
                onClick={() => moreDeets(project.id)}
              >
                <Card.Title style={{ fontSize: "2em" }}>
                  {project.title}
                </Card.Title>
                <Card.Text style={{ fontSize: "1em" }}>
                  {project.description}
                </Card.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Layout>
  );
}

export default Projects;
