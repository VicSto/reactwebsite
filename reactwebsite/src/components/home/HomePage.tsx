import PageSkeleton from "../commonpage/PageSkeleton";
import profilePicture from "/src/assets/profile.png";

class HomePage extends PageSkeleton {
  render() {
    return (
      <>
        {super.renderTop()}
        <div className="row" id="home_about_me_section">
          <div
            id="home_aboutpage-content"
            className="col-sm-9 col-md-6 col-lg-8 p-5"
          >
            <p>
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
            </p>
          </div>
          <div
            id="home_aboutpage-image"
            className="col-sm-3 col-md-6 col-lg-4 p-0"
          >
            <img src={profilePicture} alt="profile" />
          </div>
        </div>

        {super.renderBottom()}
      </>
    );
  }
}

export default HomePage;
