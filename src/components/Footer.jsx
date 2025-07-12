import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png"; // Update with your logo
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
            <Logo src={logo} alt="Fire Triangle Logo" />
          </LogoContainer>
          <Tagline>Your Complete Fire Safety Solution in Sri Lanka</Tagline>
          <CertificationBadge>
            <FaShieldAlt /> ISO 9001 Certified
          </CertificationBadge>
        </CompanyInfo>

        <FooterContent>
          <QuickLinks>
            <SectionTitle>Our Services</SectionTitle>
            <FooterLink to="/fire-extinguishers">
              <FaFireExtinguisher /> Fire Extinguishers
            </FooterLink>
            <FooterLink to="/alarm-systems">
              <RiFireFill /> Alarm Systems
            </FooterLink>
            <FooterLink to="/sprinkler-systems">
              <RiFireFill /> Sprinkler Systems
            </FooterLink>
            <FooterLink to="/risk-assessments">
              <FaShieldAlt /> Risk Assessments
            </FooterLink>
            <FooterLink to="/training">
              <FaShieldAlt /> Safety Training
            </FooterLink>
          </QuickLinks>

          <ContactInfo>
            <SectionTitle>Contact Us</SectionTitle>
            <ContactItem>
              <ContactIcon>
                <FaMapMarkerAlt />
              </ContactIcon>
              <ContactText>123 Safety Avenue, Colombo, Sri Lanka</ContactText>
            </ContactItem>
            <ContactItem>
              <ContactIcon>
                <FaPhoneAlt />
              </ContactIcon>
              <ContactText>+94 11 234 5678 (24/7 Emergency)</ContactText>
            </ContactItem>
            <ContactItem>
              <ContactIcon>
                <IoMail />
              </ContactIcon>
              <ContactText>safety@firetriangle.lk</ContactText>
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
          <LegalLink to="/privacy-policy">Privacy Policy</LegalLink>
          <LegalLink to="/terms">Terms of Service</LegalLink>
          <LegalLink to="/sitemap">Sitemap</LegalLink>
        </LegalLinks>
      </FooterBottom>
    </FooterContainer>
  );
};

// Styled Components
const FooterContainer = styled.footer`
  background: #2a2a2a;
  color: white;
  padding: 3rem 5%;
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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const CompanyInfo = styled.div`
  flex: 1;
  min-width: 250px;
`;

const LogoContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const Logo = styled.img`
  max-width: 200px;
  height: auto;
  filter: brightness(0) invert(1);
`;

const Tagline = styled.p`
  color: #aaa;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
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
`;

const FooterContent = styled.div`
  display: flex;
  gap: 4rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 3rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  min-width: 200px;
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

  &:hover {
    color: #d32f2f;
    transform: translateX(5px);
  }

  svg {
    font-size: 0.9rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  min-width: 250px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ContactIcon = styled.div`
  color: #d32f2f;
  font-size: 1.1rem;
  margin-top: 0.2rem;
  flex-shrink: 0;
`;

const ContactText = styled.p`
  color: #aaa;
  font-weight: 300;
  margin: 0;
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 2rem auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
`;

const Copyright = styled.p`
  color: #777;
  font-weight: 300;
  font-size: 0.9rem;
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const LegalLink = styled(Link)`
  color: #aaa;
  font-size: 0.85rem;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #d32f2f;
    text-decoration: underline;
  }
`;

export default Footer;