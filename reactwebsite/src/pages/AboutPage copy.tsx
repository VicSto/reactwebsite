import PageSkeleton from "./PageSkeleton";

class AboutPage extends PageSkeleton {
  render() {
    return (
      <>
        {super.renderTop()}
        <div id="aboutpage-banner-overview" className="aboutpage-banner">
          <div
            className="aboutpage-banner-image aboutpage-banner-image-1"
            id="aboutpage-banner-image-landscape"
          ></div>
          <div
            className="aboutpage-content-bubble"
            id="aboutpage-content-bubble-1"
          >
            <h2>Professional Background</h2>
            <hr />
            <p>
              I started my career after graduating University of California,
              Irvine with a <strong>B.S. in Software Engineering</strong>. After
              graduating, I began contracting as a Software Engineer with{" "}
              <strong>Avanos Medical</strong>.
              <a href="#aboutpage-banner-Avanos">See more about Avanos below</a>
              . I worked with Avanos until 2020, when corporate restructuring
              closed our office location and provided me an opportunity to
              re-invest in myself. I rejoined the workforce in Early 2021 when I
              accepted a short-term contract with Intel and later joining Tesla
              full-time where I work today.
              <a href="#aboutpage-banner-Tesla">See more about Tesla below</a>.
              <br />
              <br />
              If you would like to see more about me, check out{" "}
              <a href="#aboutpage-banner-personal">
                my Personal Background below
              </a>
              .
              <br />
              <br />
              If you would like to learn more about my interests, check out
              <a href="aboutpage-banner-passion">My Passion below</a>.
            </p>
          </div>
        </div>
        <div id="aboutpage-banner-Tesla" className="aboutpage-banner">
          <div
            className="aboutpage-banner-image aboutpage-banner-image-3"
            id="aboutpage-banner-image-landscape"
          ></div>
          <div
            className="aboutpage-content-bubble"
            id="aboutpage-content-bubble-3"
          >
            <h2>Tesla Motors</h2>
            <hr />
            <p>
              I joined Tesla Motors in May 2021, and began working on their
              financial servicing team building the <strong>.NET</strong> web
              application, with a <strong>React</strong> front-end operating
              with <strong>Typescript</strong>. In my role, I have worked
              comprehensively with
              <strong>RabbitMQ</strong> and <strong>Apache Kafka</strong> for
              data exchange, and
              <strong>MySQL</strong> and <strong>Akamai NetStorage</strong> for
              data storage. I have worked directly with deploying web
              applications with <strong>Docker</strong>,
              <strong>Kubernetes</strong>, and <strong>Jenkins</strong>. I have
              worked in advanced
              <strong>Splunk</strong> monitoring and alarming, with integrations
              to
              <strong>OpsGenie</strong> for accelerating production issue
              resolution. Some highlights from my time at Tesla:
              <br />
              <br />
              Introducing the E-Sign capabilities for the case management
              system. Previously, field operatives would have to engage
              customers to "wet sign" PDF documents and provide them to Tesla to
              perform actions like extend their lease agreement, or settle their
              contract. I owned and engineered a factory-pattern automation that
              engaged with Tesla's document generation team through{" "}
              <strong>Apache Kafka</strong> to notify, collect consent, and
              E-Sign their packets to complete their desired action. This
              implementation will support any future case management activities
              in a<strong>"Plug & Play"</strong> manner that dramatically
              reduces overhead for onboarding E-Sign actions.
              <br />
              <br />
              Transitioning the team's <strong>MySQL</strong> database to a
              partitioned format for highly trafficked tables. With the scale of
              Tesla's ecosystem constantly growing at a rapid pace, our system's
              capability to retrieve data had become costly even after the
              introduction of more indexes. It was at this time that the
              decision was made to scale up our database at the table-level. I
              presented the option to partition the tables using a{" "}
              <a
                href="https://dev.mysql.com/doc/
      refman/8.0/en/partitioning-hash.html"
              >
                "HASH Partitioning"
              </a>{" "}
              format that could leverage the "Reservation Number" identifier
              that is present in every Tesla vehicle by making a{" "}
              <a
                href="https://learn.microsoft.com/en-us/dotnet/api/
      system.security.cryptography.md5?view=net-7.0"
              >
                MD5 Sum
              </a>{" "}
              of the string and taking the modulo of the number of partitions to
              assign a "Contract Group" to every entry in our tables. This
              change gave an upfront{" "}
              <strong>50% performance improvement</strong> that, based on load
              testing performed, will persist for if the business scales up over
              100x it's current size.
            </p>
          </div>
        </div>
        <div id="aboutpage-banner-Avanos" className="aboutpage-banner">
          <div
            className="aboutpage-banner-image aboutpage-banner-image-2"
            id="aboutpage-banner-image-landscape"
          ></div>
          <div
            className="aboutpage-content-bubble"
            id="aboutpage-content-bubble-2"
          >
            <h2>Avanos Medical</h2>
            <hr />
            <p>
              When I joined Avanos Medical in 2017, I began working on my main
              project that would provide real-time identification of anatomical
              landmarks from an ultrasound video input. From this project, I
              built an expertise in <strong>Python</strong> application
              programming, and working with the <strong>PyQt</strong> framework.
              <br />
              <br />I learned the ins and outs of building Windows applications,
              and worked on the
              <strong>C#</strong> launcher application. I also learned the
              proprietary Windows solution
              <strong>Windows SIM</strong> used for deploying pre-configured
              Windows OS environments.
              <br />
              <br />I also worked on the data collection website which was a
              static
              <strong>PHP</strong> website hosted through{" "}
              <strong>Amazon S3</strong> and was built with
              <strong>BootStrap JS</strong>. We used a <strong>SQLite</strong>{" "}
              relational database that was related to an S3 bucket for data
              storage.
              <br />
              <br />
              During this time, I was brought on full-time as a{" "}
              <strong>Senior Software Engineer</strong>, and have since
              contributed to multiple other projects that gave me experience in
              embedded engineering (<strong>C++, C</strong>) and mobile
              engineering (<strong>Swift, Objective C</strong>).
            </p>
          </div>
        </div>

        <div id="aboutpage-banner-personal" className="aboutpage-banner">
          <div
            className="aboutpage-banner-image aboutpage-banner-image-4"
            id="aboutpage-banner-image-portrait"
          ></div>
          <div id="aboutpage-content-bubble-4-filter"></div>
          <div
            className="aboutpage-content-bubble"
            id="aboutpage-content-bubble-4"
          >
            <h2>Personal Background</h2>
            <hr />
            <p>
              I am a dual <strong>Canadian/American</strong> citizen. I was born
              in Victoria, B.C., and lived there until I moved to California in
              2009. I enjoy spending my time <strong>driving</strong> and{" "}
              <strong>hiking</strong> up and down the continent.
              <br />
              <br />
              Growing up, I played <strong>Water Polo</strong> and was on the
              varsity team my Freshman year of UC Irvine. I played the 2-meter
              defender position, and was known for my fierce competitiveness and
              sportsmanship. I was captain of both my high school teams in
              Canada and the U.S.
              <br />
              <br />I am also an avid gamer, and my passion for software began
              when I participated in
              <strong>"Game Jam"</strong> competitions with friends in my
              younger years. I still enjoy playing casual games, and watching
              popular streamers on Twitch.tv
            </p>
          </div>
        </div>
        <div id="aboutpage-banner-passion" className="aboutpage-banner">
          <div
            className="aboutpage-banner-image aboutpage-banner-image-5"
            id="aboutpage-banner-image-landscape"
          ></div>
          <div
            className="aboutpage-content-bubble"
            id="aboutpage-content-bubble-5"
          >
            <h2>My Passion: Cooking/Baking</h2>
            <hr />
            <p>
              An active passion of mine is cooking and baking. I grew up in a
              household that encouraged my siblings and myself to experiment and
              cook alongside our parents, and I find it to be an exciting part
              of my life to try all sorts of recipes that I've never made
              before. As of now, my favorite cuisines to cook are French and
              Indian, but I am constantly absorbing recipes based on whatever
              seasonal ingredients I can get my hands on.
              <br />
              <br />
              From this passion, I've begun working on a{" "}
              <strong>recipe matching application</strong>
              that will match any on-hand ingredients with recipes I have
              categorized from the web. I hope to one day open my own cafe that
              I can use to "play with my food" and further explore the culinary
              world.
            </p>
          </div>
        </div>

        {super.renderBottom()}
      </>
    );
  }
}

export default AboutPage;
