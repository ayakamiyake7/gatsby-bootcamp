import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout>
      <h1>About page</h1>
      <Link to="/contact">Contact me.</Link>
    </Layout>
  );
};

export default AboutPage;
