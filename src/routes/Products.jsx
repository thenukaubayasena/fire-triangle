import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useAnimation, useInView } from "framer-motion";
import { 
  FaFireExtinguisher, 
  FaBell, 
  FaShieldAlt,
  FaGasPump,
  FaWater,
  FaFan
} from "react-icons/fa";
import { MdSecurity, MdSmokeFree } from "react-icons/md";

// Import product images (replace with actual paths)
import extinguisherImg from "../assets/products/extinguisher.jpg";
import alarmSystemImg from "../assets/products/alarm-system.jpg";
import sprinklerImg from "../assets/products/sprinkler.jpg";
import suppressionImg from "../assets/products/suppression.jpg";
import aerosolImg from "../assets/products/aerosol.webp";
import smokeVentImg from "../assets/products/smoke-vent.jpg";
import securityImg from "../assets/products/security.png";
import detectorImg from "../assets/products/detector.avif";

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
        "ABC Dry Chemical Powder",
        "Carbon Dioxide (CO₂)",
        "Water Type",
        "Wet Chemical",
        "Mechanical Foam",
        "AFFF Foam",
        "Water Mist",
        "Clean Agent"
      ],
      description: "Certified fire extinguishers for all fire classes, approved by Sri Lankan Fire Department. Our engineers ensure proper installation and maintenance.",
      standards: "ISI & KITE Marked"
    },
    {
      id: 2,
      name: "Fire Alarm Systems",
      image: alarmSystemImg,
      icon: <FaBell />,
      types: [
        "Conventional Fire Alarm Panels",
        "Addressable Intelligent Systems",
        "Smoke Detectors (Ionization/Optical)",
        "Heat Detectors",
        "Multi-Sensor Detectors",
        "Flame Detectors",
        "Manual Call Points",
        "Alarm Bells & Sounders"
      ],
      description: "Complete fire detection solutions from simple analogue systems to sophisticated fully integrated solutions for major buildings.",
      standards: "IFE(UK) & NFPA Certified"
    },
    {
      id: 3,
      name: "Sprinkler Systems",
      image: sprinklerImg,
      icon: <FaWater />,
      types: [
        "Wet Pipe Systems",
        "Dry Pipe Systems",
        "Pre-action Systems",
        "Deluge Systems",
        "Water Mist Systems",
        "ESFR Sprinklers",
        "Hydrants & Monitors",
        "Foam/Water Systems"
      ],
      description: "BS EN 12845 and NFPA compliant sprinkler systems designed using specialized hydraulic calculation software for optimal performance.",
      standards: "16 International Standards"
    },
    {
      id: 4,
      name: "Fire Suppression Systems",
      image: suppressionImg,
      icon: <MdSmokeFree />,
      types: [
        "FM200 Systems",
        "NAF S125 Systems",
        "Inergen Systems",
        "CO₂ Systems",
        "Kitchen Hood Systems",
        "Dry Chemical Systems",
        "Water Mist Systems",
        "Tube Technology Systems"
      ],
      description: "Specialist suppression systems for critical assets including server rooms, industrial facilities, and commercial kitchens.",
      standards: "NFPA & BS Standards"
    },
    {
      id: 5,
      name: "Aerosol Suppression",
      image: aerosolImg,
      icon: <FaGasPump />,
      types: [
        "Autonomous Units",
        "Electrical Activation",
        "Thermal Activation",
        "Manual Activation",
        "Combination Systems",
        "Modular Units",
        "Compact Systems",
        "Industrial Grade"
      ],
      description: "Innovative non-pressurized suppression technology requiring minimal maintenance with built-in fail-safe activation.",
      standards: "Class A, B, C, F Certified"
    },
    {
      id: 6,
      name: "Smoke Ventilation",
      image: smokeVentImg,
      icon: <FaFan />,
      types: [
        "Automatic Opening Vents",
        "Window Activators",
        "Mechanical Smoke Ventilation",
        "Powered Extract Systems",
        "AOV Control Panels",
        "Natural Ventilation Systems",
        "Atrium Smoke Control",
        "Stairwell Pressurization"
      ],
      description: "Comprehensive smoke control systems to maintain clear escape routes and facilitate firefighting operations.",
      standards: "BS 7346 Compliant"
    },
    {
      id: 7,
      name: "Security Systems",
      image: securityImg,
      icon: <MdSecurity />,
      types: [
        "CCTV Surveillance",
        "Perimeter Protection",
        "Intrusion Detection",
        "Access Control",
        "Long Range Sirens",
        "Metal Detectors",
        "Integrated Alarm Systems",
        "Video Analytics"
      ],
      description: "Integrated security solutions that work seamlessly with fire safety systems for comprehensive property protection.",
      standards: "BSIA & SLS Standards"
    },
    {
      id: 8,
      name: "Detection Devices",
      image: detectorImg,
      icon: <FaShieldAlt />,
      types: [
        "Optical Beam Detectors",
        "LPG Gas Detectors",
        "H₂S Detectors",
        "Water Leak Detection",
        "Linear Heat Detection",
        "Video Flame Detection",
        "Aspiration Systems",
        "Combination Detectors"
      ],
      description: "Advanced detection technology for early warning of fire and hazardous conditions in diverse environments.",
      standards: "EN 54 Certified"
    }
  ];

  return (
    <ProductsContainer>
      {/* Hero Section */}
      <HeroSection>
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
            Certified equipment meeting international safety standards
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
          Fire Triangle supplies and installs a complete range of fire safety products approved by 
          IFE(UK) and the Sri Lankan Fire Department. All our equipment meets stringent international 
          standards for reliability and performance.
        </IntroText>

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
                <img src={product.image} alt={product.name} />
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
                        <TypeIcon>•</TypeIcon>
                        {type}
                      </TypeItem>
                    ))}
                  </TypesList>
                </ProductTypes>
                
                <StandardsBadge>
                  <FaShieldAlt /> {product.standards}
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
          <h3>Need Help Selecting the Right Products?</h3>
          <p>Our certified fire safety experts can assess your needs and recommend the optimal solutions</p>
          <ConsultationButton>
            Request Free Consultation
          </ConsultationButton>
        </ConsultationCTA>
      </MainContent>
    </ProductsContainer>
  );
};

// Styled Components
const ProductsContainer = styled.div`
  font-family: 'Arial', sans-serif;
  color: #333;
`;

const HeroSection = styled.section`
  position: relative;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
              url(${extinguisherImg});
  background-size: cover;
  background-position: center;
  padding: 0 2rem;

  h1 {
    font-size: 2.8rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  p {
    font-size: 1.2rem;
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    height: 280px;
    
    h1 {
      font-size: 2rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
`;

const MainContent = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const IntroText = styled(motion.p)`
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.7;
  max-width: 800px;
  margin: 0 auto 3rem;
  color: #555;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled(motion.div)`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const ProductImage = styled.div`
  position: relative;
  height: 200px;
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
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ProductName = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #222;
`;

const ProductDescription = styled.p`
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ProductTypes = styled.div`
  margin-bottom: 1.5rem;
  flex-grow: 1;

  h4 {
    font-size: 1.1rem;
    color: #333;
    margin-bottom: 0.8rem;
  }
`;

const TypesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  columns: 2;
  column-gap: 1.5rem;

  @media (max-width: 500px) {
    columns: 1;
  }
`;

const TypeItem = styled.li`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: flex-start;
  line-height: 1.4;
  font-size: 0.9rem;
  color: #444;
  break-inside: avoid;
`;

const TypeIcon = styled.span`
  color: #d32f2f;
  font-weight: bold;
  margin-right: 0.5rem;
`;

const StandardsBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #555;
  background: #f5f5f5;
  padding: 0.8rem;
  border-radius: 4px;
  margin-top: auto;

  svg {
    color: #d32f2f;
  }
`;

const ConsultationCTA = styled(motion.div)`
  background: #d32f2f;
  color: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    opacity: 0.9;
    margin-bottom: 1.5rem;
  }
`;

const ConsultationButton = styled.button`
  background: white;
  color: #d32f2f;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export default Products;