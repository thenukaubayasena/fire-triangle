import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaBuilding, FaShieldAlt, FaHotel, FaHospital, FaIndustry, FaSchool, FaMapMarkerAlt, FaQuoteLeft } from "react-icons/fa";
import { MdApartment, MdFactory } from "react-icons/md";

// Import placeholder project images (replace with actual project photos)
import project1 from "../assets/projects/1.webp";
import project2 from "../assets/projects/2.webp";
import project3 from "../assets/projects/3.webp";
import project4 from "../assets/projects/4.webp";
import project5 from "../assets/projects/5.webp";
import project6 from "../assets/projects/6.webp";
import project7 from "../assets/projects/7.webp";
import project8 from "../assets/projects/8.webp";
import project9 from "../assets/projects/9.webp";
import project10 from "../assets/projects/10.webp";
import project11 from "../assets/projects/11.webp";
import project12 from "../assets/projects/12.webp";
import project13 from "../assets/projects/18.webp";
import project14 from "../assets/projects/19.jpg";
import project15 from "../assets/projects/21.webp";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animation = useAnimation();
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    }
  }, [isInView, animation]);

  const clients = [
    { name: "Rockwood Apartment", location: "Colombo 07", category: "residential" },
    { name: "Rockland (Pvt) Ltd", location: "Kiimandala Mawatha, Colombo 05", category: "commercial" },
    { name: "Brandix (Pvt) Ltd", location: "Rambukkana", category: "industrial" },
    { name: "Vishwa Enterprises (Pvt) Ltd", location: "Makola Road, Kiribathgoda", category: "commercial" },
    { name: "Enrich Group", location: "Hawaeliya Rd, Nuwar Eliya", category: "commercial" },
    { name: "Asiri Agro Foods (Pvt) Ltd", location: "Matale", category: "industrial" },
    { name: "Agrarian Development District Office", location: "Matale", category: "government" },
    { name: "Litro Gas", location: "Molamure Road, Kegalle", category: "industrial" },
    { name: "Dinapala Group", location: "No: 39, Cross Street, Kandy", category: "commercial" },
    { name: "Indra Motor Spares (Pvt) Ltd", location: "No: 138, 140, D.S. Senanayaka Weediya, Kandy", category: "commercial" },
    { name: "Indra Finance Ltd", location: "No: 187, Katugastota Road, Kandy", category: "commercial" },
    { name: "Dinapala (Pvt) Ltd", location: "No: 63, Kings Street, Kandy", category: "commercial" },
    { name: "President's House", location: "Colombo 01", category: "government" },
    { name: "President's House", location: "Kandy", category: "government" },
    { name: "Ackland House", location: "Colombo 02", category: "residential" },
    { name: "District General Hospital", location: "Monaragala", category: "healthcare" },
    { name: "Kegalle Pradesiya Sabawa", location: "Buluruppa, Hettimulla", category: "government" },
    { name: "Pradeshiya Sabawa", location: "Bulathkohupitiya", category: "government" },
    { name: "Galigomuwa Pradesiya Sabawa", location: "Pitagaldeniya", category: "government" },
    { name: "Udarata Development Authority Of Sri Lanka", location: "No: 1120, Gatambe, Peradeniya", category: "government" },
    { name: "Higurangala Tea Factory", location: "Guruluwana, Gileemale", category: "industrial" },
    { name: "Earl's Court (Pvt) Ltd", location: "Kandy", category: "hospitality" },
    { name: "Earl's Regency Hotel", location: "No: 40/1, Deveni Rajasinha Mw, Peradeniya, Kandy", category: "hospitality" },
    { name: "Earl's Court (Pvt) Ltd, Borkside Nature Resort", location: "Dumbbara Vally, Alkaduwa Road, Waththegama", category: "hospitality" },
    { name: "Hela Clothing (Pvt) Ltd", location: "Arangala, Naula", category: "industrial" },
    { name: "Manchester Foods (Pvt) Ltd", location: "Wattegama Road, Ukuwela", category: "industrial" },
    { name: "Tristar Explosive", location: "Oyamaduwa, Anuradhapura", category: "industrial" },
    { name: "Deer Park Hotel", location: "Girithale", category: "hospitality" },
    { name: "Advance Technical College", location: "Kandy", category: "education" },
    { name: "National Water Supply and Drainage Board", location: "Badulla", category: "government" },
    { name: "Hydro Power Station", location: "Ukuwela", category: "industrial" },
    { name: "Syrex Hi-Tec Power Co. Ltd", location: "Unknown", category: "industrial" }
  ];

  const projects = [
    { id: 1, image: project1 },
    { id: 2, image: project2 },
    { id: 3, image: project3 },
    { id: 4, image: project4 },
    { id: 5, image: project5 },
    { id: 6, image: project6 },
    { id: 7, image: project7 },
    { id: 8, image: project8 },
    { id: 9, image: project9 },
    { id: 10, image: project10 },
    { id: 11, image: project11 },
    { id: 12, image: project12 },
    { id: 13, image: project13 },
    { id: 14, image: project14 },
    { id: 15, image: project15 }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const filteredClients = activeFilter === "all" 
    ? clients 
    : clients.filter(client => client.category === activeFilter);

  const getCategoryIcon = (category) => {
    switch(category) {
      case "residential": return <MdApartment />;
      case "hospitality": return <FaHotel />;
      case "industrial": return <FaIndustry />;
      case "healthcare": return <FaHospital />;
      case "government": return <FaBuilding />;
      case "education": return <FaSchool />;
      case "commercial": return <FaBuilding />;
      default: return <FaBuilding />;
    }
  };

  const categoryFilters = [
    { id: "all", name: "All Categories" },
    { id: "residential", name: "Residential" },
    { id: "commercial", name: "Commercial" },
    { id: "industrial", name: "Industrial" },
    { id: "government", name: "Government" },
    { id: "hospitality", name: "Hospitality" },
    { id: "healthcare", name: "Healthcare" },
    { id: "education", name: "Education" }
  ];

  return (
    <ProjectsContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroOverlay />
        <HeroContent>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Trusted fire safety solutions for Sri Lanka's most important buildings since 2005
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
          Fire Triangle has been a leader in fire safety, serving prestigious clients across commercial, 
          industrial, government, and residential sectors. Our commitment to safety and innovation 
          has made us the trusted partner for Sri Lanka's most important buildings.
        </IntroText>

        {/* Recent Projects Gallery */}
        <GallerySection>
          <SectionTitle
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={animation}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Featured Projects - Recent Gallery
          </SectionTitle>
          
          <ProjectsGrid>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={animation}
                transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
              >
                <ProjectImage>
                  <img src={project.image} alt={project.title} loading="lazy" />
                </ProjectImage>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </GallerySection>

        {/* Clients Section */}
        <ClientsSection>
          <SectionTitle
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={animation}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Our Valued Clients
          </SectionTitle>
          
          <ClientsGrid>
            {filteredClients.map((client, index) => (
              <ClientCard
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={animation}
                transition={{ duration: 0.5, delay: 0.5 + (index * 0.05) }}
              >
                <ClientIcon>{getCategoryIcon(client.category)}</ClientIcon>
                <ClientName>{client.name}</ClientName>
                <ClientLocation>
                  <FaMapMarkerAlt /> {client.location}
                </ClientLocation>
              </ClientCard>
            ))}
          </ClientsGrid>
        </ClientsSection>

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
            <QuoteIcon>
              <FaQuoteLeft />
            </QuoteIcon>
            <TestimonialText>
              Fire Triangle installed our factory's fire protection system 5 years ago and has maintained 
              it flawlessly. Their team's technical expertise and regular maintenance have given us 
              complete peace of mind.
            </TestimonialText>
            <ClientInfo>
              <ClientName1>Rajiv Perera</ClientName1>
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
              url(${project1});
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

const FilterContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    gap: 0.8rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

const FilterButton = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  border: none;
  background: ${props => props.active ? '#d32f2f' : '#f0f0f0'};
  color: ${props => props.active ? 'white' : '#555'};
  font-weight: ${props => props.active ? '600' : '500'};
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.95rem;
  box-shadow: ${props => props.active ? '0 4px 12px rgba(211, 47, 47, 0.3)' : 'none'};

  &:hover {
    background: ${props => props.active ? '#d32f2f' : '#e0e0e0'};
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
`;

const Section = styled.section`
  margin-bottom: 5rem;

  @media (max-width: 1024px) {
    margin-bottom: 4rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const GallerySection = styled(Section)``;

const ClientsSection = styled(Section)``;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  font-weight: 700;
  color: #222;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  padding-bottom: 1rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: #d32f2f;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  padding: 0 1rem;

  @media (min-width: 1600px) {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
`;

const ProjectCard = styled(motion.div)`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  background: #fff;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImage = styled.div`
  position: relative;
  height: 280px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }

  @media (max-width: 1024px) {
    height: 240px;
  }

  @media (max-width: 768px) {
    height: 220px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.2) 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ProjectCard}:hover & {
    opacity: 1;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    opacity: 1;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 100%);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const ProjectLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  opacity: 0.9;

  svg {
    color: #d32f2f;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ProjectBadge = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: rgba(255, 255, 255, 0.9);
  color: #d32f2f;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 2;

  svg {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    top: 1rem;
    right: 1rem;
    font-size: 0.85rem;
    padding: 0.4rem 0.8rem;
  }
`;

const ClientsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 0 1rem;

  @media (min-width: 1600px) {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
`;

const ClientCard = styled(motion.div)`
  background: #fff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border-left: 5px solid #d32f2f;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ClientIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: #d32f2f;
  font-size: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
`;

const ClientName = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #222;
  margin-bottom: 0.8rem;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ClientLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: #666;
  margin-top: auto;

  svg {
    color: #d32f2f;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const TestimonialSection = styled(motion.div)`
  background: linear-gradient(135deg, #f8f8f8 0%, #ffffff 100%);
  border-radius: 15px;
  padding: 4rem;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, #d32f2f 0%, #ff6b6b 100%);
  }

  @media (max-width: 1024px) {
    padding: 3rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 2.5rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

const TestimonialContent = styled.div`
  position: relative;
`;

const QuoteIcon = styled.div`
  color: #d32f2f;
  opacity: 0.2;
  font-size: 5rem;
  position: absolute;
  top: -1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 0;

  @media (max-width: 768px) {
    font-size: 4rem;
    top: -0.5rem;
  }
`;

const TestimonialText = styled.p`
  font-size: clamp(1.2rem, 2vw, 1.4rem);
  line-height: 1.8;
  color: #555;
  font-style: italic;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ClientInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const ClientName1 = styled.div`
  font-weight: 700;
  color: #222;
  font-size: 1.3rem;
  margin-bottom: 0.3rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ClientPosition = styled.div`
  font-size: 1rem;
  color: #777;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export default Projects;