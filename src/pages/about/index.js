import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="about-page">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        {/* Hero Section */}
        <div className="about-hero">
          <h1 className="about-title">About me</h1>
          <div className="about-title-underline" />
        </div>

        {/* About Section */}
        <section className="about-section">
          <div className="about-section-header">
            <span className="about-section-badge">{dataabout.title}</span>
            <h2 className="about-section-title">Who I am</h2>
          </div>
          <div className="about-bio">
            {dataabout.aboutme.split("\n\n").map((para, i) => (
              <p key={i} className="about-bio-paragraph">
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* Work Timeline */}
        <section className="about-section">
          <div className="about-section-header">
            <span className="about-section-badge">Experience</span>
            <h2 className="about-section-title">Work Timeline</h2>
          </div>
          <div className="work-timeline">
            {worktimeline.map((data, i) => (
              <div key={i} className="work-timeline-item">
                <div className="work-timeline-marker" />
                <div className="work-timeline-content">
                  <div className="work-timeline-header">
                    <h3 className="work-timeline-title">{data.jobtitle}</h3>
                    <span className="work-timeline-date">
                      {data.where} — {data.date}
                    </span>
                  </div>
                  {data.responsibilities && (
                    <ul className="work-timeline-responsibilities">
                      {data.responsibilities.map((resp, j) => (
                        <li key={j}>{resp}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="about-section">
          <div className="about-section-header">
            <span className="about-section-badge">Expertise</span>
            <h2 className="about-section-title">Skills</h2>
          </div>
          <div className="skills-grid">
            {skills.map((data, i) => (
              <div key={i} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{data.name}</span>
                  <span className="skill-value">{data.value}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-bar-fill"
                    style={{ width: `${data.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </HelmetProvider>
  );
};
