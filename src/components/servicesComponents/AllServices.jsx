import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useAnimation, useInView } from "framer-motion";
import { 
  FaFireExtinguisher, 
  FaBell, 
  FaShower, 
  FaWind, 
  FaGasPump,
  FaShieldAlt,
  FaUserGraduate,
  FaChartLine,
  FaPhoneAlt
} from "react-icons/fa";
import { MdEngineering, MdSecurity } from "react-icons/md";
import servicesBg from "../../assets/services-bg.jpg";

const AllServices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    }
  }, [isInView, animation]);

  const services = [
    {
      id: 1,
      title: "Fire Detection Systems",
      icon: <FaBell />,
      description: "Conventional & Addressable Intelligent Fire Alarm Panels with advanced detection technology",
      features: [
        "Addressable Ionization Smoke Detectors",
        "Optical Smoke & Beam Detectors",
        "Heat & Multi-Sensor Detectors",
        "Flame & LPG Gas Detectors",
        "Manual Call Points & Alarm Bells"
      ],
      standards: "IFE(UK) & Sri Lankan Fire Department Approved"
    },
    {
      id: 2,
      title: "Fire Suppression Systems",
      icon: <FaShower />,
      description: "Advanced systems for diverse environments from server rooms to industrial facilities",
      features: [
        "Gaseous Systems (FM200, NAF 227ea, NAF S125)",
        "Inergen, Novec, Argonite Systems",
        "Foam & Water Based Systems",
        "Wet Chemical Kitchen Hood Systems",
        "Dry Mist & Tube Technology Systems"
      ],
      standards: "NFPA & BS EN Standards Compliant"
    },
    {
      id: 3,
      title: "Sprinkler Systems",
      icon: <FaWind />,
      description: "Comprehensive sprinkler solutions for all building types",
      features: [
        "BS EN 12845 & NFPA compliant designs",
        "Wet, Dry & Pre-action Systems",
        "Water Mist & Deluge Systems",
        "Hydraulic calculations using FHC software",
        "Hazard evaluation & water supply analysis"
      ],
      standards: "16 International Design Standards"
    },
    {
      id: 4,
      title: "Fire Extinguishers",
      icon: <FaFireExtinguisher />,
      description: "Complete range of certified fire extinguishers for all fire classes",
      features: [
        "ABC Dry Chemical Powder",
        "CO₂ & Clean Agent Extinguishers",
        "Water, Foam & Wet Chemical types",
        "Mechanical Foam & AFFF Foam",
        "Regular maintenance & refill services"
      ],
      standards: "ISI & KITE Marked"
    },
    {
      id: 5,
      title: "Aerosol Suppression",
      icon: <FaGasPump />,
      description: "Innovative non-pressurized suppression technology",
      features: [
        "No external electrical/pressure needed",
        "Suitable for A, B, C, F class fires",
        "Natural mineral coolant",
        "Minimal maintenance requirements",
        "Fail-safe activation system"
      ],
      standards: "International Fire Safety Standards"
    },
    {
      id: 6,
      title: "Security Systems",
      icon: <MdSecurity />,
      description: "Integrated fire and security solutions",
      features: [
        "CCTV with Perimeter Protection",
        "Intrusion Detection Systems",
        "Long Range Sirens",
        "Metal Detectors",
        "Integrated Alarm Systems"
      ],
      standards: "BSIA & SLS Standards"
    },
    {
      id: 7,
      title: "Risk Management",
      icon: <FaChartLine />,
      description: "Comprehensive fire safety assessments and planning",
      features: [
        "Fire & Security Risk Assessments",
        "Building Performance Evaluation",
        "Business Continuity Planning",
        "Premises Security Assessments",
        "Emergency Preparedness Plans"
      ],
      standards: "International Best Practices"
    },
    {
      id: 8,
      title: "Training Programs",
      icon: <FaUserGraduate />,
      description: "Certified fire safety education for organizations",
      features: [
        "First Aid Fire Safety Training",
        "Extinguisher Handling Demonstrations",
        "Health & Safety Law Compliance",
        "Risk Assessment Workshops",
        "Emergency Evacuation Drills"
      ],
      standards: "IFE(UK) Certified Curriculum"
    }
  ];

  return (
    <ServicesContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Fire Safety Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Comprehensive protection solutions since 2005
          </motion.p>
        </HeroContent>
      </HeroSection>

      {/* Main Content */}
      <MainContent ref={ref}>
        <IntroText
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Fire Triangle provides complete fire safety solutions combining cutting-edge technology with IFE(UK) certified expertise. 
          Our services are designed to meet international standards while addressing Sri Lanka's unique fire safety challenges.
        </IntroText>

        {/* Services Grid */}
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={animation}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              
              <FeaturesList>
                {service.features.map((feature, i) => (
                  <FeatureItem key={i}>
                    <FeatureIcon>✓</FeatureIcon>
                    {feature}
                  </FeatureItem>
                ))}
              </FeaturesList>
              
              <StandardsBadge>
                <FaShieldAlt /> {service.standards}
              </StandardsBadge>
            </ServiceCard>
          ))}
        </ServicesGrid>

        {/* Emergency CTA */}
        <EmergencyCTA
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3>Need Immediate Fire Safety Assistance?</h3>
          <p>Our emergency response team is available 24/7</p>
          <EmergencyButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FaPhoneAlt /> Call +94 11 234 5678
          </EmergencyButton>
        </EmergencyCTA>
      </MainContent>
    </ServicesContainer>
  );
};

// Styled Components
const ServicesContainer = styled.div`
  font-family: 'Arial', sans-serif;
  color: #333;
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
              url(${servicesBg});
  background-size: cover;
  background-position: center;
  padding: 0 3rem;
  opacity: 0.9;

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

const MainContent = styled(motion.div)`
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 2rem;

  @media (max-width: 1024px) {
    padding: 2.5rem 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0.8rem;
  }
`;

const IntroText = styled(motion.p)`
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.8;
  max-width: 900px;
  margin: 0 auto 3rem;
  color: #555;

  @media (min-width: 1200px) {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
    max-width: 95%;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.8rem;
  margin-bottom: 3rem;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    gap: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1.2rem;
  }
`;

const ServiceCard = styled(motion.div)`
  background: #fff;
  border-radius: 10px;
  padding: 1.8rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border-top: 4px solid #d32f2f;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

const ServiceIcon = styled.div`
  color: #d32f2f;
  font-size: 2.8rem;
  margin-bottom: 1.2rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2.2rem;
  }
`;

const ServiceTitle = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 1rem;
  color: #222;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const ServiceDescription = styled.p`
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.2rem;
  font-size: 1rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.2rem 0;
  flex-grow: 1;

  @media (max-width: 480px) {
    margin-bottom: 1rem;
  }
`;

const FeatureItem = styled.li`
  margin-bottom: 0.7rem;
  display: flex;
  align-items: flex-start;
  line-height: 1.5;
  color: #444;
  font-size: 0.95rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 0.6rem;
  }
`;

const FeatureIcon = styled.span`
  color: #d32f2f;
  font-weight: bold;
  margin-right: 0.5rem;
  font-size: 1rem;
`;

const StandardsBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #555;
  background: #f5f5f5;
  padding: 0.7rem;
  border-radius: 4px;
  margin-top: auto;

  svg {
    color: #d32f2f;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding: 0.6rem;
  }
`;

const EmergencyCTA = styled(motion.div)`
  background: #d32f2f;
  color: #fff;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;

  h3 {
    font-size: 1.7rem;
    margin-bottom: 0.5rem;
  }

  p {
    opacity: 0.9;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    h3 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1.2rem;
    h3 {
      font-size: 1.3rem;
    }
    p {
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }
  }
`;

const EmergencyButton = styled(motion.button)`
  background: #fff;
  color: #d32f2f;
  border: none;
  padding: 0.9rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  }

  svg {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.8rem;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.7rem 1.5rem;
    font-size: 0.9rem;
    svg {
      font-size: 1rem;
    }
  }
`;

export default AllServices;