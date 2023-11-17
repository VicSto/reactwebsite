import AboutTile from "../components/about/AboutTile";
import PageSkeleton from "./PageSkeleton";
import teslaImage from "../assets/IMG_0001.jpg";
import AboutTeslaTileContent from "../components/about/AboutTileFragments";

class AboutPage extends PageSkeleton {
  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <div id="aboutpage-banner-Tesla" className="aboutpage-banner">
        {super.renderTop()}
        <AboutTile
          bubbleOrientationIndex={3}
          background={teslaImage}
          title="Tesla Motors"
          text={AboutTeslaTileContent()}
        />
        {super.renderBottom()}
      </div>
    );
  }
}

export default AboutPage;
