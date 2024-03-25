import cake from "./assets/cake.mp4";

const VideoText = () => {
  return (
    <div className="vid-container">
      <div className="sticky-vid">
        <video autoPlay loop controls={false} muted={true}>
          <source src={cake} type="video/mp4" />
        </video>
      </div>
      <div className="vid-text">
        <p>Only the educated are free</p>
        <h2>
          Reading is a passport to countless adventures and a key to unlocking
          the vast treasury of human wisdom.
          <br /> <br />
          And the beautiful thing about learning is nobody can take it away from
          you.
        </h2>
        <div className="p-text">
        <p>
          From expert tips to step-by-step guides, our <br /> magazine serves as a
          trusted companion on your <br /> journey toward personal and professional
          growth.
        </p>
      </div>
      </div>

    </div>
  );
};

export default VideoText;
