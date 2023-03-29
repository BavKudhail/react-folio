// this is an actual card content

import Layout from "../components/Layout";
import projectData from "../details.json";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../pages/ProjectGallery.css";
import backgroundImage from "../assets/pencil-2.png";

// i will create one instance of a card and populate it with appropriate content from my project JSON
function ProjectGallery() {
  const background = `url(${backgroundImage})`;
  const location = useLocation();
  const prevProjectId = location.state.projectId;
  // console.log("this is fetched", prevProjectId);

  const selectedProject = projectData.filter(
    (project) => project.id === prevProjectId
  )[0];

  return (
    <div>
      <Layout>
        <Row
          className="projectsCards"
          style={{
            backgroundImage: background,
            fontFamily: "Sofia, sans-serif",
            color: "white",
            fontSize: "30px",
          }}
        >
          <Col className="mediaQ" key={selectedProject.id}>
            <div>{selectedProject.title}</div>
            <div>{selectedProject.description}</div>
            <div>
              <Card.Img
                variant="top"
                src={
                  process.env.PUBLIC_URL + "/" + selectedProject.projectImage
                }
                alt={selectedProject.title}
              />
              <Link to={selectedProject.projectUrl}>
                {selectedProject.projectUrl}
              </Link>
            </div>
            <div>
              <Link to={selectedProject.repoUrl}>
                {selectedProject.repoUrl}
              </Link>
            </div>

            <Card></Card>
          </Col>
        </Row>
      </Layout>
    </div>
  );
}

export default ProjectGallery;
