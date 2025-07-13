import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaBuilding, FaHotel, FaHospital, FaIndustry, FaSchool, FaUniversity, FaMapMarkerAlt } from "react-icons/fa";
import { MdApartment, MdFactory } from "react-icons/md";

// Import project images (replace with actual project photos)
import project1 from "../assets/projects/rockwood.jpg";
import project2 from "../assets/projects/earls.jpg";
import project3 from "../assets/projects/litro.jpg";
import project4 from "../assets/projects/brandix.jpeg";
import project5 from "../assets/projects/monaragala.jpg";
import project6 from "../assets/projects/president.png";
import project7 from "../assets/projects/tea.webp";
import project8 from "../assets/projects/kandy.jpg";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    }
  }, [isInView, animation]);

  const projects = [
    {
      id: 1,
      title: "Rockwood Apartment Complex",
      image: project1,
      icon: <MdApartment />,
      type: "Residential",
      location: "Colombo 07",
      description: "Complete fire safety system installation including addressable fire alarm, sprinkler systems, and emergency lighting for this high-rise residential complex.",
      features: [
        "Addressable fire alarm system",
        "Wet pipe sprinkler system",
        "Emergency exit lighting",
        "Fire extinguishers on all floors",
        "Smoke ventilation system"
      ],
      year: "2023"
    },
    {
      id: 2,
      title: "Earl's Regency Hotel",
      image: project2,
      icon: <FaHotel />,
      type: "Hospitality",
      location: "Kandy",
      description: "Comprehensive fire protection solution for this luxury hotel, including kitchen suppression systems and voice evacuation alarms.",
      features: [
        "Kitchen hood suppression system",
        "Voice evacuation system",
        "Guest room smoke detectors",
        "Central monitoring station",
        "Fire curtain installation"
      ],
      year: "2022"
    },
    {
      id: 3,
      title: "Litro Gas Facility",
      image: project3,
      icon: <MdFactory />,
      type: "Industrial",
      location: "Malamure Road, Kegalle",
      description: "Specialized flammable gas protection system with explosion-proof equipment and deluge systems.",
      features: [
        "Flame detection system",
        "Deluge sprinkler system",
        "Explosion-proof equipment",
        "Gas detection system",
        "Emergency shutdown system"
      ],
      year: "2021"
    },
    {
      id: 4,
      title: "Brandix Apparel Factory",
      image: project4,
      icon: <FaIndustry />,
      type: "Industrial",
      location: "Rambukkana",
      description: "Fire safety solution for large-scale textile manufacturing facility with high fire load areas.",
      features: [
        "Early warning smoke detection",
        "High-volume sprinkler system",
        "Foam suppression in storage",
        "Employee training program",
        "Fire pump installation"
      ],
      year: "2020"
    },
    {
      id: 5,
      title: "District General Hospital",
      image: project5,
      icon: <FaHospital />,
      type: "Healthcare",
      location: "Monaragala",
      description: "Critical healthcare facility protection with non-interruptible systems and specialized medical gas safety.",
      features: [
        "Medical gas alarm system",
        "Staff training program",
        "Non-interruptible power supply",
        "Operating room protection",
        "Patient evacuation planning"
      ],
      year: "2020"
    },
    {
      id: 6,
      title: "President's House",
      image: project6,
      icon: <FaBuilding />,
      type: "Government",
      location: "Colombo 01",
      description: "High-security fire protection installation for this national landmark with minimal visual impact requirements.",
      features: [
        "Discreet smoke detection",
        "Heritage-compliant systems",
        "24/7 monitoring",
        "VIP evacuation protocol",
        "Integrated security system"
      ],
      year: "2019"
    },
    {
      id: 7,
      title: "Higurangala Tea Factory",
      image: project7,
      icon: <MdFactory />,
      type: "Industrial",
      location: "Gileemale",
      description: "Specialized protection for tea processing facility with combustible dust hazards.",
      features: [
        "Combustible dust protection",
        "High-temperature detectors",
        "Dust-tight equipment",
        "Employee safety training",
        "Regular maintenance program"
      ],
      year: "2018"
    },
    {
      id: 8,
      title: "Advanced Technical College",
      image: project8,
      icon: <FaSchool />,
      type: "Education",
      location: "Kandy",
      description: "Campus-wide fire safety system for technical education facility with laboratories and workshops.",
      features: [
        "Laboratory-specific protection",
        "Student dormitory systems",
        "Fire safety education program",
        "Workshop suppression",
        "Central alarm monitoring"
      ],
      year: "2017"
    }
  ];

  const getTypeIcon = (type) => {
    switch(type) {
      case "Residential": return <MdApartment />;
      case "Hospitality": return <FaHotel />;
      case "Industrial": return <FaIndustry />;
      case "Healthcare": return <FaHospital />;
      case "Government": return <FaBuilding />;
      case "Education": return <FaUniversity />;
      default: return <FaBuilding />;
    }
  };

  return (
    <ProjectsContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Completed Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Trusted fire safety solutions for Sri Lanka's most important buildings
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
          Since 2005, Fire Triangle has successfully installed and maintained fire safety systems for 
          hundreds of commercial, industrial, and residential properties across Sri Lanka. 
          Our portfolio includes some of the country's most prestigious addresses.
        </IntroText>

        {/* Projects Grid */}
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={animation}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectImage>
                <img src={project.image} alt={project.title} />
                <ProjectBadge>
                  {getTypeIcon(project.type)}
                  <span>{project.type}</span>
                </ProjectBadge>
              </ProjectImage>
              
              <ProjectContent>
                <ProjectHeader>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectLocation>
                    <FaMapMarkerAlt /> {project.location}
                  </ProjectLocation>
                </ProjectHeader>
                
                <ProjectDescription>{project.description}</ProjectDescription>
                
                <ProjectFeatures>
                  <h4>Key Features:</h4>
                  <FeaturesList>
                    {project.features.map((feature, i) => (
                      <FeatureItem key={i}>
                        <FeatureIcon>✓</FeatureIcon>
                        {feature}
                      </FeatureItem>
                    ))}
                  </FeaturesList>
                </ProjectFeatures>
                
                <ProjectFooter>
                  <ProjectYear>Completed: {project.year}</ProjectYear>
                  <ViewDetailsButton
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    View Case Study
                  </ViewDetailsButton>
                </ProjectFooter>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>

        {/* Client Testimonial */}
        <TestimonialSection
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <TestimonialContent>
            <QuoteIcon>"</QuoteIcon>
            <TestimonialText>
              Fire Triangle installed our factory's fire protection system 5 years ago and has maintained 
              it flawlessly. Their team's technical expertise and regular maintenance have given us 
              complete peace of mind.
            </TestimonialText>
            <ClientInfo>
              <ClientName>Rajiv Perera</ClientName>
              <ClientPosition>Factory Manager, Rockland (Pvt) Ltd</ClientPosition>
            </ClientInfo>
          </TestimonialContent>
        </TestimonialSection>
      </MainContent>
    </ProjectsContainer>
  );
};

// Styled Components
const ProjectsContainer = styled.div`
  font-family: 'Arial', sans-serif;
  color: #333;
  width: 100%;
`;

const HeroSection = styled.section`
  position: relative;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),
              url(${project1});
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
    height: 450px;
    h1 {
      font-size: 3.8rem;
    }
    p {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 1024px) {
    height: 350px;
    h1 {
      font-size: 2.8rem;
    }
    p {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 768px) {
    height: 300px;
    padding: 0 2rem;
    h1 {
      font-size: 2.3rem;
    }
    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    height: 260px;
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

const ProjectsGrid = styled.div`
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

const ProjectCard = styled(motion.div)`
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 480px) {
    border-radius: 8px;
  }
`;

const ProjectImage = styled.div`
  position: relative;
  height: 240px;
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

  @media (max-width: 768px) {
    height: 200px;
  }

  @media (max-width: 480px) {
    height: 180px;
  }
`;

const ProjectBadge = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  background: rgba(211, 47, 47, 0.9);
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;

  svg {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding: 0.4rem 0.8rem;
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media (max-width: 480px) {
    padding: 1.2rem;
  }
`;

const ProjectHeader = styled.div`
  margin-bottom: 1rem;
`;

const ProjectTitle = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
  color: #222;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const ProjectLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.9rem;
  color: #666;

  svg {
    color: #d32f2f;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const ProjectDescription = styled.p`
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.2rem;
  font-size: 1rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const ProjectFeatures = styled.div`
  margin-bottom: 1.2rem;
  flex-grow: 1;

  h4 {
    font-size: 1.1rem;
    color: #333;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 480px) {
    h4 {
      font-size: 1rem;
    }
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  margin-bottom: 0.6rem;
  display: flex;
  align-items: flex-start;
  line-height: 1.5;
  font-size: 0.95rem;
  color: #444;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const FeatureIcon = styled.span`
  color: #d32f2f;
  font-weight: bold;
  margin-right: 0.5rem;
  font-size: 1rem;
`;

const ProjectFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
  }
`;

const ProjectYear = styled.div`
  font-size: 0.9rem;
  color: #666;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const ViewDetailsButton = styled(motion.button)`
  background: transparent;
  color: #d32f2f;
  border: 1px solid #d32f2f;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #d32f2f;
    color: #fff;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding: 0.4rem 0.8rem;
  }
`;

const TestimonialSection = styled(motion.div)`
  background: #f5f5f5;
  border-radius: 10px;
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.2rem;
  }
`;

const TestimonialContent = styled.div`
  position: relative;
`;

const QuoteIcon = styled.div`
  font-size: 4rem;
  color: #d32f2f;
  opacity: 0.2;
  position: absolute;
  top: -2rem;
  left: 0;
  right: 0;

  @media (max-width: 768px) {
    font-size: 3rem;
    top: -1.5rem;
  }
`;

const TestimonialText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #555;
  font-style: italic;
  margin-bottom: 1.5rem;
  position: relative;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const ClientInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ClientName = styled.div`
  font-weight: 600;
  color: #333;
  font-size: 1.1rem;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ClientPosition = styled.div`
  font-size: 0.9rem;
  color: #666;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

export default Projects;