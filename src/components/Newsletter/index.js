import React from "react";

import "./Newsletter.css";

export default function Newsletter() {
  return (
    <section className="newsletter-section">
      <h2>Subscribe for Updates</h2>
      <form className="newsform" method="POST" action="route/to/api/endpoint">
        <input type="email" placeholder="email address" />
        <button type="submit">submit</button>
      </form>
    </section>
  );
}
