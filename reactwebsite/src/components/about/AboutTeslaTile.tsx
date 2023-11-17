import AboutTile, { AboutTileProps } from "./AboutTile";
import teslaImage from "../../assets/IMG_0001.jpg";
import React from "react";

class AboutTeslaTile extends AboutTile {
  constructor(props: AboutTileProps) {
    props = {
      bubbleOrientationIndex: 3,
      background: teslaImage,
      title: "Tesla Motors",
    };
    props.text = (
      <React.Fragment>
        <p>
          I joined Tesla Motors in May 2021, and began working on their
          financial servicing team building the <strong>.NET</strong> web
          application, with a <strong>React</strong> front-end operating with{" "}
          <strong>Typescript</strong>. In my role, I have worked comprehensively
          with
          <strong>RabbitMQ</strong> and <strong>Apache Kafka</strong> for data
          exchange, and
          <strong>MySQL</strong> and <strong>Akamai NetStorage</strong> for data
          storage. I have worked directly with deploying web applications with{" "}
          <strong>Docker</strong>,<strong>Kubernetes</strong>, and{" "}
          <strong>Jenkins</strong>. I have worked in advanced
          <strong>Splunk</strong> monitoring and alarming, with integrations to
          <strong>OpsGenie</strong> for accelerating production issue
          resolution. Some highlights from my time at Tesla:
          <br />
          <br />
          Introducing the E-Sign capabilities for the case management system.
          Previously, field operatives would have to engage customers to "wet
          sign" PDF documents and provide them to Tesla to perform actions like
          extend their lease agreement, or settle their contract. I owned and
          engineered a factory-pattern automation that engaged with Tesla's
          document generation team through <strong>Apache Kafka</strong> to
          notify, collect consent, and E-Sign their packets to complete their
          desired action. This implementation will support any future case
          management activities in a<strong>"Plug & Play"</strong> manner that
          dramatically reduces overhead for onboarding E-Sign actions.
          <br />
          <br />
          Transitioning the team's <strong>MySQL</strong> database to a
          partitioned format for highly trafficked tables. With the scale of
          Tesla's ecosystem constantly growing at a rapid pace, our system's
          capability to retrieve data had become costly even after the
          introduction of more indexes. It was at this time that the decision
          was made to scale up our database at the table-level. I presented the
          option to partition the tables using a{" "}
          <a
            href="https://dev.mysql.com/doc/
  refman/8.0/en/partitioning-hash.html"
          >
            "HASH Partitioning"
          </a>{" "}
          format that could leverage the "Reservation Number" identifier that is
          present in every Tesla vehicle by making a{" "}
          <a
            href="https://learn.microsoft.com/en-us/dotnet/api/
  system.security.cryptography.md5?view=net-7.0"
          >
            MD5 Sum
          </a>{" "}
          of the string and taking the modulo of the number of partitions to
          assign a "Contract Group" to every entry in our tables. This change
          gave an upfront <strong>50% performance improvement</strong> that,
          based on load testing performed, will persist for if the business
          scales up over 100x it's current size.
        </p>
      </React.Fragment>
    );
    super(props);
  }
}

export default AboutTeslaTile;
