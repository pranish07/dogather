import HandPng from "../assets/Hand-png.png";

import "./footer.css";
const Footer = () => {
  return (
    <section className="footer-section">
      <div className="logo">
        <img src={HandPng} alt="photo of hand" />
        <span className="logo-text">dogather </span>
      </div>
      <div className="footer-links">
        <div>
          <h3>Product</h3>
          <ul>
            <li>Docs</li>
            <li>Whats new</li>
          </ul>
        </div>
        <div>
          <h3>Build</h3>
          <ul>
            <li>Templates</li>
            <li>API docs</li>
            <li>Guides & tutorials</li>
            <li>become an affiliate</li>
          </ul>
        </div>
        <div>
          <h3>Get Started</h3>
          <ul>
            <li>Signup</li>
            <li>Login</li>
          </ul>
        </div>
        <div>
          <h3>Resources</h3>
          <ul>
            <li>About us</li>
            <li>Email us</li>
            <li>Terms & privacy</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
