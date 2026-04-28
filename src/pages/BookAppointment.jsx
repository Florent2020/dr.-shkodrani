import React from "react";
import styled from "styled-components";
import { FiCalendar, FiCheckCircle, FiClock, FiPhone } from "react-icons/fi";
import {
  Page,
  PageHero,
  Container,
  Section,
  Button,
} from "../components/shared";
import { images, services, clinic } from "../data/siteData";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.35fr 0.85fr;
  gap: 46px;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
const Form = styled.form`
  h2 {
    font-family: "Playfair Display", serif;
  }
  display: grid;
  gap: 20px;
`;
const Two = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;
const Field = styled.label`
  display: grid;
  gap: 8px;
  font-weight: 700;
  color: #07182c;
  input,
  select,
  textarea {
    width: 100%;
    border: 1px solid #d5e2ec;
    border-radius: 10px;
    padding: 15px;
    background: #fff;
    outline: none;
    color: #47637e;
  }
  textarea {
    min-height: 120px;
    resize: vertical;
  }
`;
const Side = styled.div`
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
  p {
    color: #58728c;
    display: flex;
    gap: 10px;
    align-items: center;
  }
  svg {
    color: #168bdc;
  }
`;
function BookAppointment() {
  return (
    <Page
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageHero $image={images.clinic}>
        <div>
          <h1>Book an Appointment</h1>
          <p>Schedule your visit in just a few clicks</p>
        </div>
      </PageHero>
      <Section>
        <Container>
          <Grid>
            <Form onSubmit={(e) => e.preventDefault()}>
              <h2>Fill in Your Details</h2>
              <Two>
                <Field>
                  Full Name *<input placeholder="Your full name" />
                </Field>
                <Field>
                  Phone Number *<input placeholder="+383 4X XXX XXX" />
                </Field>
              </Two>
              <Field>
                Email
                <input placeholder="your@email.com" />
              </Field>
              <Field>
                Service *
                <select>
                  <option>Select a service</option>
                  {services.map((s) => (
                    <option key={s.slug}>{s.title}</option>
                  ))}
                </select>
              </Field>
              <Two>
                <Field>
                  Preferred Date
                  <input type="date" />
                </Field>
                <Field>
                  Preferred Time
                  <select>
                    <option>Select time</option>
                    <option>08:00</option>
                    <option>10:00</option>
                    <option>13:00</option>
                    <option>16:00</option>
                  </select>
                </Field>
              </Two>
              <Field>
                Message (Optional)
                <textarea placeholder="Tell us about your concern..." />
              </Field>
              <Button as="button" type="submit">
                <FiCalendar /> Request Appointment
              </Button>
            </Form>
            <Side>
              <Box>
                <h3>Why Choose Us?</h3>
                {[
                  "Same-day appointments available",
                  "Pain-free treatments guaranteed",
                  "State-of-the-art equipment",
                  "Friendly, experienced team",
                  "Affordable pricing",
                ].map((x) => (
                  <p key={x}>
                    <FiCheckCircle /> {x}
                  </p>
                ))}
              </Box>
              <Box>
                <h3>Contact Info</h3>
                <p>
                  <FiPhone /> {clinic.phone}
                </p>
                <p>
                  <FiClock /> Mon – Fri: 8:00 AM – 7:00 PM
                  <br />
                  Sat: 9:00 AM – 3:00 PM
                </p>
              </Box>
            </Side>
          </Grid>
        </Container>
      </Section>
    </Page>
  );
}
export default BookAppointment;
