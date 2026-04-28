import React from "react";
import styled from "styled-components";
import { FiCalendar, FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";
import {
  Page,
  PageHero,
  Container,
  Section,
  Button,
} from "../components/shared";
import { clinic, images } from "../data/siteData";

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
  margin-bottom: 60px;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
const Card = styled.div`
  background: #fff;
  border: 1px solid #d8e6ef;
  border-radius: 14px;
  padding: 35px;
  text-align: center;
  box-shadow: 0 10px 24px rgba(9, 31, 52, 0.05);
  svg {
    color: #168bdc;
    font-size: 28px;
    padding: 10px;
    box-sizing: content-box;
    border-radius: 12px;
    background: #e4f3fd;
  }
  h3 {
    font-family: "Playfair Display", serif;
  }
  p {
    color: #55708c;
    line-height: 1.55;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
const Box = styled.div`
  background: #fff;
  border: 1px solid #d8e6ef;
  border-radius: 14px;
  padding: 32px;
  box-shadow: 0 10px 24px rgba(9, 31, 52, 0.05);
  h2 {
    font-family: "Playfair Display", serif;
    margin-top: 0;
  }
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 13px 0;
  border-radius: 10px;
  color: #344e68;
  &:last-child {
    background: #f4f8fb;
    padding-inline: 12px;
    color: #7890a7;
  }
`;
const Map = styled.iframe`
  width: 100%;
  min-height: 410px;
  border: 0;
  border-radius: 14px;
`;
function Contact() {
  return (
    <Page
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageHero $image={images.clinic}>
        <div>
          <h1>Contact Us</h1>
          <p>We're here to help you smile</p>
        </div>
      </PageHero>
      <Section>
        <Container>
          <Cards>
            <Card>
              <FiPhone />
              <h3>Phone</h3>
              <p>
                {clinic.phone}
                <br />
                Click to call us directly
              </p>
            </Card>
            <Card>
              <FiMail />
              <h3>Email</h3>
              <p>
                {clinic.email}
                <br />
                We reply within 24 hours
              </p>
            </Card>
            <Card>
              <FiMapPin />
              <h3>Address</h3>
              <p>
                {clinic.address}
                <br />
                Get directions on Google Maps
              </p>
            </Card>
          </Cards>
          <Grid>
            <Box>
              <h2>
                <FiClock /> Opening Hours
              </h2>
              {[
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ].map((d) => (
                <Row key={d}>
                  <span>{d}</span>
                  <span>9:00 AM – 8:00 PM</span>
                </Row>
              ))}

              <Row>
                <span>Sunday</span>
                <span>Closed</span>
              </Row>
              <Button
                as={Link}
                to="/book"
                style={{ width: "100%", marginTop: 24 }}
              >
                <FiCalendar /> Book an Appointment
              </Button>
            </Box>
            <Map
              title="Mitrovica map"
              loading="lazy"
              src="https://www.google.com/maps?q=Mitrovica%20Kosovo&output=embed"
            />
          </Grid>
        </Container>
      </Section>
    </Page>
  );
}
export default Contact;
