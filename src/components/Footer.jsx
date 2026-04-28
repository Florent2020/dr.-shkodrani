import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FiClock,
  FiFacebook,
  FiInstagram,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import logo from "../assets/logo.jpg";
import { clinic, services } from "../data/siteData";

const Foot = styled.footer`
  background: #111a26;
  color: #dbe7f4;
  padding: 74px 0 34px;
`;

const Container = styled.div`
  width: min(1120px, calc(100% - 44px));
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1.35fr;
  gap: 70px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fff;
  font-family: "Playfair Display", serif;
  font-size: 1.45rem;
  font-weight: 900;

  img {
    width: 42px;
    height: 42px;
    border-radius: 13px;
    object-fit: cover;
  }
`;

const Text = styled.p`
  margin: 18px 0;
  color: #bfd0df;
  line-height: 1.7;
  font-size: 0.875rem;
`;

const Socials = styled.div`
  display: flex;
  gap: 12px;

  a {
    width: 38px;
    height: 38px;
    border-radius: 12px;
    display: grid;
    place-items: center;
    background: rgba(255, 255, 255, 0.08);
  }
`;

const Col = styled.div`
  h4 {
    margin: 0 0 20px;
    color: #fff;
    font-family: "Playfair Display", serif;
    font-size: 1rem;
  }

  a,
  span {
    display: flex;
    font-size: 0.875rem;
    gap: 10px;
    color: #c3d2df;
    margin: 0 0 13px;
    line-height: 1.4;
  }
`;

const Bottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.13);
  margin-top: 60px;
  padding-top: 32px;
  display: flex;
  justify-content: space-between;
  color: #8798a8;

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 14px;
  }
`;

function Footer() {
  return (
    <Foot>
      <Container>
        <Grid>
          <div>
            <Brand>
              <img src={logo} alt="Klinika Dentare Dr. Shkodrani" />
              <span>Klinika Dentare Dr. Shkodrani</span>
            </Brand>
            <Text>
              Trusted dental care in Mitrovica. We combine modern technology
              with a gentle touch to give you the healthy, beautiful smile you
              deserve.
            </Text>
            <Socials>
              <a href="/" aria-label="Facebook">
                <FiFacebook />
              </a>
              <a href="/" aria-label="Instagram">
                <FiInstagram />
              </a>
            </Socials>
          </div>

          <Col>
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/contact">Contact</Link>
          </Col>

          <Col>
            <h4>Our Services</h4>
            {services.map((service) => (
              <Link key={service.slug} to={`/services/${service.slug}`}>
                {service.title}
              </Link>
            ))}
          </Col>

          <Col>
            <h4>Contact Us</h4>
            <span>
              <FiPhone /> {clinic.phone}
            </span>
            <span>
              <FiMail /> {clinic.email}
            </span>
            <span>
              <FiMapPin /> {clinic.address}
            </span>
            <span>
              <FiClock /> Mon – Sat: 9:00 AM – 8:00 PM
              <br />
              Sun: Closed
            </span>
          </Col>
        </Grid>

        <Bottom>
          <span>
            © 2026 Klinika Dentare Dr. Shkodrani. All rights reserved.
          </span>
          <span>Privacy Policy &nbsp;&nbsp;&nbsp; Terms of Service</span>
        </Bottom>
      </Container>
    </Foot>
  );
}

export default Footer;
