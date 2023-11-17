import React from "react";
import WebsiteNavBar from "../components/common/WebsiteNavBar";

class PageSkeleton extends React.Component {
  renderTop() {
    return <WebsiteNavBar />;
  }

  renderBottom() {
    return <></>;
  }

  render() {
    return (
      <>
        {this.renderTop()}
        {this.renderBottom()}
      </>
    );
  }
}

export default PageSkeleton;
