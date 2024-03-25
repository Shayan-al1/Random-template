import React from "react";

const BigImage = () => {
  return (
    <div className="big-img">
      <img
        src="https://themenectar.com/salient/mag/wp-content/uploads/sites/41/2023/06/ben-weber-osPsRNOZwIA-unsplash2-jpg.webp"
        alt=""
      />
      <div className="big-img-texts">
        <h3>By Oliver Knight In Design</h3>
        <h1>
          Discovering the Future of
          <br />
          Modern Tooling for Design
        </h1>
        <p>
          In the ever-evolving landscape of website design, staying
          <br />
          abreast of the latest trends and tools is crucial to creating
          <br />
          impactful…
        </p>
        <button>Read More</button>
      </div>
    </div>
  );
};

export default BigImage;
