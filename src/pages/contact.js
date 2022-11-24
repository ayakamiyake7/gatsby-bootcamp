import React from "react";
import Layout from "./components/layout";

const ContactPage = () => {
  return (
    <Layout>
      <h1>This is Contact page.</h1>
      <p>
        Please feel free to connect me on{" "}
        <a href="https://twitter.com" target="_blank">
          Twitter
        </a>
        .
      </p>
    </Layout>
  );
};

export default ContactPage;
