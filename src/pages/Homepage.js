// This should be a welcome landing page that contains:

// Your Name

// A headshot of you (or an avatar)
// Some indication that this is your portfolio site
import React from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

function Homepage() {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
}

export default Homepage;
