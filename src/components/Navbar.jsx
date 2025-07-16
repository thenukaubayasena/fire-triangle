import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import { MdFireExtinguisher, MdSecurity, MdAssessment, MdSchool } from "react-icons/md";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Close mobile menu when navigating
    setIsOpen(false);
    
    // Set active tab based on pathname
    const path = location.pathname.split('/')[1] || 'home';
    setActiveTab(path);

    // Handle scroll effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <NavContainer $scrolled={scrolled}>
      <LogoContainer>
        <LogoLink to="/">
          <Logo src={logo} alt="Fire Triangle Logo" loading="lazy" />
          <CompanyName $scrolled={scrolled}>Fire Triangle</CompanyName>
        </LogoLink>
      </LogoContainer>

      <Hamburger onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </Hamburger>

      <NavMenu isOpen={isOpen}>
        <NavItem to="/" $isActive={activeTab === "home"}>
          Home
        </NavItem>
        <NavItem to="/about-us" $isActive={activeTab === "about-us"}>
          About Us
        </NavItem>
        <NavItem to="/services" $isActive={activeTab === "services"}>
          <MdFireExtinguisher /> Services
        </NavItem>
        <NavItem to="/products" $isActive={activeTab === "products"}>
          <MdSecurity /> Products
        </NavItem>
        <NavItem to="/projects" $isActive={activeTab === "projects"}>
          <MdAssessment /> Projects
        </NavItem>
        <NavItem to="/training" $isActive={activeTab === "training"}>
          <MdSchool /> Training
        </NavItem>
        
        <EmergencyContact href="tel:+94767565634">
          <FaPhoneAlt /> Emergency
        </EmergencyContact>
      </NavMenu>

      <Overlay isOpen={isOpen} onClick={toggleMenu} />
    </NavContainer>
  );
};

// Enhanced Styled Components
const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${props => props.$scrolled ? '70px' : '80px'};
  background: ${props => props.$scrolled ? 'rgba(42, 42, 42, 0.98)' : '#2a2a2a'};
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    height: 70px;
    padding: 0 1rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  z-index: 1001;
`;

const Logo = styled.img`
  height: ${props => props.$scrolled ? '35px' : '40px'};
  width: auto;
  transition: all 0.3s ease;
  filter: brightness(0) invert(1);

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    height: ${props => props.$scrolled ? '30px' : '35px'};
  }
`;

const CompanyName = styled.span`
  color: white;
  font-weight: 600;
  font-size: ${props => props.$scrolled ? '1.1rem' : '1.25rem'};
  transition: all 0.3s ease;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: ${props => props.$scrolled ? '1rem' : '1.1rem'};
  }

  @media (max-width: 480px) {
    display: ${props => props.$scrolled ? 'none' : 'block'};
  }
`;

const NavMenu = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: 992px) {
    gap: 1rem;
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: min(320px, 85%);
    height: 100vh;
    background: #2a2a2a;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 5rem;
    gap: 1.5rem;
    transition: right 0.3s ease-in-out;
    z-index: 1000;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
  }
`;

const NavItem = styled(Link)`
  position: relative;
  color: ${({ $isActive }) => ($isActive ? '#d32f2f' : 'white')};
  font-weight: ${({ $isActive }) => ($isActive ? '600' : '400')};
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;

  &:hover {
    color: #d32f2f;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${({ $isActive }) => ($isActive ? '100%' : '0')};
    height: 2px;
    background: #d32f2f;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  svg {
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0.75rem 1.5rem;
    width: 100%;
    justify-content: center;

    &::after {
      bottom: 5px;
    }
  }
`;

const EmergencyContact = styled.a`
  background: #d32f2f;
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  min-height: 40px;

  &:hover {
    background: #b71c1c;
    transform: translateY(-2px);
  }

  @media (max-width: 992px) {
    padding: 0.5rem 1rem;
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    width: auto;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Hamburger = styled.button`
  display: none;
  cursor: pointer;
  z-index: 1001;
  color: white;
  background: transparent;
  border: none;
  padding: 0.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;

  @media (min-width: 769px) {
    display: none;
  }
`;

export default Navbar;