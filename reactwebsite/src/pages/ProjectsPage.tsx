import PageSkeleton from "./PageSkeleton";

class ProjectsPage extends PageSkeleton {
  render() {
    return (
      <>
        {super.renderTop()}
        <h1>Projects Page</h1>
        {super.renderBottom()}
      </>
    );
  }
}

export default ProjectsPage;
