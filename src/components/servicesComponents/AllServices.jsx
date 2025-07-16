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
  FaPhoneAlt,
  FaCheck,
  FaTools,
  FaWater,
  FaFire,
  FaCloud
} from "react-icons/fa";
import { MdEngineering, MdSecurity, MdDesignServices } from "react-icons/md";
import { GiSpray, GiChemicalDrop, GiGasMask } from "react-icons/gi";
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
      description: "Complete range of conventional and addressable intelligent fire alarm systems approved by IFE(UK) and Sri Lankan Fire Department",
      features: [
        "Conventional & Addressable Intelligent Fire Alarm Panels",
        "Workstations with advanced monitoring capabilities",
        "Addressable Ionization Smoke Detectors",
        "Optical Smoke Detectors & Beam Detectors",
        "Heat Detectors & Multi-Sensor Detectors",
        "Flame Detectors & Video Detection",
        "LPG & H2S Gas Detectors",
        "Manual Call Points & Alarm Bells/Sounders",
        "Water Leak Detection Systems"
      ],
      standards: "IFE(UK) & Sri Lankan Fire Department Approved",
      brands: ["Gentex Corporation", "Bristol", "Klaxon", "AIM/Sense Series"]
    },
    {
      id: 2,
      title: "Fire Suppression Systems",
      icon: <FaShower />,
      description: "Specialist fire suppression solutions for diverse environments from server rooms to industrial kitchens",
      features: [
        "Gaseous Systems (FM200, NAF 227ea, NAF S125)",
        "Inergen, Novec, Argonite, Argon Systems",
        "Foam Based Fire Suppression Systems",
        "Water Based Systems (Mist, Hydrants, Sprinklers)",
        "Wet Chemical Kitchen Hood Systems",
        "Dry Mist Suppression Systems (Patented Technology)",
        "Tube Technology Suppression Systems",
        "Deluge Systems for high-risk areas",
        "Pre-engineered & engineered solutions"
      ],
      standards: "NFPA, BS EN & FM Global Standards",
      brands: ["NAF", "FirePro", "Kidde", "Ansul"]
    },
    {
      id: 3,
      title: "Sprinkler Systems",
      icon: <FaWater />,
      description: "Comprehensive sprinkler system design and installation conforming to BS EN 12845 and NFPA regulations",
      features: [
        "Wet, Dry & Pre-action Sprinkler Systems",
        "Water Mist & Medium Velocity Spray Systems",
        "Hydraulic calculations using FHC software",
        "Compliance with 16 international standards",
        "Hazard evaluation & classification",
        "Water supply adequacy assessment",
        "Foam/Water Monitor Systems",
        "Regular testing & commissioning"
      ],
      standards: "BS EN 12845, NFPA, FM Global Certified",
      brands: ["Tyco", "Viking", "Reliable", "Grundfos"]
    },
    {
      id: 4,
      title: "Fire Extinguishers",
      icon: <FaFireExtinguisher />,
      description: "Complete range of certified fire extinguishers for all fire classes with regular maintenance services",
      features: [
        "Ozone Friendly Clean Agent Extinguishers",
        "ISI & KITE Marked ABC Dry Chemical Powder",
        "Carbon Dioxide (CO₂) Extinguishers",
        "Water Type & Wet Chemical Extinguishers",
        "Mechanical Foam & AFFF Foam Systems",
        "Water Mist Technology Extinguishers",
        "Regular inspection & maintenance programs",
        "Correct placement & installation services",
        "Staff training on proper usage"
      ],
      standards: "ISI, KITE & Sri Lankan Fire Department Approved",
      brands: ["Amerex", "Buckeye", "Badger", "Fire Fighter"]
    },
    {
      id: 5,
      title: "Aerosol Suppression",
      icon: <GiChemicalDrop />,
      description: "Innovative non-pressurized suppression technology requiring minimal maintenance",
      features: [
        "Autonomous operation (no external power needed)",
        "Flexible & modular installation",
        "Non-pressurized containers for safety",
        "Space and weight saving solutions",
        "Electrical, thermal or manual activation",
        "Suitable for A, B, C, F class fires",
        "Natural mineral coolant (non-pyrotechnic)",
        "Built-in fail-safe activation system",
        "Long operation lifetime with stability"
      ],
      standards: "International Fire Safety Standards",
      brands: ["FirePro", "Stat-X", "Aerosol"]
    },
    {
      id: 6,
      title: "Smoke Ventilation",
      icon: <FaWind />,
      description: "Comprehensive smoke control systems for building safety compliance",
      features: [
        "Window Activators with Reliable Control Systems",
        "Automatic Opening Vents (AOVs)",
        "Mechanical Smoke Ventilation with Powered Fans",
        "Powered Extract Systems",
        "Natural Ventilation Solutions",
        "Integrated with Fire Alarm Systems",
        "BS 7346-4 Compliant Designs",
        "Regular Maintenance Contracts"
      ],
      standards: "BS 7346-4 & EN 12101 Standards",
      brands: ["Colt", "Swegon", "Gilberts", "Ventcroft"]
    },
    {
      id: 7,
      title: "Security Systems",
      icon: <MdSecurity />,
      description: "Integrated security solutions to complement fire safety systems",
      features: [
        "CCTV with Perimeter Protection",
        "Intrusion Detection & Alarm Systems",
        "Long Range Siren Systems",
        "Hand-held & Walk-through Metal Detectors",
        "Access Control Systems",
        "Integrated Alarm Monitoring",
        "24/7 Monitoring Services",
        "Security Risk Assessments"
      ],
      standards: "BSIA & SLS Standards Compliant",
      brands: ["Hikvision", "Dahua", "Bosch", "Honeywell"]
    },
    {
      id: 8,
      title: "Risk Management",
      icon: <FaChartLine />,
      description: "Comprehensive fire safety assessments and emergency planning services",
      features: [
        "Fire & Security Risk Assessments",
        "Building Performance Evaluation",
        "Business Continuity Planning",
        "Premises Security Assessments",
        "Fire Safety & Security Planning",
        "Emergency Preparedness Plans",
        "Compliance Audits",
        "Regulatory Guidance"
      ],
      standards: "International Best Practices",
      brands: []
    },
    {
      id: 9,
      title: "Training Programs",
      icon: <FaUserGraduate />,
      description: "Certified fire safety education for organizations of all sizes",
      features: [
        "First Aid Fire Safety Training",
        "Fire Extinguisher Handling Demonstrations",
        "Health & Safety Law Compliance",
        "Risk Assessment Workshops",
        "Emergency Evacuation Drills",
        "Fire Warden Training",
        "CPR & First Aid Certification",
        "Specialized Industrial Training"
      ],
      standards: "IFE(UK) Certified Curriculum",
      brands: []
    },
    {
      id: 10,
      title: "Design & Engineering",
      icon: <MdDesignServices />,
      description: "Professional fire protection system design and engineering services",
      features: [
        "Hydraulic Calculations",
        "System Design & Specification",
        "3D Modeling & BIM Integration",
        "Code Compliance Review",
        "Value Engineering",
        "Construction Documentation",
        "Shop Drawing Preparation",
        "Commissioning Support"
      ],
      standards: "NFPA, BS, FM Global Standards",
      brands: ["AutoCAD", "Revit", "HydraCAD"]
    }
  ];

  return (
    <ServicesContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroOverlay />
        <HeroContent>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Comprehensive Fire Safety Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Protecting Sri Lanka's businesses and homes since 2005
          </motion.p>
          <CertificationBadge
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <FaShieldAlt /> IFE(UK) Certified Professionals
          </CertificationBadge>
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
          Fire Triangle provides complete fire protection solutions combining cutting-edge technology with IFE(UK) certified expertise. 
          Our services meet international standards while addressing Sri Lanka's unique fire safety challenges through:
        </IntroText>

        <KeyFeatures>
          <Feature>
            <FaCheck /> 18+ Years of Industry Experience
          </Feature>
          <Feature>
            <FaTools /> Certified Maintenance Programs
          </Feature>
          <Feature>
            <FaUserGraduate /> IFE(UK) Trained Technicians
          </Feature>
          <Feature>
            <FaShieldAlt /> 24/7 Emergency Support
          </Feature>
        </KeyFeatures>

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
              // whileHover={{ y: -5 }}
            >
              <ServiceHeader>
                <ServiceIcon>{service.icon}</ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
              </ServiceHeader>
              
              <ServiceDescription>{service.description}</ServiceDescription>
              
              <FeaturesTitle>Key Features:</FeaturesTitle>
              <FeaturesList>
                {service.features.map((feature, i) => (
                  <FeatureItem key={i}>
                    <FeatureIcon><FaCheck /></FeatureIcon>
                    <FeatureText>{feature}</FeatureText>
                  </FeatureItem>
                ))}
              </FeaturesList>
              
              {service.brands.length > 0 && (
                <>
                  <BrandsTitle>Featured Brands:</BrandsTitle>
                  <BrandsList>
                    {service.brands.map((brand, i) => (
                      <BrandItem key={i}>{brand}</BrandItem>
                    ))}
                  </BrandsList>
                </>
              )}
              
              <StandardsBadge>
                <FaShieldAlt /> <span>{service.standards}</span>
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
          <EmergencyContent>
            <h3>24/7 Emergency Fire Safety Support</h3>
            <p>Our certified response team is always ready to assist</p>
            <EmergencyButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <FaPhoneAlt /> Call +94 76 756 5634
            </EmergencyButton>
          </EmergencyContent>
        </EmergencyCTA>
      </MainContent>
    </ServicesContainer>
  );
};

// Styled Components
const ServicesContainer = styled.div`
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
              url(${servicesBg});
  background-size: cover;
  background-position: center;
  padding: 0 2rem;
  opacity: 0.9;

  @media (max-width: 1024px) {
    height: 60vh;
    min-height: 400px;
  }

  @media (max-width: 768px) {
    height: 50vh;
    min-height: 350px;
  }

  @media (max-width: 480px) {
    height: 45vh;
    min-height: 300px;
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

const CertificationBadge = styled(motion.div)`
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

const MainContent = styled(motion.div)`
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem;

  @media (max-width: 1024px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 2.5rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 0.8rem;
  }
`;

const IntroText = styled(motion.p)`
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.8;
  max-width: 900px;
  margin: 0 auto 2rem;
  color: #555;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const KeyFeatures = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    gap: 1rem;
    margin-bottom: 2rem;
  }
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #f5f5f5;
  padding: 0.8rem 1.2rem;
  border-radius: 50px;
  font-weight: 500;
  color: #d32f2f;
  font-size: 0.95rem;

  svg {
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 0.6rem 1rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ServiceCard = styled(motion.div)`
  background: #fff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border-top: 5px solid #d32f2f;
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ServiceHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const ServiceIcon = styled.div`
  color: #d32f2f;
  font-size: 2.5rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ServiceTitle = styled.h2`
  font-size: 1.5rem;
  color: #222;
  font-weight: 600;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const ServiceDescription = styled.p`
  color: #555;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const FeaturesTitle = styled.h3`
  font-size: 1.1rem;
  color: #d32f2f;
  margin-bottom: 0.8rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
`;

const FeatureItem = styled.li`
  margin-bottom: 0.8rem;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  line-height: 1.6;
`;

const FeatureIcon = styled.div`
  color: #d32f2f;
  font-size: 0.8rem;
  margin-top: 0.2rem;
  flex-shrink: 0;
`;

const FeatureText = styled.span`
  color: #444;
  font-size: 0.95rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const BrandsTitle = styled(FeaturesTitle)`
  margin-top: 1rem;
`;

const BrandsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const BrandItem = styled.div`
  background: #f5f5f5;
  color: #555;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const StandardsBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #555;
  background: #f9f9f9;
  padding: 0.8rem;
  border-radius: 8px;
  margin-top: auto;
  border: 1px solid #eee;

  svg {
    color: #d32f2f;
    font-size: 1rem;
  }

  span {
    font-weight: 500;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 0.7rem;
  }
`;

const EmergencyCTA = styled(motion.div)`
  background: linear-gradient(135deg, #d32f2f, #b71c1c);
  color: #fff;
  padding: 3rem 2rem;
  border-radius: 12px;
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
  box-shadow: 0 10px 30px rgba(211, 47, 47, 0.3);

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const EmergencyContent = styled.div`
  max-width: 700px;
  margin: 0 auto;

  h3 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }

    @media (max-width: 480px) {
      font-size: 1.3rem;
    }
  }

  p {
    opacity: 0.9;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
`;

const EmergencyButton = styled(motion.button)`
  background: #fff;
  color: #d32f2f;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  svg {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    padding: 0.9rem 2rem;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }
`;

export default AllServices;