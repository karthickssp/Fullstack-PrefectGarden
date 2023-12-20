import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import '../../assets/styles/Footer.css'

export default function Footer() {
  
    const openfacebook = () => {
      window.open('https://www.facebook.com', '_blank');
    };
    const opentwitter = () => {
      window.open('https://www.twitter.com', '_blank');
    };
    const openinstagram = () => {
      window.open('https://www.instagram.com', '_blank');
    };
    const openlinkedin = () => {
      window.open('https://www.linkedin.com', '_blank');
    };
    const opengithub = () => {
      window.open('https://www.github.com', '_blank');
    };
  
  return (
    <div className="footer-background">
    <MDBFooter className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <span className="me-4 text-reset">
            <Link onClick={openfacebook}>
              <MDBIcon color="secondary" fab icon="facebook-f" />
            </Link>
          </span>
          <span className="me-4 text-reset">
            <Link onClick={opentwitter}>
              <MDBIcon color="secondary" fab icon="twitter" />
            </Link>
          </span>
          <span className="me-4 text-reset">
            <Link onClick={openinstagram}>
              <MDBIcon color="secondary" fab icon="instagram" />
            </Link>
          </span>
          <span className="me-4 text-reset">
            <Link onClick={openlinkedin}>
              <MDBIcon color="secondary" fab icon="linkedin" />
            </Link>
          </span>
          <span className="me-4 text-reset">
            <Link onClick={opengithub}>
              <MDBIcon color="secondary" fab icon="github" />
            </Link>
          </span>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon color="secondary" icon="gem" className="me-3" />
                PerfectGarden
              </h6>
              <p>The Perfect Garden. All Rights Reserved.</p>
              <Link to="/terms" className="no-text-decoration">
                <p>Terms and Conditions</p>
              </Link>
              <Link to="/privacy" className="no-text-decoration">
                <p>Privacy</p>
              </Link>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Pages</h6>
              <Link to="/" className="no-text-decoration">
                <p>Home</p>
              </Link> 
              <Link to="/about" className="no-text-decoration">
                <p>AboutUs</p>
              </Link>
              <Link to="/contact" className="no-text-decoration">
                <p>ContactUS</p>
              </Link>
              <Link to="/journal" className="no-text-decoration">
                <p>Journal</p>
              </Link>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <Link to="/dashboard" className="no-text-decoration">
                <p>Dashboard</p>
              </Link>
              <Link to="/contact" className="no-text-decoration">
                <p>Feedback</p>
              </Link>
              <Link to="/faq" className="no-text-decoration">
                <p>FAQ</p>
              </Link>
              <Link to="/" className="no-text-decoration">
                <p>Plants</p>
              </Link>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon color="secondary" icon="home" className="me-2" />
                Coimbatore, Tamil Nadu.
              </p>
              <p>
                <MDBIcon color="secondary" icon="envelope" className="me-3" />
                perfectgarden@gmail.com
              </p>
              <p>
                <MDBIcon color="secondary" icon="phone" className="me-3" /> + 91
                90805 96570
              </p>
              <p>
                <MDBIcon color="secondary" icon="print" className="me-3" /> + 91
                98765 43210
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright:
        <span className="text-reset fw-bold">perfectgarden.com</span>
      </div>
    </MDBFooter>
    </div>
  );
}
