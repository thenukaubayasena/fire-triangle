import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaFireExtinguisher, FaShieldAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { RiFireFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTop>
        <CompanyInfo>
          <LogoContainer>
            <Logo src={logo} alt="Fire Triangle Logo" loading="lazy" />
          </LogoContainer>
          <Tagline>Your Complete Fire Safety Solution in Sri Lanka</Tagline>
          {/* <CertificationBadge>
            <FaShieldAlt /> ISO 9001 Certified
          </CertificationBadge> */}
        </CompanyInfo>

        <FooterContent>
          <QuickLinks>
            <SectionTitle>Our Services</SectionTitle>
            <FooterLink to="/services">
              <FaFireExtinguisher /> Fire Detection System
            </FooterLink>
            <FooterLink to="/services">
              <RiFireFill /> Fire Suppression System
            </FooterLink>
            <FooterLink to="/services">
              <RiFireFill /> Smoke and Natural Ventilation System
            </FooterLink>
            <FooterLink to="/services">
              <FaShieldAlt /> Fire Extinguishers
            </FooterLink>
            <FooterLink to="/services">
              <FaShieldAlt /> Security Management Systems
            </FooterLink>
          </QuickLinks>

          <ContactInfo>
            <SectionTitle>Contact Us</SectionTitle>
            <ContactItem>
              <ContactIcon>
                <FaMapMarkerAlt />
              </ContactIcon>
              <ContactText>No: 80/21 A, Madeiyawa Road, Kegalle</ContactText>
            </ContactItem>
            <ContactItem>
              <ContactIcon>
                <FaPhoneAlt />
              </ContactIcon>
              <ContactText>+94 35 223 0015<br />+94 76 756 5634 (24/7 Emergency)</ContactText>
            </ContactItem>
            <ContactItem>
              <ContactIcon>
                <IoMail />
              </ContactIcon>
              <ContactText>firetrianglekeg@gmail.com</ContactText>
            </ContactItem>
            <ContactItem>
              <ContactIcon>
                <FaClock />
              </ContactIcon>
              <ContactText>Mon-Sat: 8:00 AM - 5:00 PM</ContactText>
            </ContactItem>
          </ContactInfo>
        </FooterContent>
      </FooterTop>

      <FooterBottom>
        <Copyright>
          &copy; {new Date().getFullYear()} Fire Triangle (Pvt) Ltd. All rights reserved.
        </Copyright>
        <LegalLinks>
          <LegalLink>Privacy Policy</LegalLink>
          <LegalLink>Terms of Service</LegalLink>
          <LegalLink>Sitemap</LegalLink>
        </LegalLinks>
      </FooterBottom>
    </FooterContainer>
  );
};

// Enhanced Styled Components
const FooterContainer = styled.footer`
  background: #2a2a2a;
  color: white;
  padding: 3rem 5%;
  font-size: 1rem;

  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 900px) {
    gap: 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2.5rem;
  }
`;

const CompanyInfo = styled.div`
  flex: 1;
  min-width: 250px;
  max-width: 300px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const LogoContainer = styled.div`
  margin-bottom: 1.5rem;
  
  @media (max-width: 480px) {
    margin-bottom: 1rem;
  }
`;

const Logo = styled.img`
  max-width: 200px;
  height: auto;
  // filter: brightness(0) invert(1);
  
  @media (max-width: 480px) {
    max-width: 180px;
  }
`;

const Tagline = styled.p`
  color: #aaa;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const CertificationBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(211, 47, 47, 0.2);
  color: #d32f2f;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.9rem;
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding: 0.4rem 0.8rem;
  }
`;

const FooterContent = styled.div`
  display: flex;
  gap: 4rem;
  flex: 2;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    gap: 2rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    gap: 2rem;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 2.5rem;
  }
`;

const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  min-width: 200px;

  @media (max-width: 480px) {
    width: 100%;
    min-width: auto;
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 2px;
    background: #d32f2f;
  }

  @media (max-width: 768px) {
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 1.2rem;
  }
`;

const FooterLink = styled(Link)`
  color: #aaa;
  font-weight: 300;
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
  font-size: 0.95rem;
  min-height: 40px; // Better touch target

  &:hover {
    color: #d32f2f;
    transform: translateX(5px);
  }

  svg {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.4rem 0;
    justify-content: center;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  min-width: 250px;

  @media (max-width: 480px) {
    width: 100%;
    min-width: auto;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    justify-content: center;
    text-align: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
`;

const ContactIcon = styled.div`
  color: #d32f2f;
  font-size: 1.1rem;
  margin-top: 0.2rem;
  flex-shrink: 0;

  @media (max-width: 480px) {
    margin-top: 0;
  }
`;

const ContactText = styled.p`
  color: #aaa;
  font-weight: 300;
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    text-align: center;
  }
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 2rem auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  padding-top: 1.5rem;

  @media (max-width: 480px) {
    margin-top: 1.5rem;
    gap: 0.8rem;
  }
`;

const Copyright = styled.p`
  color: #777;
  font-weight: 300;
  font-size: 0.9rem;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 0.85rem;
    line-height: 1.5;
  }
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const LegalLink = styled(Link)`
  color: #aaa;
  font-size: 0.85rem;
  text-decoration: none;
  transition: color 0.3s ease;
  padding: 0.3rem 0;

  &:hover {
    color: #d32f2f;
    text-decoration: underline;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export default Footer;