import React from "react";

export interface AboutTileProps {
  bubbleOrientationIndex?: number;
  background?: string;
  title?: string;
  text?: any;
}

class AboutTile extends React.Component<AboutTileProps> {
  render() {
    return (
      <div className="aboutpage-banner">
        <div
          className="aboutpage-banner-image"
          style={{
            backgroundImage: `url(${this.props.background})`,
          }}
        ></div>
        <div
          className="aboutpage-content-bubble"
          id={`aboutpage-content-bubble-${this.props.bubbleOrientationIndex}`}
        >
          <h2>{this.props.title}</h2>
          <hr />
          {this.props.text}
        </div>
      </div>
    );
  }
}

export default AboutTile;
