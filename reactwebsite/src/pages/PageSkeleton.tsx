import React from "react";
import WebsiteNavBar from "../components/common/WebsiteNavBar";

class PageSkeleton extends React.Component<
  {},
  { desktopModeEnabled: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      desktopModeEnabled: window.matchMedia("(min-width: 768px)").matches,
    };
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) =>
        this.setState(() => ({ desktopModeEnabled: e.matches }))
      );
  }

  renderTop() {
    return (
      <>
        <WebsiteNavBar />;
        {!this.state.desktopModeEnabled && (
          <>
            <br />
            <br />
            <br />
          </>
        )}
      </>
    );
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
