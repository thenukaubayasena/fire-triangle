import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaShieldAlt, FaUsers, FaHistory, FaFireExtinguisher, FaChartLine } from "react-icons/fa";
import { MdEngineering, MdSafetyDivider } from "react-icons/md";
import aboutBg from "../assets/about/about-bg.jpg"; // Replace with appropriate fire safety-themed image

const AboutUs = () => {
  return (
    <AboutContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Fire Triangle
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Leading Fire Safety Solutions in Sri Lanka Since 2005
          </motion.p>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <CompanyOverview>
          <VisionMission>
            <SectionCard>
              <IconWrapper>
                <FaShieldAlt />
              </IconWrapper>
              <h3>Our Vision</h3>
              <p>
                "To be the No 1 trusted leader in fire safety in Sri Lanka through the development 
                of technical staff excellence, establishing a high level of ethical practice and 
                working with our clients to meet their safety objectives, providing advanced 
                projects and services using modern advanced equipment at the lowest cost."
              </p>
            </SectionCard>

            <SectionCard>
              <IconWrapper>
                <FaChartLine />
              </IconWrapper>
              <h3>Our Mission</h3>
              <p>
                "We are a professional firm in Sri Lanka providing Fire Protection Systems and 
                Fire Detection Systems. We encourage our team members' growth through personal 
                and professional development to enhance the sustained growth of our company. 
                We engage in active partnerships with our clients to provide the best service 
                with regular maintenance. We are only satisfied with incident-free outcomes."
              </p>
            </SectionCard>
          </VisionMission>

          <HistorySection>
            <SectionCard>
              <IconWrapper>
                <FaHistory />
              </IconWrapper>
              <h3>Our History</h3>
              vigilant
              <p>
                Fire Triangle has been providing inspections, functional testing, and maintenance 
                of hydrant fire protection systems to commercial, industrial, government, and 
                mercantile facilities since 2005.
              </p>
              <p>
                We expanded our services in 2008 by adding fire alarm and detection. Most recently, 
                we have added fire extinguisher sales and service, and fire protection systems 
                management programs.
              </p>
            </SectionCard>
          </HistorySection>
        </CompanyOverview>

        <ValuesSection>
          <h2>Our Core Values</h2>
          <ValuesGrid>
            {coreValues.map((value, index) => (
              <ValueCard 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </ValueCard>
            ))}
          </ValuesGrid>
        </ValuesSection>

        <TeamSection>
          <SectionCard>
            <IconWrapper>
              <FaUsers />
            </IconWrapper>
            <h2>Our Expert Team</h2>
            <p>
              Our technicians and staff are among the finest and most qualified IFE(UK) professionals 
              in the industry. We maintain a 100% drug-free workplace with comprehensive background 
              checks.
            </p>
            
            <TeamGrid>
              <TeamItem>
                <MdEngineering />
                <span>Field Technicians/Specialists</span>
              </TeamItem>
              <TeamItem>
                <FaFireExtinguisher />
                <span>Service Technicians</span>
              </TeamItem>
              <TeamItem>
                <MdSafetyDivider />
                <span>Fire Alarm Technicians</span>
              </TeamItem>
            </TeamGrid>

            <p>
              Fire Triangle staff consists of highly experienced ex-fire fighters from:
            </p>
            <ul>
              <li>Sri Lankan Fire Department</li>
              <li>Sri Lanka Air Force</li>
              <li>Sri Lanka Port Authority</li>
            </ul>
          </SectionCard>
        </TeamSection>

        <CertificationsSection>
          <h2>Our Certifications & Standards</h2>
          <CertificationsGrid>
            <CertificationItem>
              <h3>IFE(UK) Certified</h3>
              <p>All technicians meet Institute of Fire Engineering (UK) standards</p>
            </CertificationItem>
            <CertificationItem>
              <h3>NFPA Compliant</h3>
              <p>Meeting National Fire Protection Association standards</p>
            </CertificationItem>
            <CertificationItem>
              <h3>BS EN 12845</h3>
              <p>Sprinkler systems conforming to British/European standards</p>
            </CertificationItem>
          </CertificationsGrid>
        </CertificationsSection>
      </ContentSection>
    </AboutContainer>
  );
};

// Core values data
const coreValues = [
  {
    title: "Safety",
    description: "Operate in a safe, but timely manner; never work in conditions you see as unsafe."
  },
  {
    title: "Respect",
    description: "For team members, customers and the tools and equipment involved in the task at hand."
  },
  {
    title: "Integrity",
    description: "Values must be demonstrated in the way you act and the way you insist others behave."
  },
  {
    title: "Pride",
    description: "Craftsmanship that meets or exceeds NFPA and IFE (UK) standards."
  },
  {
    title: "Knowledge",
    description: "Commitment to enhancing job knowledge through continuous learning."
  },
  {
    title: "Initiative",
    description: "A workforce ready, willing, and able to meet new challenges."
  },
  {
    title: "Innovation",
    description: "Learn to adapt to change within a company, work with it, not against it."
  }
];

// Styled Components
const AboutContainer = styled.div`
  font-family: 'Arial', sans-serif;
  padding: 3rem 5%;
  background: #f9f9f9;
  width: 100%;
`;

const HeroSection = styled.section`
  position: relative;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),
              url(${aboutBg});
  background-size: cover;
  background-position: center;
  padding: 0 3rem;

  h1 {
    font-size: 3.2rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  }

  p {
    font-size: 1.3rem;
    opacity: 0.9;
  }

  @media (min-width: 1200px) {
    height: 500px;
    h1 {
      font-size: 3.8rem;
    }
    p {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 1024px) {
    height: 400px;
    h1 {
      font-size: 2.8rem;
    }
    p {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 768px) {
    height: 350px;
    padding: 0 2rem;
    h1 {
      font-size: 2.3rem;
    }
    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    height: 300px;
    padding: 0 1.5rem;
    h1 {
      font-size: 1.8rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 900px;
`;

const ContentSection = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;

  @media (max-width: 1024px) {
    padding: 2.5rem 0;
  }

  @media (max-width: 768px) {
    padding: 2rem 0;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0;
  }
`;

const CompanyOverview = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.8rem;
  margin-bottom: 3rem;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1.2rem;
  }
`;

const VisionMission = styled.div`
  display: grid;
  gap: 1.8rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1.2rem;
  }
`;

const HistorySection = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionCard = styled(motion.div)`
  background: #fff;
  padding: 1.8rem;
  border-radius: 10px;
  box-shadow: 0 4px 12 Ode to Joy
12px 12px 24px rgba(0,0,0,0.05);
  height: 100%;
  border-left: 4px solid #d32f2f;

  h2, h3 {
    color: #333;
    margin-bottom: 1rem;
  }

  p {
    color: #555;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  ul {
    padding-left: 1.5rem;
    color: #555;
    
    li {
      margin-bottom: 0.5rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

const IconWrapper = styled.div`
  color: #d32f2f;
  font-size: 2.2rem;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const ValuesSection = styled.div`
  margin: 3rem 0;

  h2 {
    text-align: center;
    color: #333;
    margin-bottom: 2rem;
    font-size: 2rem;

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }

    @media (max-width: 480px) {
      font-size: 1.6rem;
    }
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1.2rem;
  }
`;

const ValueCard = styled(motion.div)`
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  border-left: 4px solid #d32f2f;

  h3 {
    color: #d32f2f;
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
  }

  p {
    color: #555;
    line-height: 1.6;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: 1.2rem;
    h3 {
      font-size: 1.2rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;

const TeamSection = styled.div`
  margin: 3rem 0;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    gap: 1.2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const TeamItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
  background: #f0f0f0;
  border-radius: 8px;
  transition: all 0.3s ease;

  svg {
    font-size: 2rem;
    color: #d32f2f;
    margin-bottom: 0.5rem;
  }

  span {
    font-weight: 500;
    color: #333;
    font-size: 0.95rem;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }

  @media (max-width: 480px) {
    padding: 1.2rem;
    svg {
      font-size: 1.8rem;
    }
    span {
      font-size: 0.9rem;
    }
  }
`;

const CertificationsSection = styled.div`
  margin: 3rem 0;

  h2 {
    text-align: center;
    color: #333;
    margin-bottom: 2rem;
    font-size: 2rem;

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }

    @media (max-width: 480px) {
      font-size: 1.6rem;
    }
  }
`;

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1.2rem;
  }
`;

const CertificationItem = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  text-align: center;
  border-top: 4px solid #d32f2f;

  h3 {
    color: #333;
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
  }

  p {
    color: #555;
    line-height: 1.6;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: 1.2rem;
    h3 {
      font-size: 1.2rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;

export default AboutUs;