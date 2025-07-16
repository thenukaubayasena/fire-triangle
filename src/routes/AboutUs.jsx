
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { 
  FaShieldAlt, 
  FaUsers, 
  FaHistory, 
  FaFireExtinguisher, 
  FaChartLine,
  FaAward,
  FaHandshake,
  FaLightbulb,
  FaUserShield
} from "react-icons/fa";
import { 
  MdEngineering, 
  MdSafetyDivider,
  MdGppGood,
  MdWorkspacePremium
} from "react-icons/md";
import { GiFireflake } from "react-icons/gi";
import aboutBg from "../assets/about/about-bg.jpg";

// Core values data with icons
const coreValues = [
  {
    icon: <FaShieldAlt />,
    title: "Safety",
    description: "Operate in a safe, but timely manner; never work in conditions you see as unsafe. For yourself, your team, and your customer."
  },
  {
    icon: <FaUserShield />,
    title: "Respect",
    description: "For team members, customers and the tools and equipment involved in the task at hand."
  },
  {
    icon: <MdWorkspacePremium />,
    title: "Integrity",
    description: "Values must be demonstrated in the way you act and the way you insist others behave. EF has integrity, no team member or customer can compromise it."
  },
  {
    icon: <FaHandshake />,
    title: "Pride",
    description: "Pride in work and general company ethics. Craftsmanship, that I feel good about my services rendered...to meet or exceed NFPA and IFE (UK) standards."
  },
  {
    icon: <FaLightbulb />,
    title: "Knowledge",
    description: "Commitment to enhancing job knowledge. EF team members are the professionals in this field, we are not afraid of doing the homework to complete a job correctly."
  },
  {
    icon: <MdEngineering />,
    title: "Initiative",
    description: "A workforce ready, willing, and able to meet new challenges...all members pull together for the good of the company."
  },
  {
    icon: <GiFireflake />,
    title: "Innovation",
    description: "Learn to adapt to change within a company, work with it, not against it, if a company is to grow, there must come changes. Look for new opportunities...don't become stagnant."
  }
];

const AboutUs = () => {
  return (
    <AboutContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroOverlay />
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
          <ScrollIndicator
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Scroll to explore
            <span></span>
          </ScrollIndicator>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        {/* Horizontal Vision, Mission, History Section */}
        <HorizontalSection>
          <SectionCard
            whileHover={{ y: -5 }}
          >
            <IconWrapper>
              <FaShieldAlt />
            </IconWrapper>
            <h3>Our Vision</h3>
            <p>
              "Our vision is to be the No 1 trusted leader in fire safety in Sri Lanka through 
              the development of technical staff excellence, establishing a high level of ethical 
              practice and working with our clients to meet their safety objectives and finally 
              providing advanced project and services using modern advanced equipment at the lowest cost."
            </p>
          </SectionCard>

          <SectionCard
            whileHover={{ y: -5 }}
          >
            <IconWrapper>
              <FaChartLine />
            </IconWrapper>
            <h3>Our Mission</h3>
            <p>
              "We are a professional firm in Sri Lanka providing Fire Protection Systems and 
              Fire Detection Systems. We encourage our team members' growth through personal 
              and professional development to enhance the sustained growth of our company. 
              We engage in active partnerships with our clients to provide the best service 
              with regular maintenance. And we are only satisfied with incident free outcomes."
            </p>
          </SectionCard>

          <SectionCard
            whileHover={{ y: -5 }}
          >
            <IconWrapper>
              <FaHistory />
            </IconWrapper>
            <h3>Our History</h3>
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
        </HorizontalSection>

        <ValuesSection>
          <SectionHeader>
            <h2>Our Core Values</h2>
            <p>Fire Triangle team members were asked to provide management with their input to establish our core values. Fire Triangle team members have developed core values using one word with a description of what each word means to them. Fire Triangle has made these the cornerstone of our philosophy.</p>
          </SectionHeader>
          <ValuesGrid>
            {coreValues.map((value, index) => (
              <ValueCard 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <ValueIcon>{value.icon}</ValueIcon>
                <h3>{value.title}</h3>
                <p>"{value.description}"</p>
              </ValueCard>
            ))}
          </ValuesGrid>
        </ValuesSection>

        <TeamSection>
          <SectionCard
            whileHover={{ y: -5 }}
          >
            <IconWrapper>
              <FaUsers />
            </IconWrapper>
            <SectionHeader>
              <h2>Our Staff</h2>
              <p>Our technicians and staff are among the finest and most qualified IFE(UK) in the industry. We perform frequent drug tests to maintain a 100% drug-free workplace and run background checks before we entrust them with your fire protection needs.</p>
            </SectionHeader>
            
            <TeamGrid>
              <TeamItem
                whileHover={{ scale: 1.05 }}
              >
                <MdEngineering />
                <span>Field Technicians/Field Specialists</span>
                <p>Must successfully complete the Institute of Fire Engineering IFE(UK) standards</p>
              </TeamItem>
              <TeamItem
                whileHover={{ scale: 1.05 }}
              >
                <FaFireExtinguisher />
                <span>Service Technicians</span>
                <p>Must successfully complete the Institute of Fire Engineering IFE(UK) standards</p>
              </TeamItem>
              <TeamItem
                whileHover={{ scale: 1.05 }}
              >
                <MdSafetyDivider />
                <span>Fire Alarm Technicians</span>
                <p>Must successfully complete the Institute of Fire Engineering IFE(UK) standards</p>
              </TeamItem>
            </TeamGrid>

            <TeamBackground>
              <h4>Fire Triangle staff consists of highly experienced ex-fire fighters from:</h4>
              <ul>
                <li>
                  <MdGppGood /> 
                  <span>Sri Lankan Fire Department</span>
                </li>
                <li>
                  <MdWorkspacePremium />
                  <span>Sri Lanka Air Force</span>
                </li>
                <li>
                  <GiFireflake />
                  <span>Sri Lanka Port Authority</span>
                </li>
              </ul>
            </TeamBackground>
          </SectionCard>
        </TeamSection>
      </ContentSection>
    </AboutContainer>
  );
};

// ... (Keep all the styled components exactly as they were in the previous code) ...


// Styled Components
const AboutContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  color: #333;
  width: 100%;
  overflow-x: hidden;
`;

const HeroSection = styled.section`
  position: relative;
  height: 80vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
              url(${aboutBg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 0 2rem;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(211, 47, 47, 0.2);
  z-index: 1;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1000px;
  color: white;

  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    margin-bottom: 1.5rem;
    font-weight: 700;
    line-height: 1.2;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
  }

  p {
    font-size: clamp(1.1rem, 2vw, 1.5rem);
    opacity: 0.9;
    margin-bottom: 2rem;
    font-weight: 300;
  }
`;

const ScrollIndicator = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.9rem;
  margin-top: 3rem;
  opacity: 0.8;

  span {
    display: block;
    width: 2px;
    height: 50px;
    background: white;
    margin-top: 0.5rem;
    animation: scrollPulse 2s infinite;

    @keyframes scrollPulse {
      0% { opacity: 1; height: 50px; }
      50% { opacity: 0.5; height: 30px; }
      100% { opacity: 1; height: 50px; }
    }
  }
`;

const ContentSection = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    color: #d32f2f;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  p {
    color: #666;
    font-size: 1.1rem;
    max-width: 700px;
    margin: 0 auto;
  }
`;

const HorizontalSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SectionCard = styled(motion.div)`
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  height: 100%;
  border-top: 5px solid #d32f2f;

  h2, h3 {
    color: #222;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    color: #555;
    line-height: 1.8;
    margin-bottom: 1rem;
    font-size: 1.05rem;
  }

  strong {
    color: #d32f2f;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const IconWrapper = styled.div`
  color: #d32f2f;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const TimelineItem = styled.div`
  position: relative;
  padding-left: 2rem;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.3rem;
    width: 12px;
    height: 12px;
    background: #d32f2f;
    border-radius: 50%;
  }

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    left: 5px;
    top: 1.5rem;
    width: 2px;
    height: calc(100% + 1rem);
    background: #d32f2f;
  }
`;

const Year = styled.span`
  display: block;
  font-weight: bold;
  color: #d32f2f;
  margin-bottom: 0.3rem;
`;

const ValuesSection = styled.section`
  margin: 6rem 0;

  @media (max-width: 768px) {
    margin: 4rem 0;
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ValueCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: all 0.3s ease;
  border-bottom: 3px solid #d32f2f;

  h3 {
    color: #222;
    margin: 1rem 0;
    font-size: 1.3rem;
    font-weight: 600;
  }

  p {
    color: #666;
    line-height: 1.7;
    font-size: 1rem;
  }
`;

const ValueIcon = styled.div`
  font-size: 2.5rem;
  color: #d32f2f;
  margin-bottom: 1rem;
`;

const TeamSection = styled.section`
  margin: 6rem 0;

  @media (max-width: 768px) {
    margin: 4rem 0;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 3rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TeamItem = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: all 0.3s ease;

  svg {
    font-size: 2.5rem;
    color: #d32f2f;
    margin-bottom: 1rem;
  }

  span {
    display: block;
    font-weight: 600;
    color: #222;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    font-size: 0.9rem;
    line-height: 1.6;
  }
`;

const TeamBackground = styled.div`
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 10px;
  margin-top: 2rem;

  h4 {
    color: #d32f2f;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    text-align: center;
    font-weight: 600;
  }

  ul {
    list-style: none;
    padding: 0;
    max-width: 800px;
    margin: 0 auto;
  }

  li {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1rem;
    color: #555;
    line-height: 1.7;

    svg {
      color: #d32f2f;
      margin-right: 1rem;
      font-size: 1.2rem;
      margin-top: 0.2rem;
    }
  }
`;

export default AboutUs;