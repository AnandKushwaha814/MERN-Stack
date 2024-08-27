import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="foot-panel">
          <ul>
            <p style={{ fontSize: 20, fontWeight: 800 }}>
              Training{" "}
              <span style={{ color: "red", fontSize: 20, fontWeight: 800 }}>
                Blog
              </span>
            </p>
            <a href="">About Us</a>
            <a href="">Careers</a>
            <a href="">Press Releases</a>
            <a href="">Amazon Science</a>
          </ul>
          <ul>
            <p
              style={{ fontSize: 16, fontWeight: 700, color: "rgba(43, 44, 52, 1)" }}
            >
              CATEGORY
            </p>
            <a href="#">HTML</a>
            <a href="">CSS</a>
            <a href="">JAVASCRIPT</a>
            <a href="">VS CODE</a>
          </ul>
          <ul>
            <p
              style={{ fontSize: 16, fontWeight: 700, color: "rgba(43, 44, 52, 1)" }}
            >
              GET IN TOUCH
            </p>
            <a href="">+91-8XXX-XXX-XX</a>
            <a href="">Demo@gMAIL.COM</a>
          </ul>
          <ul>
            <p
              style={{ fontSize: 16, fontWeight: 700, color: "rgba(43, 44, 52, 1)" }}
            >
              FOLLOW US ON
            </p>
            <div className="follow">
              <a href="https://x.com/TechyAnand1?" target="blank">
                <i className="fa-brands fa-twitter" />
              </a>
              <a href="https://www.instagram.com/codwithfun?" target="blank">
                <i className="fa-brands fa-instagram" />
              </a>
              <a href="https://www.linkedin.com/in/anand563/" target="blank">
                <i className="fa-brands fa-linkedin-in" />
              </a>
            </div>
          </ul>
        </div>
        <div className="foot-panel2">
          <div className="foot-panel2-content">
            <p>© 2024 2024 Sensation. All Rights Reserved.</p>
            <p>😍 Anand</p>
            <p>
              Made With <span style={{ color: "red" }}>❤</span> Mohali, india
            </p>
          </div>
        </div>
      </footer>


    </>
  );
}
export default Footer