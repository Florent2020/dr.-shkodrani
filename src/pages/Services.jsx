import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCalendar } from "react-icons/fi";
import {
  Page,
  PageHero,
  Container,
  Section,
  Eyebrow,
  Heading,
  Text,
  Center,
  BlueLine,
  Button,
} from "../components/shared";
import { images, services } from "../data/siteData";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(Link)`
  background: #fff;
  border: 1px solid #dbe7ef;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 24px rgba(9, 31, 52, 0.06);

  img {
    width: 100%;
    height: 215px;
    object-fit: cover;
  }
  div {
    padding: 28px;
  }
  h3 {
    margin: 0 0 12px;
    font-family: "Playfair Display", serif;
    font-size: 1.45rem;
  }
  p {
    color: #56708d;
    line-height: 1.65;
  }
  span {
    color: #0785d8;
    font-weight: 800;
  }
`;

function Services() {
  return (
    <Page
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageHero $image={images.clinic}>
        <div>
          <h1>Our Services</h1>
          <p>Comprehensive dental care tailored to your needs</p>
        </div>
      </PageHero>
      <Section>
        <Container>
          <Center>
            <Eyebrow>What We Offer</Eyebrow>
            <Heading>Full Range of Dental Services</Heading>
            <Text>
              From preventive care to advanced treatments, we have everything
              you need for a healthy, beautiful smile.
            </Text>
            <BlueLine />
          </Center>
          <Grid>
            {services.map((s) => (
              <Card key={s.slug} to={`/services/${s.slug}`}>
                <img src={s.image} alt={s.title} />
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <span>
                    Learn More <FiArrowRight />
                  </span>
                </div>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>
      <Section $compact>
        <Center>
          <Heading>Not Sure Which Service You Need?</Heading>
          <Text>
            Book a consultation and our team will assess your needs and
            recommend the best treatment plan for you.
          </Text>
          <Button as={Link} to="/book">
            <FiCalendar /> Book a Consultation
          </Button>
        </Center>
      </Section>
    </Page>
  );
}
export default Services;
