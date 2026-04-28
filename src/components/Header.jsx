import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { FiCalendar, FiMenu, FiPhone, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";
import { clinic } from "../data/siteData";

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70);
    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <HeaderWrap $scrolled={scrolled}>
      <Inner $scrolled={scrolled}>
        {!scrolled && (
          <Top>
            <span>
              <FiPhone /> {clinic.phone}
            </span>
            <span>{clinic.hoursShort}</span>
          </Top>
        )}

        <Bar>
          <Brand to="/" onClick={close} $scrolled={scrolled}>
            <Logo
              src={logo}
              alt="Klinika Dentare Dr. Shkodrani"
              $scrolled={scrolled}
            />
            <LogoText $scrolled={scrolled}>
              Klinika Dentare <br /> Dr. Shkodrani
            </LogoText>
          </Brand>

          <DesktopNav $scrolled={scrolled}>
            <NavLink to="/" onClick={close}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={close}>
              About
            </NavLink>
            <NavLink to="/services" onClick={close}>
              Services
            </NavLink>
            <NavLink to="/reviews" onClick={close}>
              Reviews
            </NavLink>
            <NavLink to="/faq" onClick={close}>
              FAQ
            </NavLink>
            <NavLink to="/contact" onClick={close}>
              Contact
            </NavLink>
            <Book to="/book" onClick={close}>
              <FiCalendar /> Book Appointment
            </Book>
          </DesktopNav>

          <MenuButton
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            $scrolled={scrolled}
          >
            <FiMenu size={22} />
          </MenuButton>
        </Bar>
      </Inner>

      <MobileOverlay $open={open}>
        <MobilePanel $open={open}>
          <MobileTop>
            <MobileBrand to="/" onClick={close}>
              <img src={logo} alt="Klinika Dentare Dr. Shkodrani" />
              <span>
                Klinika Dentare <br /> Dr. Shkodrani
              </span>
            </MobileBrand>

            <CloseButton type="button" onClick={close} aria-label="Close menu">
              <FiX size={24} />
            </CloseButton>
          </MobileTop>

          <MobileLinks>
            <NavLink to="/" onClick={close}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={close}>
              About
            </NavLink>
            <NavLink to="/services" onClick={close}>
              Services
            </NavLink>
            <NavLink to="/reviews" onClick={close}>
              Reviews
            </NavLink>
            <NavLink to="/faq" onClick={close}>
              FAQ
            </NavLink>
            <NavLink to="/contact" onClick={close}>
              Contact
            </NavLink>

            <MobileBook to="/book" onClick={close}>
              <FiCalendar /> Book Appointment
            </MobileBook>
          </MobileLinks>
        </MobilePanel>
      </MobileOverlay>
    </HeaderWrap>
  );
}

export default Header;

const HeaderWrap = styled.header`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  color: ${({ $scrolled }) => ($scrolled ? "#10263a" : "#fff")};
  background: ${({ $scrolled }) =>
    $scrolled ? "rgba(255,255,255,.96)" : "transparent"};
  box-shadow: ${({ $scrolled }) =>
    $scrolled ? "0 8px 30px rgba(8,28,48,.08)" : "none"};
  backdrop-filter: blur(18px);
  transition: 0.25s ease;
`;

const Inner = styled.div`
  width: min(1120px, calc(100% - 44px));
  margin: 0 auto;
  padding: ${({ $scrolled }) => ($scrolled ? "8px 0" : "14px 0 18px")};
  transition: 0.25s ease;

  @media (max-width: 900px) {
    width: min(100% - 36px, 1120px);
    padding: 18px 0;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  font-weight: 800;
  opacity: 0.9;
  margin-bottom: 16px;

  span {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  @media (max-width: 760px) {
    display: none;
  }
`;

const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
`;

const Brand = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
`;

const Logo = styled.img`
  width: 58px;
  height: 58px;
  object-fit: contain;
  display: block;
  filter: ${({ $scrolled }) =>
    $scrolled ? "none" : "drop-shadow(0 3px 8px rgba(0,0,0,.35))"};

  @media (max-width: 520px) {
    width: 52px;
    height: 52px;
  }
`;

const LogoText = styled.span`
  font-family: "Playfair Display", serif;
  font-size: 1rem;
  line-height: 1.08;
  opacity: 1;
  font-weight: 700;
  letter-spacing: 0.4px;
  color: ${({ $scrolled }) => ($scrolled ? "#153c52" : "#fff")};
  transition: color 0.25s ease;

  @media (max-width: 420px) {
    font-size: 0.95rem;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 12px;

  a {
    padding: 12px 15px;
    border-radius: 13px;
    color: inherit;
    opacity: 0.88;
    font-weight: 700;
    font-size: 0.98rem;
    text-decoration: none;
  }

  a.active,
  a:hover {
    opacity: 1;
    background: ${({ $scrolled }) =>
      $scrolled ? "#eef7fe" : "rgba(255,255,255,.17)"};
    color: ${({ $scrolled }) => ($scrolled ? "#158bd8" : "#fff")};
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const Book = styled(NavLink)`
  background: #1d91dd !important;
  color: #fff !important;
  padding: 15px 24px !important;
  box-shadow: 0 16px 36px rgba(29, 145, 221, 0.3);
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 10px;
  }
`;

const MenuButton = styled.button`
  display: none;
  width: 44px;
  height: 44px;
  border: 0;
  border-radius: 12px;
  color: ${({ $scrolled }) => ($scrolled ? "#10263a" : "#fff")};
  background: ${({ $scrolled }) =>
    $scrolled ? "#eef7fe" : "rgba(255,255,255,.16)"};
  cursor: pointer;

  @media (max-width: 900px) {
    display: grid;
    place-items: center;
  }
`;

const MobileOverlay = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: block;
    position: fixed;
    inset: 0;
    z-index: 200;
    background: rgba(5, 20, 34, 0.36);
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
    transition: opacity 0.35s ease;
  }
`;

const MobilePanel = styled.div`
  min-height: 100vh;
  background: rgba(255, 255, 255, 0.97);
  backdrop-filter: blur(20px);
  padding: 24px 24px 38px;
  transform: ${({ $open }) => ($open ? "translateY(0)" : "translateY(-100%)")};
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
  box-shadow: 0 24px 60px rgba(8, 28, 48, 0.18);
`;

const MobileTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 56px;
`;

const MobileBrand = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;

  img {
    width: 58px;
    height: 58px;
    object-fit: contain;
  }

  span {
    font-family: "Playfair Display", serif;
    font-size: 1.05rem;
    line-height: 1.08;
    font-weight: 800;
    color: #153c52;
  }
`;

const CloseButton = styled.button`
  width: 48px;
  height: 48px;
  border: 0;
  border-radius: 14px;
  background: #eaf6ff;
  color: #153c52;
  display: grid;
  place-items: center;
  cursor: pointer;
`;

const MobileLinks = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;

  a {
    font-size: 1.08rem;
    font-weight: 700;
    color: #153c52;
    text-decoration: none;
  }

  a.active {
    color: #158bd8;
  }
`;

const MobileBook = styled(NavLink)`
  margin-top: 8px;
  background: #1d91dd !important;
  color: #fff !important;
  padding: 16px 28px;
  border-radius: 14px;
  box-shadow: 0 16px 36px rgba(29, 145, 221, 0.28);
  display: inline-flex;
  align-items: center;
  gap: 10px;
`;
