import PageSkeleton from "./PageSkeleton";

class ProjectsPage extends PageSkeleton {
  render() {
    return (
      <>
        {super.renderTop()}
        <h1>Projects Main Page</h1>
        {super.renderBottom()}
      </>
    );
  }
}

export default ProjectsPage;
