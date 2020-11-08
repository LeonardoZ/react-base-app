import React from "react";
import { useParams } from "react-router-dom";

function About() {
  const { what } = useParams();
  return <div>Wololo {what}</div>;
}

export default About;
