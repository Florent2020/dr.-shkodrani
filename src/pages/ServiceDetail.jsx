import React, { useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiCalendar, FiCheckCircle } from "react-icons/fi";
import {
  Page,
  PageHero,
  Container,
  Section,
  Button,
} from "../components/shared";
import { services } from "../data/siteData";

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 54px;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
const Content = styled.div`
  h2,
  h3 {
    font-family: "Playfair Display", serif;
  }
  p {
    color: #55708c;
    line-height: 1.75;
    font-size: 1.04rem;
  }
`;
const Benefits = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin: 22px 0 42px;
  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
  span {
    background: #eaf6fc;
    border-radius: 10px;
    padding: 16px;
    color: #42617f;
    display: flex;
    gap: 10px;
    align-items: center;
  }
  svg {
    color: #168bdc;
  }
`;
const Step = styled.div`
  display: grid;
  grid-template-columns: 42px 1fr;
  gap: 16px;
  margin: 18px 0;
  b {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: #168bdc;
    color: #fff;
  }
  strong {
    font-family: "Playfair Display", serif;
  }
  small {
    display: block;
    color: #597390;
    margin-top: 5px;
  }
`;
const Side = styled.aside`
  display: grid;
  gap: 24px;
  align-content: start;
`;
const Box = styled.div`
  background: #fff;
  border: 1px solid #d9e6ef;
  border-radius: 14px;
  padding: 28px;
  box-shadow: 0 10px 24px rgba(9, 31, 52, 0.05);
  h3 {
    font-family: "Playfair Display", serif;
    margin-top: 0;
  }
  .price {
    font-size: 2.5rem;
    color: #168bdc;
    font-family: "Playfair Display", serif;
    font-weight: 900;
  }
  p,
  a {
    color: #58728c;
    line-height: 1.6;
  }
  a {
    display: block;
    margin: 18px 0;
  }
`;
function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug) || services[0];
  return (
    <Page
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageHero $image={service.image}>
        <div>
          <h1>{service.title} in Mitrovica</h1>
          <p>{service.text}</p>
        </div>
      </PageHero>
      <Section>
        <Container>
          <Layout>
            <Content>
              <Link to="/services" style={{ color: "#597390" }}>
                <FiArrowLeft /> Back to All Services
              </Link>
              <h2>What is {service.title}?</h2>
              <p>
                Our {service.title.toLowerCase()} services focus on comfort,
                safety, and beautiful long-lasting results. We use modern
                equipment and a gentle approach to make your visit calm and
                stress-free.
              </p>
              <h3>Benefits</h3>
              <Benefits>
                <span>
                  <FiCheckCircle /> Early detection of dental problems
                </span>
                <span>
                  <FiCheckCircle /> Preventive care to avoid costly treatments
                </span>
                <span>
                  <FiCheckCircle /> Personalized treatment plans
                </span>
                <span>
                  <FiCheckCircle /> Comfortable, stress-free experience
                </span>
              </Benefits>
              <h3>The Procedure</h3>
              {[
                "Consultation",
                "Examination",
                "Treatment Plan",
                "Treatment",
              ].map((x, i) => (
                <Step key={x}>
                  <b>{i + 1}</b>
                  <div>
                    <strong>{x}</strong>
                    <small>
                      {i === 0
                        ? "We discuss your dental history and concerns"
                        : i === 1
                          ? "Thorough examination including digital X-rays"
                          : i === 2
                            ? "Personalized plan tailored to your needs"
                            : "Gentle, efficient procedures with modern equipment"}
                    </small>
                  </div>
                </Step>
              ))}
            </Content>
            <Side>
              <Box>
                <p>Starting from</p>
                <div className="price">{service.price}</div>
                <p>
                  Final price depends on your specific treatment plan. Book a
                  consultation for an accurate estimate.
                </p>
                <Button as={Link} to="/book">
                  <FiCalendar /> Book Now
                </Button>
              </Box>
              <Box>
                <h3>Other Services</h3>
                {services
                  .filter((s) => s.slug !== service.slug)
                  .map((s) => (
                    <Link key={s.slug} to={`/services/${s.slug}`}>
                      {s.title}
                    </Link>
                  ))}
              </Box>
            </Side>
          </Layout>
        </Container>
      </Section>
    </Page>
  );
}
export default ServiceDetail;
