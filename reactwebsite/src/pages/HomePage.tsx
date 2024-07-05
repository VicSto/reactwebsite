import { Card, Carousel, Col, Row, Stack } from "react-bootstrap";
import PageSkeleton from "./PageSkeleton";
import teddyLandingPagePicture from "/src/assets/home/teddylandingpage.jpg";
import carouselAboutMe from "/src/assets/home/carousel-aboutme.jpg";
import carouselMyWebsite from "/src/assets/home/carousel-mywebsite.jpg";
import { Link } from "react-router-dom";

class HomePage extends PageSkeleton {
  constructor(props: any) {
    super(props);
  }

  LandingCarousel = () => {
    return (
      <Carousel className="home-landingcarousel">
        <Carousel.Item>
          <Link to="/about">
            <img
              src={carouselAboutMe}
              alt="About Me"
              className="home-landingcarousel-image"
            />
          </Link>
          <Carousel.Caption className="home-landingcarousel-caption">
            <h3>About Me</h3>
            <p>Learn more about me, my career, and my interests.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/projects/mywebsite">
            <img
              src={carouselMyWebsite}
              alt="My Website"
              className="home-landingcarousel-image"
            />
          </Link>
          <Carousel.Caption className="home-landingcarousel-caption">
            <h3>Projects - My Website</h3>
            <p>Learn more about the making of this website.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  };

  DesktopView = () => {
    return (
      <div>
        <Stack gap={3} id="homepage">
          <Card
            style={{
              width: "50vw",
              left: "25vw",
              fontFamily: "Palatino",
              background: "transparent",
              borderColor: "transparent",
            }}
          >
            <Card.Body>
              <blockquote className="blockquote text-center">
                <h1>
                  <i>Code cruncher by day, weightlifting chef by night.</i>
                </h1>
              </blockquote>
            </Card.Body>
          </Card>
          {this.LandingCarousel()}
          <Card
            id="home-aboutpage-content"
            style={{
              width: "70vw",
              left: "15vw",
              background: "transparent",
              borderColor: "transparent",
            }}
          >
            <Card.Body>
              I am a Senior Software engineer at Tesla Motors. I work on their
              financial servicing team, owning the post-delivery lifecycle of
              all internally financed leases and loans in Tesla. My team is
              responsible for all communications, invoicing/collecting, and
              settling of these captive contracts. My team also works closely
              with Tesla's internal accounting and reporting teams to report on
              the health of our business unit, and provide on-call support for
              issues occurring in our production environment. I lead a team of
              engineers and manage an intern, maintaining an ecosystem that
              handles 1+MM requests per day.
              <br />
              <br />
              Before my current position, I was a Senior Software Engineer at
              Avanos Medical. I joined Avanos after graduation in Summer 2017,
              and worked on several projects from the level of intern engineer
              to senior software engineer. My main project in the company was
              working on a breakthrough Python AI software medical device that
              provides real-time identification of anatomical landmarks from an
              ultrasound video input. I also worked as lead software engineer on
              a next-generation update of an existing therapeutic device. In
              this role, I worked alongside our systems engineer to produce the
              software architecture and beginning draft of the software
              requirements document.
              <br />
              <br />
              I attended University of California, Irvine from Fall 2012 to
              Summer 2017 where I obtained a Bachelor of Science in Software
              Engineering.
              <br />
              <br />
              Outside of work, I have been working on a personal recipe matching
              software that feeds off my passion for cooking to allow me to
              match ingredients I have on-hand to recipes I have scraped off the
              web. My hope is to build out a complete web application that I can
              provide online for free to encourage others to enjoy cooking.
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "70vw",
              left: "15vw",
              background: "transparent",
              borderColor: "transparent",
            }}
          >
            <Card.Img variant="top" src={teddyLandingPagePicture}></Card.Img>
          </Card>
          <Row className="justify-content-md-center">
            <Col md lg={1}></Col>
          </Row>
        </Stack>
      </div>
    );
  };
  render() {
    return (
      <>
        {super.renderTop()}
        {this.DesktopView()}
        {super.renderBottom()}
      </>
    );
  }
}

export default HomePage;
