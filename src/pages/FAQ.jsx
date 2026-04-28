import React, { useState } from "react";
import styled from "styled-components";
import { FiChevronDown, FiPhone, FiCalendar } from "react-icons/fi";
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
import { images, faqs } from "../data/siteData";
import { Link } from "react-router-dom";

const List = styled.div`
  width: min(700px, 100%);
  margin: 0 auto;
  display: grid;
  gap: 12px;
`;
const Item = styled.div`
  border: 1px solid #d6e4ee;
  border-radius: 10px;
  background: #fff;
  overflow: hidden;
  button {
    width: 100%;
    border: 0;
    background: transparent;
    padding: 18px 20px;
    display: flex;
    justify-content: space-between;
    font-weight: 800;
    cursor: pointer;
  }
  p {
    margin: 0;
    padding: 0 20px 18px;
    color: #5a728d;
    line-height: 1.7;
    display: ${({ $open }) => ($open ? "block" : "none")};
  }
`;
const Help = styled.div`
  width: min(700px, 100%);
  margin: 70px auto 0;
  padding: 34px;
  border-radius: 14px;
  border: 1px solid #cce8f8;
  background: #eaf7fd;
  text-align: center;
  display: grid;
  gap: 14px;
  justify-items: center;
`;
function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <Page
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageHero $image={images.clinic}>
        <div>
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about our services</p>
        </div>
      </PageHero>
      <Section>
        <Container>
          <Center>
            <Eyebrow>Got Questions?</Eyebrow>
            <Heading>We've Got Answers</Heading>
            <Text>
              If you can't find what you're looking for, don't hesitate to
              contact us.
            </Text>
            <BlueLine />
          </Center>
          <List>
            {faqs.map((q, i) => (
              <Item key={q} $open={open === i}>
                <button onClick={() => setOpen(open === i ? -1 : i)}>
                  {q}
                  <FiChevronDown />
                </button>
                <p>
                  Most treatments are designed to be comfortable and pain-free.
                  During your consultation, our team will explain the process,
                  pricing, and the best option for your smile.
                </p>
              </Item>
            ))}
          </List>
          <Help>
            <Heading style={{ fontSize: "1.4rem" }}>
              Still Have Questions?
            </Heading>
            <Text>
              Our team is happy to help. Reach out and we'll get back to you as
              soon as possible.
            </Text>
            <div
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Button as={Link} to="/contact">
                <FiPhone /> Call Us
              </Button>
              <Button as={Link} to="/book">
                <FiCalendar /> Book Appointment
              </Button>
            </div>
          </Help>
        </Container>
      </Section>
    </Page>
  );
}
export default FAQ;
