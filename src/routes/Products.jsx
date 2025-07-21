import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useAnimation, useInView } from "framer-motion";
import { 
  FaFireExtinguisher, 
  FaBell, 
  FaShieldAlt,
  FaWater,
  FaCheck,
  FaPhoneAlt,
  FaTools
} from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { GiFireflake } from "react-icons/gi";

// Import product images (replace with actual paths)
import extinguisherImg from "../assets/products/extinguisher.jpg";
import alarmSystemImg from "../assets/products/alarm-system.jpg";
import sprinklerImg from "../assets/products/sprinkler.jpg";
import securityImg from "../assets/products/security.png";
import detectorImg from "../assets/products/detector.avif";
import kitchenSystemImg from "../assets/products/kitchen-system.jpg";

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    }
  }, [isInView, animation]);

  const products = [
    {
      id: 1,
      name: "Fire Extinguishers",
      image: extinguisherImg,
      icon: <FaFireExtinguisher />,
      types: [
        "ABC Dry Chemical Powder (ISI & KITE Marked)",
        "Carbon Dioxide (CO₂) Extinguishers",
        "Water Type Fire Extinguishers",
        "Wet Chemical Fire Extinguishers",
        "Mechanical Foam Extinguishers",
        "AFFF Foam Fire Extinguishers",
        "Water Mist Extinguishers",
        "Clean Agent (Ozone Friendly)"
      ],
      description: "Complete range of certified fire extinguishers approved by Sri Lankan Fire Department for all fire classes (A, B, C, F). Our engineers ensure proper installation in optimal locations.",
      standards: "ISI, KITE & SLS Standards",
      brands: ["Howdy", "Evolution", "EVERSAFE"]
    },
    {
      id: 2,
      name: "Fire Alarm Systems",
      image: alarmSystemImg,
      icon: <FaBell />,
      types: [
        "Conventional Fire Alarm Panels",
        "Addressable Intelligent Systems",
        "Ionization Smoke Detectors",
        "Optical Smoke & Beam Detectors",
        "Heat & Multi-Sensor Detectors",
        "Flame Detectors & Video Detection",
        "LPG & H2S Gas Detectors",
        "Manual Call Points & Alarm Devices"
      ],
      description: "Complete fire detection solutions from internationally renowned manufacturers, approved to IFE(UK) and Sri Lankan Fire Department standards.",
      standards: "EN 54 & NFPA 72 Certified",
      brands: ["Horing", "C-TEC", "Asenware", "Apollo", "EVERSAFE"]
    },
    {
      id: 3,
      name: "Sprinkler Systems",
      image: sprinklerImg,
      icon: <FaWater />,
      types: [
        "Wet Pipe Systems (BS EN 12845)",
        "Dry Pipe & Pre-action Systems",
        "Deluge & Water Mist Systems",
        "ESFR Sprinklers for Warehouses",
        "Hydrants & Foam Monitors",
        "Pumps & Water Storage Tanks",
        "Valves & Flow Switches",
        "Pipework & Hangers"
      ],
      description: "BS EN 12845 and NFPA compliant sprinkler systems designed using specialized FHC hydraulic calculation software that complies with 16 international standards.",
      standards: "BS EN 12845, NFPA 13, FM Global",
      brands: ["Asenware", "NEWAGE", "EVERSAFE"]
    },
    {
      id: 4,
      name: "Kitchen Suppression",
      image: kitchenSystemImg,
      icon: <GiFireflake />,
      types: [
        "Wet Chemical Kitchen Hood Systems",
        "ANSUL R-102 Systems",
        "Piranha & Amerex Systems",
        "Nozzles & Pipe Networks",
        "Manual Pull Stations",
        "Fuel Shut-off Valves",
        "System Monitoring Panels",
        "UL 300 Compliant Designs"
      ],
      description: "Specialized kitchen fire suppression systems that automatically detect and suppress grease fires while shutting off fuel sources to prevent reignition.",
      standards: "UL 300, NFPA 17A, EN 12416",
      brands: []
    },
    {
      id: 5,
      name: "Security Systems",
      image: securityImg,
      icon: <MdSecurity />,
      types: [
        "CCTV Surveillance Systems",
        "Perimeter Intrusion Detection",
        "Access Control Solutions",
        "Long Range Sirens & Strobes",
        "Metal Detection Equipment",
        "Integrated Alarm Monitoring",
        "Video Analytics Software",
        "Central Monitoring Stations"
      ],
      description: "Integrated security solutions that complement fire safety systems, providing comprehensive property protection and threat detection.",
      standards: "BSIA, SLS, EN 50131",
      brands: ["Hikvision", "Dahua", "Bosch", "Honeywell"]
    },
    {
      id: 6,
      name: "Detection Devices",
      image: detectorImg,
      icon: <FaShieldAlt />,
      types: [
        "Optical Beam Smoke Detectors",
        "LPG & Natural Gas Detectors",
        "H₂S & Toxic Gas Detection",
        "Water Leak Detection Systems",
        "Linear Heat Detection Cable",
        "Video Flame Detection Cameras",
        "Aspirating Smoke Detection",
        "Multi-Criteria Detectors"
      ],
      description: "Advanced detection technology for early warning of fire and hazardous conditions in diverse environments from industrial facilities to commercial buildings.",
      standards: "EN 54, UL 268, FM 3260",
      brands: ["Horing", "C-TEC", "Asenware", "Apollo", "EVERSAFE"]
    }
  ];

  return (
    <ProductsContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroOverlay />
        <HeroContent>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Fire Safety Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Certified equipment meeting IFE(UK) and international safety standards
          </motion.p>
          <CertificationBadge
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <FaShieldAlt /> Sri Lankan Fire Department Approved
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
          Fire Triangle supplies and installs a complete range of fire safety products approved by 
          IFE(UK) and the Sri Lankan Fire Department. All equipment meets stringent international 
          standards and comes with professional installation and maintenance services.
        </IntroText>

        <KeyFeatures>
          <Feature>
            <FaCheck /> All products certified to international standards
          </Feature>
          <Feature>
            <FaTools /> Professional installation by IFE(UK) certified technicians
          </Feature>
          <Feature>
            <FaShieldAlt /> Regular maintenance and inspection programs
          </Feature>
        </KeyFeatures>

        {/* Products Grid */}
        <ProductsGrid>
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={animation}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductImage>
                <img src={product.image} alt={product.name} loading="lazy" />
                <ProductIcon>{product.icon}</ProductIcon>
              </ProductImage>
              
              <ProductContent>
                <ProductName>{product.name}</ProductName>
                <ProductDescription>{product.description}</ProductDescription>
                
                <ProductTypes>
                  <h4>Product Types:</h4>
                  <TypesList>
                    {product.types.map((type, i) => (
                      <TypeItem key={i}>
                        <TypeIcon><FaCheck /></TypeIcon>
                        <TypeText>{type}</TypeText>
                      </TypeItem>
                    ))}
                  </TypesList>
                </ProductTypes>
                
                {product.brands.length > 0 && (
                  <BrandsSection>
                    <h4>Featured Brands:</h4>
                    <BrandsList>
                      {product.brands.map((brand, i) => (
                        <BrandItem key={i}>{brand}</BrandItem>
                      ))}
                    </BrandsList>
                  </BrandsSection>
                )}
                
                <StandardsBadge>
                  <FaShieldAlt /> <span>{product.standards}</span>
                </StandardsBadge>
              </ProductContent>
            </ProductCard>
          ))}
        </ProductsGrid>

        {/* Consultation CTA */}
        <ConsultationCTA
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3>Need Expert Advice on Fire Safety Products?</h3>
          <p>Our IFE(UK) certified specialists can assess your requirements and recommend the optimal solutions</p>
          <ButtonGroup>
            <EmergencyButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPhoneAlt /> Emergency: +94 76 756 5634
            </EmergencyButton>
          </ButtonGroup>
        </ConsultationCTA>
      </MainContent>
    </ProductsContainer>
  );
};

// Styled Components
const ProductsContainer = styled.div`
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
              url(${extinguisherImg});
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
    margin-bottom: 1rem;
    font-weight: 700;
    line-height: 1.2;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
  }

  p {
    font-size: clamp(1rem, 2vw, 1.4rem);
    opacity: 0.9;
    margin-bottom: 1.5rem;
    font-weight: 300;
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.8rem;
    }
    p {
      font-size: 1rem;
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

const ProductsGrid = styled.div`
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

const ProductCard = styled(motion.div)`
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
`;

const ProductImage = styled.div`
  position: relative;
  height: 220px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const ProductIcon = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(211, 47, 47, 0.9);
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;

const ProductContent = styled.div`
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ProductName = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #222;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const ProductDescription = styled.p`
  color: #555;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const ProductTypes = styled.div`
  margin-bottom: 1.5rem;

  h4 {
    font-size: 1.1rem;
    color: #d32f2f;
    margin-bottom: 0.8rem;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const TypesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  columns: 2;
  column-gap: 1.5rem;

  @media (max-width: 600px) {
    columns: 1;
  }
`;

const TypeItem = styled.li`
  margin-bottom: 0.8rem;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  line-height: 1.6;
  break-inside: avoid;
`;

const TypeIcon = styled.div`
  color: #d32f2f;
  font-size: 0.8rem;
  margin-top: 0.2rem;
  flex-shrink: 0;
`;

const TypeText = styled.span`
  color: #444;
  font-size: 0.95rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const BrandsSection = styled.div`
  margin-bottom: 1.5rem;

  h4 {
    font-size: 1.1rem;
    color: #d32f2f;
    margin-bottom: 0.8rem;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const BrandsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
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

const ConsultationCTA = styled(motion.div)`
  background: linear-gradient(135deg, #d32f2f, #b71c1c);
  color: white;
  padding: 3rem 2rem;
  border-radius: 12px;
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
  box-shadow: 0 10px 30px rgba(211, 47, 47, 0.3);

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

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const EmergencyButton = styled(motion.button)`
  background: transparent;
  color: white;
  border: 2px solid white;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  svg {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    padding: 0.9rem 1.8rem;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
    width: 100%;
    justify-content: center;
  }
`;

export default Products;