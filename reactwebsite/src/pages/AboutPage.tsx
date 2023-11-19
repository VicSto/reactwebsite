import AboutTile from "../components/about/AboutTile";
import PageSkeleton from "./PageSkeleton";
import {
  OverviewImage,
  TeslaImage,
  AvanosImage,
  PersonalImage,
  PassionImage,
} from "../assets/about/index";
import {
  AboutOverviewTileContent,
  AboutTeslaTileContent,
  AboutAvanosTileContent,
  AboutPersonalTileContent,
  AboutPassionTileContent,
} from "../components/about/AboutPageContents";

class AboutPage extends PageSkeleton {
  render() {
    return (
      <div style={{ paddingTop: "400vh" }}>
        {super.renderTop()}
        <AboutTile
          tileId="aboutpage-banner-overview"
          bubbleOrientationIndex={1}
          background={OverviewImage}
          title="Professional Overview"
          text={AboutOverviewTileContent()}
        />
        <AboutTile
          tileId="aboutpage-banner-tesla"
          bubbleOrientationIndex={2}
          background={TeslaImage}
          title="Tesla Motors"
          text={AboutTeslaTileContent()}
        />
        <AboutTile
          tileId="aboutpage-banner-avanos"
          bubbleOrientationIndex={3}
          background={AvanosImage}
          title="Avanos Medical"
          text={AboutAvanosTileContent()}
        />
        <AboutTile
          tileId="aboutpage-banner-personal"
          bubbleOrientationIndex={2}
          background={PersonalImage}
          title="Personal Background"
          text={AboutPersonalTileContent()}
        />
        <AboutTile
          tileId="aboutpage-banner-passion"
          bubbleOrientationIndex={2}
          background={PassionImage}
          title="My Passion"
          text={AboutPassionTileContent()}
        />
        {super.renderBottom()}
      </div>
    );
  }
}

export default AboutPage;
