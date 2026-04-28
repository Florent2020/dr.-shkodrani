import React from "react";
import styled from "styled-components";
import { FiStar } from "react-icons/fi";
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
import { images, reviews } from "../data/siteData";
import { Link } from "react-router-dom";

const RatingBox = styled.div`
  width: min(650px, 100%);
  margin: 0 auto 95px;
  padding: 44px;
  text-align: center;
  background: #fff;
  border: 1px solid #d9e6ee;
  border-radius: 16px;
  box-shadow: 0 12px 28px rgba(9, 31, 52, 0.05);

  strong {
    display: block;
    margin: 12px 0 4px;
    font-family: "Playfair Display", serif;
    font-size: 3rem;
  }
  span {
    color: #58718d;
  }
`;

const Stars = styled.div`
  color: #ffc107;
  display: flex;
  gap: 5px;
  justify-content: center;
  svg {
    fill: #ffc107;
  }
`;

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

const Card = styled.div`
  background: #fff;
  border: 1px solid #d9e6ee;
  border-radius: 16px;
  min-height: 260px;
  padding: 34px;
  box-shadow: 0 10px 24px rgba(9, 31, 52, 0.05);

  .quote {
    color: #cce8fb;
    font-size: 3.2rem;
    font-family: "Playfair Display", serif;
    line-height: 0.7;
  }
  p {
    color: #243b52;
    font-style: italic;
    line-height: 1.7;
  }
  strong {
    display: block;
    margin-top: 18px;
    font-family: "Playfair Display", serif;
  }
  small {
    color: #597390;
  }
  footer {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 18px;
  }
`;

function Reviews() {
  return (
    <Page
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageHero $image={images.team}>
        <div>
          <h1>Patient Reviews</h1>
          <p>Real stories from real patients</p>
        </div>
      </PageHero>
      <Section>
        <Container>
          <RatingBox>
            <Stars>
              <FiStar />
              <FiStar />
              <FiStar />
              <FiStar />
              <FiStar />
            </Stars>
            <strong>4.9</strong>
            <span>Based on 120+ Google Reviews</span>
          </RatingBox>
          <Center>
            <Eyebrow>Testimonials</Eyebrow>
            <Heading>What Our Patients Say</Heading>
            <BlueLine />
          </Center>
          <Grid>
            {reviews.map(([name, service, text]) => (
              <Card key={name}>
                <div className="quote">”</div>
                <p>"{text}"</p>
                <footer>
                  <div>
                    <strong>{name}</strong>
                    <small>{service}</small>
                  </div>
                  <Stars>
                    <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />
                  </Stars>
                </footer>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>
      <Section $compact>
        <Center>
          <Eyebrow>Results</Eyebrow>
          <Heading>Before & After</Heading>
          <Text>See the transformations we've achieved for our patients.</Text>
          <BlueLine />
          <img
            src={images.beforeAfter}
            alt="Before after dental result"
            style={{
              width: "min(560px, 100%)",
              height: 320,
              objectFit: "cover",
              borderRadius: 16,
              marginTop: 36,
              boxShadow: "0 16px 38px rgba(0,0,0,.12)",
            }}
          />
        </Center>
      </Section>
      <Section $compact>
        <Center>
          <Heading>Join Our Happy Patients</Heading>
          <Text>
            Experience the Klinika Dentare Dr. Shkodrani difference for
            yourself.
          </Text>
          <Button as={Link} to="/book">
            Book Your Appointment
          </Button>
        </Center>
      </Section>
    </Page>
  );
}
export default Reviews;
