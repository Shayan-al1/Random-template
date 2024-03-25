const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <h3>Subscribe and never miss out</h3>
        <div className="subscribe-container">
          <input type="email" placeholder="Your Email" />
          <button type="submit">Subscribe</button>
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">More Demoes</a>
          </li>
        </ul>
        <h1>SALIENT MAG</h1>
      </div>
    </div>
  );
};

export default Footer;
