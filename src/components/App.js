import React from "react";

import Cover from "./Cover";
import Who from "./Who";
import Features from "./Features";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Cover />
      <Who />
      <Features />
      <Newsletter />
      <Footer />
    </div>
  );
}
