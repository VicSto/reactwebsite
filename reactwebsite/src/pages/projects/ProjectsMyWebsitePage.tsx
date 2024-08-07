import { Card, Stack } from "react-bootstrap";
import PageSkeleton from "../PageSkeleton";
import Iteration1Screenshot from "../../assets/projects/website-home-screenshot.png";
import Iteration2Screenshot from "../../assets/projects/react-website-screenshot.png";

class ProjectsMyWebsitePage extends PageSkeleton {
  render() {
    return (
      <>
        {super.renderTop()}
        <Stack
          gap={3}
          style={{
            fontFamily: "Helvetica",
            justifyItems: "center",
          }}
        >
          <Card
            style={{
              left: "15vw",
              width: "70vw",
            }}
          >
            <Card.Header
              className="text-center"
              style={{ fontSize: "3.0vh", textAlign: "center", width: "100%" }}
            >
              Iteration 1: Learning Node
            </Card.Header>
            <Card.Img src={Iteration1Screenshot} />
            <Card.Body>
              <strong>Title: Professional Website</strong>
              <br />
              <br />
              Language(s): Node.js, HTML5, CSS, JS, JQuery, Bootstrap.js,
              JQuery, Handlebars
              <br />
              <br />
              Description: Professional Website built on a Node.js static server
              using JQuery
              <br />
              <br />
              Status: (As of October 24, 2023) Finished
              <br />
              <br />
              GitHub:
              <a href="https://github.com/VicSto/MyWebsite" target="_blank">
                Link to Project Here
              </a>
            </Card.Body>
          </Card>
          <Card
            style={{
              left: "15vw",
              width: "70vw",
            }}
          >
            <Card.Header
              className="text-center"
              style={{ fontSize: "3.0vh", textAlign: "center", width: "100%" }}
            >
              Iteration 2: Learning React + Redux
            </Card.Header>
            <Card.Img src={Iteration2Screenshot} />
            <Card.Body>
              <strong>Title: Professional Website</strong>
              <br />
              <br />
              Language(s): React.js, Redux.js, Bootstrap, Vite
              <br />
              <br />
              Description: This website!
              <br />
              <br />
              Status: (As of November 18, 2023) In Development
              <br />
              <br />
              GitHub:
              <a href="https://github.com/VicSto/reactwebsite" target="_blank">
                Link to Project Here
              </a>
            </Card.Body>
          </Card>
        </Stack>
        {super.renderBottom()}
      </>
    );
  }
}

export default ProjectsMyWebsitePage;
