import styled from "styled-components";
import { motion } from "framer-motion";

export const Page = styled(motion.main)`
  background: #f4f8fb;
`;

export const Container = styled.div`
  width: min(1120px, calc(100% - 44px));
  margin: 0 auto;
`;

export const Section = styled.section`
  padding: ${({ $compact }) => ($compact ? "70px 0" : "110px 0")};
`;

export const Eyebrow = styled.p`
  margin: 0 0 14px;
  color: #0f84dc;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.875rem;
  font-weight: 600;
`;

export const Title = styled.h1`
  margin: 0;
  font-family: "Playfair Display", serif;
  font-size: clamp(2.3rem, 5vw, 5.2rem);
  line-height: 0.98;
  color: ${({ $light }) => ($light ? "#fff" : "#061b31")};
`;

export const Heading = styled.h2`
  margin: 0;
  font-family: "Playfair Display", serif;
  /* font-size: clamp(2rem, 3.2vw, 3.2rem); */
  font-size: 2.25rem;
  line-height: 1.05;
  color: #061b31;
`;

export const Text = styled.p`
  color: #56708d;
  font-size: 1rem;
  line-height: 1.75;
`;

export const Center = styled.div`
  text-align: center;
  max-width: 680px;
  margin: 0 auto 54px;
`;

export const BlueLine = styled.span`
  display: block;
  width: 64px;
  height: 4px;
  border-radius: 99px;
  background: #168bdc;
  margin: 24px auto 0;
`;

export const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 12px;
  background: #178bd6;
  color: #fff;
  border: 1px solid #178bd6;
  min-height: 52px;
  padding: 0 28px;
  font-weight: 800;
  box-shadow: 0 12px 28px rgba(24, 139, 216, 0.25);
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const GhostButton = styled(Button)`
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.28);
  box-shadow: none;
`;

export const PageHero = styled.section`
  position: relative;
  min-height: 380px;
  display: grid;
  place-items: center;
  text-align: center;
  color: #fff;
  overflow: hidden;
  background:
    linear-gradient(90deg, rgba(6, 26, 46, 0.82), rgba(17, 139, 216, 0.52)),
    url(${({ $image }) => $image}) center/cover;

  h1 {
    margin: 0;
    font-family: "Playfair Display", serif;
    font-size: clamp(2.7rem, 3vw, 4.3rem);
    line-height: 1;
  }

  p {
    margin: 16px 0 0;
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`;
