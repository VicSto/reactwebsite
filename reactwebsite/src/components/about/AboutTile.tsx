import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

export interface AboutTileProps {
  tileId?: string;
  bubbleOrientationIndex?: number;
  background?: string;
  title?: string;
  text?: any;
}

class AboutTile extends React.Component<AboutTileProps> {
  render() {
    return (
      <Container
        id={`${this.props.tileId}`}
        fluid={true}
        style={{ padding: 0, position: "sticky" }}
        className="aboutpage-banner"
      >
        <Image
          className="aboutpage-content-image"
          id={`aboutpage-content-image-${this.props.bubbleOrientationIndex}`}
          src={`${this.props.background}`}
          fluid={true}
        />
        <div
          className="aboutpage-content-bubble"
          id={`aboutpage-content-bubble-${this.props.bubbleOrientationIndex}`}
        >
          <h2>{this.props.title}</h2>
          <hr />
          {this.props.text}
        </div>
      </Container>
    );
  }
}

export default AboutTile;
