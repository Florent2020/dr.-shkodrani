import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCalendar,
  FiCheckCircle,
  FiStar,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import {
  Page,
  Container,
  Section,
  Eyebrow,
  Title,
  Heading,
  Text,
  Button,
  GhostButton,
  Center,
  BlueLine,
} from "../components/shared";
import Stats from "../components/Stats";
import { images, services, reviews } from "../data/siteData";

const Hero = styled.section`
  min-height: 900px;
  padding: 190px 0 150px;
  display: grid;
  place-items: center start;
  text-align: left;
  color: #fff;
  background:
    linear-gradient(
      90deg,
      rgba(9, 25, 39, 0.86),
      rgba(9, 25, 39, 0.57),
      rgba(9, 25, 39, 0.42)
    ),
    url(${images.hero}) center/cover;
  @media (max-width: 760px) {
    background-position-x: 0;
  }

  @media (max-width: 760px) {
    min-height: 760px;
    padding-top: 150px;
    @media (max-width: 760px) {
      background-position-x: -70% !important;
    }
  }
`;

const HeroInner = styled.div`
  width: min(760px, calc(100% - 44px));
  margin-left: max(22px, calc((100vw - 1120px) / 2));
  margin-right: auto;
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 34px;
  padding: 13px 24px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.22);
  background: rgba(255, 255, 255, 0.14);
  color: #1b91dc;
  font-weight: 900;
  backdrop-filter: blur(14px);
`;

const Accent = styled.span`
  color: #188ddb;
`;

const HeroText = styled.p`
  margin: 32px 0 0;
  max-width: 740px;
  font-size: clamp(1.08rem, 1.8vw, 1.125rem);
  line-height: 1.625;
  color: rgba(255, 255, 255, 0.86);
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  margin-top: 42px;
  flex-wrap: wrap;
`;

const Rating = styled.div`
  margin-top: 44px;
  display: inline-flex;
  align-items: center;
  gap: 20px;
  color: rgba(255, 255, 255, 0.72);

  svg {
    color: #ffc107;
    fill: #ffc107;
  }
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 70px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ImageBox = styled.div`
  min-height: 800px;
  border-radius: 18px;
  background: url(${images.doctor}) center/cover;
  box-shadow: 0 18px 40px rgba(10, 32, 55, 0.11);
  position: relative;

  @media (max-width: 650px) {
    min-height: 450px;
    background-position: top;
  }
`;

const Experience = styled.div`
  position: absolute;
  right: -18px;
  bottom: -18px;
  background: #188bd8;
  color: #fff;
  padding: 18px 20px;
  border-radius: 12px;
  box-shadow: 0 15px 35px rgba(24, 139, 216, 0.28);

  strong {
    display: block;
    font-size: 1.7rem;
  }

  span {
    font-size: 0.86rem;
    font-weight: 700;
  }
`;

const Checks = styled.div`
  margin: 26px 0 34px;

  p {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #42617f;
    margin: 12px 0;
  }

  svg {
    color: #158ddd;
  }
`;

const ServiceGrid = styled.div`
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

const ServiceCard = styled(Link)`
  background: #fff;
  border: 1px solid #dce7ef;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 7px 18px rgba(11, 30, 50, 0.05);
  transition: 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 42px rgba(11, 30, 50, 0.1);
  }

  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    display: block;
  }

  div {
    padding: 24px 25px;
  }

  h3 {
    margin: 0 0 12px;
    font-family: "Playfair Display", serif;
    font-size: 1.28rem;
  }

  p {
    min-height: 58px;
    color: #5b7692;
    line-height: 1.6;
  }

  span {
    color: #0785d8;
    font-weight: 800;
  }
`;

const ReviewSection = styled(Section)`
  text-align: center;
`;

const Quote = styled.div`
  max-width: 760px;
  margin: 0 auto;
  color: #213950;

  .quoteIcon {
    color: #cce8fb;
    font-size: 4rem;
    font-family: "Playfair Display", serif;
  }

  p {
    font-size: 1.35rem;
    line-height: 1.6;
    font-style: italic;
  }

  strong {
    display: block;
    margin-top: 22px;
    font-family: "Playfair Display", serif;
    font-size: 1.15rem;
  }
`;

const Stars = styled.div`
  color: #ffc107;
  display: flex;
  gap: 4px;
  justify-content: center;
`;

const CTA = styled.section`
  padding: 86px 0;
  text-align: center;
  color: #fff;
  background: #178bd6;

  h2 {
    margin: 1rem;
    font-family: "Playfair Display", serif;
    font-size: clamp(2.25rem, 2vw, 3.1rem);
  }

  p {
    margin: 18px auto 34px;
    max-width: 576px;
    font-size: 1rem;
    line-height: 1.55;
    color: #ffffffb3;
  }

  a {
    background: #fff;
    color: #1982cc;
    border-color: #fff;
    font-weight: 500;
  }
`;

const ReviewControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 22px;
  margin-top: 34px;
`;

const ControlButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #e0e6eb;
  background: transparent;
  color: #001f35;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(21, 60, 82, 0.08);
  transition: all 0.25s ease;

  svg {
    font-size: 1rem;
    /* stroke-width: 2.4; */
  }

  &:hover {
    background: #e5f6ff;
    color: #1688d4;
    transform: translateY(-2px);
  }
`;

const ReviewDots = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;

  button {
    width: 14px;
    height: 14px;
    border: none;
    border-radius: 999px;
    background: #dce6ed;
    cursor: pointer;
    transition: all 0.25s ease;
  }

  button.active {
    width: 36px;
    background: #1688d4;
  }
`;

function Home() {
  const [activeReview, setActiveReview] = useState(0);
  const [name, service, reviewText] = reviews[activeReview];

  const nextReview = () => {
    setActiveReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length);
    }, 5500);

    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <Page
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero>
        <HeroInner>
          <Badge>✨ Trusted Dental Care in Mitrovica</Badge>
          <Title $light>
            Your Smile, <Accent>Our Passion</Accent>
          </Title>
          <HeroText>
            At Klinika Dentare Dr. Shkodrani, we combine cutting-edge technology
            with a gentle, personalized approach. From routine check-ups to
            complex procedures, we make every visit comfortable and stress-free.
          </HeroText>
          <Actions>
            <Button as={Link} to="/book">
              <FiCalendar /> Book Appointment
            </Button>
            <GhostButton as={Link} to="/services">
              Our Services <FiArrowRight />
            </GhostButton>
          </Actions>
          <Rating>
            <span>
              <FiStar />
              <FiStar />
              <FiStar />
              <FiStar />
              <FiStar />
            </span>
            <span>5.0 Rating</span>
            <span>|</span>
            <span>10,000+ Patients</span>
          </Rating>
        </HeroInner>
      </Hero>

      <Stats />

      <Section>
        <Container>
          <AboutGrid>
            <ImageBox>
              <Experience>
                <strong>15+</strong>
                <span>Years of Experience</span>
              </Experience>
            </ImageBox>
            <div>
              <Eyebrow>About Us</Eyebrow>
              <Heading>
                We Focus on <Accent>Pain-Free</Accent>
                <br />
                Treatments
              </Heading>
              <Text>
                Led by Shkodran Sejdijaj with over 20 years of experience, our
                clinic provides comprehensive dental care using the latest
                technology. We believe every patient deserves a comfortable,
                worry-free experience.
              </Text>
              <Checks>
                <p>
                  <FiCheckCircle /> State-of-the-art equipment & technology
                </p>
                <p>
                  <FiCheckCircle /> Gentle, patient-focused approach
                </p>
                <p>
                  <FiCheckCircle /> Certified and experienced team
                </p>
                <p>
                  <FiCheckCircle /> Comprehensive care for the whole family
                </p>
              </Checks>
              <Button as={Link} to="/about">
                Learn More About Us <FiArrowRight />
              </Button>
            </div>
          </AboutGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <Center>
            <Eyebrow>Our Services</Eyebrow>
            <Heading>Complete Dental Care Solutions</Heading>
            <Text>
              From preventive care to advanced procedures, we offer a full range
              of dental services to keep your smile healthy and beautiful.
            </Text>
            <BlueLine />
          </Center>
          <ServiceGrid>
            {services.map((service) => (
              <ServiceCard key={service.slug} to={`/services/${service.slug}`}>
                <img src={service.image} alt={service.title} />
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <span>
                    Learn More <FiArrowRight />
                  </span>
                </div>
              </ServiceCard>
            ))}
          </ServiceGrid>
        </Container>
      </Section>

      <ReviewSection>
        <Container>
          <Center>
            <Eyebrow>Patient Reviews</Eyebrow>
            <Heading>What Our Patients Say</Heading>
            <Text>
              Don't just take our word for it — hear from our happy patients.
            </Text>
            <BlueLine />
          </Center>
          <Quote>
            <div className="quoteIcon">”</div>
            <p>"{reviewText}"</p>
            <Stars>
              <FiStar />
              <FiStar />
              <FiStar />
              <FiStar />
              <FiStar />
            </Stars>
            <strong>{name}</strong>
            <span>{service}</span>
            <ReviewControls>
              <ControlButton
                type="button"
                onClick={prevReview}
                aria-label="Previous review"
              >
                <FiChevronLeft />
              </ControlButton>

              <ReviewDots>
                {reviews.map((item, index) => (
                  <button
                    key={item[0]}
                    type="button"
                    aria-label={`Show review ${index + 1}`}
                    className={index === activeReview ? "active" : ""}
                    onClick={() => setActiveReview(index)}
                  />
                ))}
              </ReviewDots>

              <ControlButton
                type="button"
                onClick={nextReview}
                aria-label="Next review"
              >
                <FiChevronRight />
              </ControlButton>
            </ReviewControls>
          </Quote>
        </Container>
      </ReviewSection>

      <CTA>
        <Container>
          <h2>Ready for a Healthier Smile?</h2>
          <p>
            Schedule your appointment today and take the first step towards the
            smile you've always wanted.
          </p>
          <Button as={Link} to="/book">
            <FiCalendar /> Book Your Appointment
          </Button>
        </Container>
      </CTA>
    </Page>
  );
}

export default Home;
