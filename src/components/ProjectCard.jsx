import React from "react";
import { Col } from "react-bootstrap";

export default function ProjectCard({ title, description, imgUrl }) {
  return (
    <Col>
      <div className="project-imgbox">
        <img src={imgUrl} alt="image" />
        <div className="project-text">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
}
