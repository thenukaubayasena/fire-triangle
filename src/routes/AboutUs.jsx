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
  FaUserShield,
  FaPhoneAlt,
  FaFirstAid,
  FaCar,
  FaGraduationCap
} from "react-icons/fa";
import { 
  MdEngineering, 
  MdSafetyDivider,
  MdGppGood,
  MdWorkspacePremium,
  MdBusiness,
  MdSecurity
} from "react-icons/md";
import { GiFireflake, GiSiren } from "react-icons/gi";
import { RiFireFill } from "react-icons/ri";
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
    description: "Values must be demonstrated in the way you act and the way you insist others behave. Fire Triangle has integrity, no team member or customer can compromise it."
  },
  {
    icon: <FaHandshake />,
    title: "Pride",
    description: "Pride in work and general company ethics. Craftsmanship, that I feel good about my services rendered...to meet or exceed NFPA and IFE (UK) standards."
  },
  {
    icon: <FaLightbulb />,
    title: "Knowledge",
    description: "Commitment to enhancing job knowledge. Fire Triangle team members are the professionals in this field, we are not afraid of doing the homework to complete a job correctly."
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

// Training programs data
const trainingPrograms = [
  {
    icon: <FaFirstAid />,
    title: "First Aid & CPR Training",
    description: "Essential training for staff and technical personnel"
  },
  {
    icon: <FaFireExtinguisher />,
    title: "Fire Protection Technician Training",
    description: "Comprehensive program for technical staff"
  },
  {
    icon: <FaGraduationCap />,
    title: "Industry Seminars",
    description: "External seminars to stay updated with industry standards"
  },
  {
    icon: <FaCar />,
    title: "Fleet Safety Program",
    description: "Specialized training for our mobile workforce"
  }
];

// Risk management services
const riskServices = [
  {
    icon: <MdSecurity />,
    title: "Fire & Security Risk Assessment",
    description: "Meeting international good practice standards"
  },
  {
    icon: <MdBusiness />,
    title: "Building Performance Assessment",
    description: "Identifying adequacy against fire spread"
  },
  {
    icon: <GiSiren />,
    title: "Business Protection & Continuity",
    description: "Assessing fire incident impact on operations"
  },
  {
    icon: <RiFireFill />,
    title: "Fire Safety Planning",
    description: "Preparing and reviewing fire safety provisions"
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
            Sri Lanka's Leading Fire Safety Specialists Since 2005
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <CertificationBadge>
              <FaAward /> IFE(UK) Certified Professionals
            </CertificationBadge>
          </motion.div>
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
            <p>Fire Triangle team members were asked to provide management with their input to establish our core values. These values form the cornerstone of our philosophy and guide everything we do.</p>
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
          <SectionHeader>
            <h2>Our Expert Team</h2>
            <p>Our technicians and staff are among the finest and most qualified IFE(UK) professionals in the industry.</p>
          </SectionHeader>
          
          <TeamCard
            whileHover={{ y: -5 }}
          >
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
          </TeamCard>
        </TeamSection>

        <TrainingSection>
          <SectionHeader>
            <h2>Staff Training & Development</h2>
            <p>We maintain a comprehensive safety program for all employees to ensure the highest standards of service.</p>
          </SectionHeader>
          
          <TrainingGrid>
            {trainingPrograms.map((program, index) => (
              <TrainingCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <TrainingIcon>{program.icon}</TrainingIcon>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
              </TrainingCard>
            ))}
          </TrainingGrid>
        </TrainingSection>

        <RiskManagementSection>
          <SectionHeader>
            <h2>Risk Management Services</h2>
            <p>Through our risk management and training subsidiary, we provide comprehensive safety assessments and planning.</p>
          </SectionHeader>
          
          <ServicesGrid>
            {riskServices.map((service, index) => (
              <ServiceCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <ServiceIcon>{service.icon}</ServiceIcon>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </RiskManagementSection>

        <ClientsSection>
          <SectionHeader>
            <h2>Our Esteemed Clients</h2>
            <p>We're proud to have served some of Sri Lanka's most prestigious organizations</p>
          </SectionHeader>
          
          <ClientLogos>
            <ClientLogo>Rockland (Pvt) Ltd</ClientLogo>
            <ClientLogo>Brandix (Pvt) Ltd</ClientLogo>
            <ClientLogo>Litro Gas</ClientLogo>
            <ClientLogo>President House</ClientLogo>
            <ClientLogo>Earl's Regency Hotel</ClientLogo>
            <ClientLogo>District General Hospital, Monaragala</ClientLogo>
            <ClientLogo>National Water Supply Board, Badulla</ClientLogo>
            <ClientLogo>Udarata Development Authority</ClientLogo>
            <ClientLogo>Hela Clothing (Pvt) Ltd</ClientLogo>
            <ClientLogo>Pradeshiya Sabawa, Bulathkohupitiya</ClientLogo>
          </ClientLogos>
        </ClientsSection>
      </ContentSection>
    </AboutContainer>
  );
};

// Styled Components
const AboutContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  color: #333;
  width: 100%;
  overflow-x: hidden;
`;

const HeroSection = styled.section`
  position: relative;
  height: 65vh;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
              url(${aboutBg});
  background-size: cover;
  background-position: center;
  padding: 0 2rem;
  opacity: 0.9;

  @media (max-width: 768px) {
    height: 70vh;
    min-height: 400px;
  }
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
    font-size: clamp(2rem, 5vw, 3.5rem);
    margin-bottom: 1.5rem;
    font-weight: 700;
    line-height: 1.2;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
  }

  p {
    font-size: clamp(1rem, 2vw, 1.3rem);
    opacity: 0.9;
    margin-bottom: 1.5rem;
    font-weight: 300;
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1.1rem;
    }
  }
`;

const CertificationBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 215, 0, 0.2);
  color: #ffd700;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  margin-top: 1rem;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 215, 0, 0.3);

  svg {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.6rem 1.2rem;
  }
`;

const ContentSection = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    font-size: clamp(1.5rem, 3vw, 2.2rem);
    color: #d32f2f;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  p {
    color: #666;
    font-size: 1.1rem;
    max-width: 700px;
    margin: 0 auto;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const HorizontalSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const SectionCard = styled(motion.div)`
  background: white;
  padding: 2rem;
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
    font-size: 1.3rem;
  }

  p {
    color: #555;
    line-height: 1.8;
    margin-bottom: 1rem;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const IconWrapper = styled.div`
  color: #d32f2f;
  font-size: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const ValuesSection = styled.section`
  margin: 5rem 0;

  @media (max-width: 768px) {
    margin: 4rem 0;
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled(motion.div)`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: all 0.3s ease;
  border-bottom: 3px solid #d32f2f;

  h3 {
    color: #222;
    margin: 1rem 0;
    font-size: 1.2rem;
    font-weight: 600;
  }

  p {
    color: #666;
    line-height: 1.7;
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

const ValueIcon = styled.div`
  font-size: 2rem;
  color: #d32f2f;
  margin-bottom: 0.5rem;
`;

const TeamSection = styled.section`
  margin: 5rem 0;

  @media (max-width: 768px) {
    margin: 4rem 0;
  }
`;

const TeamCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TeamItem = styled(motion.div)`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid #eee;

  svg {
    font-size: 2rem;
    color: #d32f2f;
    margin-bottom: 1rem;
  }

  span {
    display: block;
    font-weight: 600;
    color: #222;
    font-size: 1rem;
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
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 2rem;

  h4 {
    color: #d32f2f;
    font-size: 1.1rem;
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
    margin-bottom: 0.8rem;
    color: #555;
    line-height: 1.7;

    svg {
      color: #d32f2f;
      margin-right: 0.8rem;
      font-size: 1.1rem;
      margin-top: 0.2rem;
    }

    span {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 768px) {
    padding: 1.2rem;
  }
`;

const TrainingSection = styled.section`
  margin: 5rem 0;

  @media (max-width: 768px) {
    margin: 4rem 0;
  }
`;

const TrainingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TrainingCard = styled(motion.div)`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: all 0.3s ease;
  border-left: 3px solid #d32f2f;

  h3 {
    color: #222;
    margin: 1rem 0;
    font-size: 1.1rem;
    font-weight: 600;
  }

  p {
    color: #666;
    line-height: 1.6;
    font-size: 0.9rem;
  }
`;

const TrainingIcon = styled.div`
  font-size: 2rem;
  color: #d32f2f;
  margin-bottom: 0.5rem;
`;

const RiskManagementSection = styled.section`
  margin: 5rem 0;
  background: #f9f9f9;
  padding: 3rem 2rem;
  border-radius: 12px;

  @media (max-width: 768px) {
    margin: 4rem 0;
    padding: 2rem 1rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(motion.div)`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: all 0.3s ease;
  border-right: 3px solid #d32f2f;

  h3 {
    color: #222;
    margin: 1rem 0;
    font-size: 1.1rem;
    font-weight: 600;
  }

  p {
    color: #666;
    line-height: 1.6;
    font-size: 0.9rem;
  }
`;

const ServiceIcon = styled.div`
  font-size: 2rem;
  color: #d32f2f;
  margin-bottom: 0.5rem;
`;

const ClientsSection = styled.section`
  margin: 5rem 0;

  @media (max-width: 768px) {
    margin: 4rem 0;
  }
`;

const ClientLogos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
`;

const ClientLogo = styled.div`
  background: white;
  padding: 1.5rem 1rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  font-weight: 600;
  color: #333;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80px;
  border: 1px solid #eee;

  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 0.8rem;
    min-height: 70px;
  }
`;

export default AboutUs;