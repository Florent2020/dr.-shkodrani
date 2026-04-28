import React, { useState } from "react";
import styled from "styled-components";
import { FiAward, FiCheckCircle, FiHeart, FiShield } from "react-icons/fi";
import {
  Container,
  Section,
  Eyebrow,
  Heading,
  Text,
  PageHero,
  Center,
  BlueLine,
  Button,
  Page,
} from "../components/shared";
import Stats from "../components/Stats";
import { images } from "../data/siteData";
import { Link } from "react-router-dom";

const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Photo = styled.img`
  width: 100%;
  height: 360px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 20px 44px rgba(8, 28, 48, 0.14);
`;

const Note = styled.div`
  margin-top: 28px;
  padding: 22px 24px;
  border-radius: 14px;
  background: #e8f6fd;
  border: 1px solid #cfeaf8;
  color: #2773aa;
  font-weight: 800;
  display: flex;
  gap: 14px;
`;

const Dentist = styled.div`
  display: grid;
  grid-template-columns: 0.75fr 1fr;
  gap: 80px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const List = styled.div`
  display: grid;
  gap: 32px;
`;

const Item = styled.div`
  display: grid;
  grid-template-columns: 52px 1fr;
  gap: 20px;

  svg {
    width: 46px;
    height: 46px;
    padding: 12px;
    border-radius: 14px;
    background: #e4f3fd;
    color: #168bdc;
  }

  h3 {
    margin: 0 0 8px;
    font-family: "Playfair Display", serif;
    font-size: 1.32rem;
  }

  p,
  li {
    color: #597390;
    line-height: 1.6;
  }
`;

const TeamPhoto = styled.img`
  width: min(860px, 100%);
  height: 520px;
  display: block;
  margin: 0 auto;
  object-fit: cover;
  border-radius: 18px;
  box-shadow: 0 20px 50px rgba(8, 28, 48, 0.12);
`;

function About() {
  return (
    <Page
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageHero $image={images.clinic}>
        <div>
          <h1>About Klinika Dentare Dr. Shkodrani</h1>
          <p>Meet the team behind your healthiest smile</p>
        </div>
      </PageHero>

      <Section>
        <Container>
          <StoryGrid>
            <Photo src={images.clinic} alt="Clinic interior" />
            <div>
              <Eyebrow>Our Story</Eyebrow>
              <Heading>A Clinic Built on Trust & Compassion</Heading>
              <Text>
                Klinika Dentare Dr. Shkodrani was founded in 2011 with a simple
                mission: to provide the highest quality dental care in a warm,
                welcoming environment. Over the years, we've grown from a small
                practice to one of Mitrovica's most trusted dental clinics.
              </Text>
              <Text>
                We believe that visiting the dentist shouldn't be stressful.
                That's why we've invested in the latest technology and
                techniques to ensure every treatment is as comfortable and
                pain-free as possible.
              </Text>
              <Note>
                <FiHeart /> "We focus on pain-free treatments because your
                comfort matters most to us."
              </Note>
            </div>
          </StoryGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <Center>
            <Eyebrow>Meet Your Dentist</Eyebrow>
            <Heading>Shkodran Sejdijaj</Heading>
            <Text>
              Leading dentist with over 20 years of experience in general and
              cosmetic dentistry.
            </Text>
            <BlueLine />
          </Center>
          <Dentist>
            <Photo
              src={images.doctor}
              alt="Doctor"
              style={{ height: "560px" }}
            />
            <List>
              <Item>
                <FiAward />
                <div>
                  <h3>Education</h3>
                  <p>
                    Graduated from the University of Pristina, Faculty of
                    Medicine, Department of Dentistry. Continued education with
                    advanced courses in implantology, orthodontics, and cosmetic
                    dentistry across Europe.
                  </p>
                </div>
              </Item>
              <Item>
                <FiCheckCircle />
                <div>
                  <h3>Experience</h3>
                  <p>
                    Over 20 years of experience treating patients of all ages.
                    Specializes in dental implants, cosmetic dentistry, and
                    full-mouth rehabilitation.
                  </p>
                </div>
              </Item>
              <Item>
                <FiShield />
                <div>
                  <h3>Certifications</h3>
                  <ul>
                    <li>Dental Chamber of Kosovo — Licensed Practitioner</li>
                    <li>
                      Advanced Implantology Certification — Berlin, Germany
                    </li>
                    <li>Continuing Education — American Dental Association</li>
                  </ul>
                </div>
              </Item>
            </List>
          </Dentist>
        </Container>
      </Section>

      <Section>
        <Container>
          <Center>
            <Eyebrow>Our Team</Eyebrow>
            <Heading>Dedicated Professionals</Heading>
            <Text>
              Our friendly team is committed to making every visit a positive
              experience.
            </Text>
            <BlueLine />
          </Center>
          <TeamPhoto src={images.team} alt="Dental team" />
        </Container>
      </Section>

      <Stats />
      <Section $compact>
        <Center>
          <Heading>Ready to Meet Us?</Heading>
          <Text>
            Schedule a consultation and experience the Klinika Dentare Dr.
            Shkodrani difference.
          </Text>
          <Button as={Link} to="/book">
            Book Your Appointment
          </Button>
        </Center>
      </Section>
    </Page>
  );
}

export default About;
