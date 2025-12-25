import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion, useAnimation, useInView } from "framer-motion";
import { MdApartment } from "react-icons/md";
import { FaHotel, FaIndustry, FaHospital, FaBuilding, FaSchool, FaStore, FaShieldAlt, FaMapMarkerAlt, FaCar, FaBolt, FaUtensils, FaFlask, FaMoneyBillWave, FaTools } from "react-icons/fa";
import { GiMilkCarton } from "react-icons/gi";
import { RiGovernmentFill } from "react-icons/ri";
import { BsFillLightbulbFill } from "react-icons/bs";

// Import placeholder project images (replace with actual project photos)
import project1 from "../assets/projects/1.webp";
import project2 from "../assets/projects/2.jpeg";
import project4 from "../assets/projects/4.webp";
import project5 from "../assets/projects/5.webp";
import project6 from "../assets/projects/6.webp";
import project7 from "../assets/projects/7.webp";
import project8 from "../assets/projects/8.webp";
import project9 from "../assets/projects/9.webp";
import project10 from "../assets/projects/10.webp";
import project12 from "../assets/projects/12.webp";
import project13 from "../assets/projects/18.webp";
import project14 from "../assets/projects/19.jpg";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animation = useAnimation();
  const [activeFilter] = useState("all");

  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    }
  }, [isInView, animation]);

  const clients = [
    { name: "District General Hospital", location: "Monaragala", category: "healthcare" },
    { name: "Kegalle Pradesiya Sabawa", location: "Buluruppa, Hettimulla", category: "government" },
    { name: "Pradeshiya Sabawa", location: "Bulathkohupitiya", category: "government" },
    { name: "Galigamuwa Pradesiya Sabawa", location: "Pitagaldeniya", category: "government" },
    { name: "Earl's Court (Pvt) Ltd", location: "Kandy", category: "hospitality" },
    { name: "Earl's Regency Hotel", location: "No: 40/1, Deveni Rajasinha Mw, Peradeniya, Kandy", category: "hospitality" },
    { name: "The Deer Park Hotel", location: "Girithale", category: "hospitality" },
    { name: "Advance Technical College", location: "Kandy", category: "education" },
    { name: "Hydro Power Station", location: "Ukuwela", category: "energy" },
    { name: "Syrex Hi-Tec Power Co. Ltd", location: "Colombo", category: "energy" },
    { name: "Bisma Buscuits", location: "Ukuwela", category: "food & beverage" },
    { name: "Sporting Times", location: "Kandy", category: "retail" },
    { name: "Milco (Pvt) Ltd", location: "Digana", category: "dairy" },
    { name: "Rainco", location: "Kadugannawa", category: "manufacturing" },
    { name: "Norwood Fashions", location: "Wallawa", category: "retail" },
    { name: "Lanka Automated Filling Station", location: "Kegalle", category: "energy" },
    { name: "Siyarata Ayurweda Hospital", location: "Pallekale", category: "healthcare" },
    { name: "CIB Group", location: "Sri Lanka", category: "retail" },
    { name: "CARS Body Shop", location: "Kandy", category: "automotive" },
    { name: "Lakro Packaging Industries (Pvt) Ltd", location: "Nittambuwa", category: "manufacturing" },
    { name: "RAN Holdings (Pvt) Ltd", location: "Kandy", category: "construction" },
    { name: "Hotel Nilakma Lagoon", location: "Negombo", category: "hospitality" },
    { name: "Habib Bank Limited (HBL)", location: "Colombo", category: "finance" },
    { name: "Heaven Breeze Hotel", location: "Ella", category: "hospitality" },
    { name: "Serandib Signature Resort", location: "Rajawella", category: "hospitality" },
    { name: "China Sri Lanka Joint Research and Demonstration Center for Water Technology", location: "Peradeniya", category: "research" },

    // Newly added entries
    { name: "Vito Wood Fired Pizza", location: "Kandy", category: "food & beverage" },
    { name: "Rossli Holding Pvt Ltd", location: "Lakshapana", category: "manufacturing" },
    { name: "Earl's Reef", location: "Beruwala", category: "hospitality" },
    { name: "City Hotel", location: "Kandy", category: "hospitality" },
    { name: "Nawaloka College of Higher Studies (NCHS)", location: "Kandy", category: "education" },
    { name: "Casamara Hotel", location: "Kandy", category: "hospitality" },
    { name: "Udam Furniture", location: "Galigamuwa Industrial Zone", category: "manufacturing" },
    { name: "Sri Lanka Energies (Pvt) Ltd", location: "Galigamuwa Industrial Zone", category: "energy" },
    { name: "Sanasa Bank", location: "Atala / Ruwanwella / Deraniyagala", category: "finance" },
    { name: "Health Recon", location: "Kandy", category: "healthcare" },
    { name: "Sleek Hotel", location: "Kegalle", category: "hospitality" },
    { name: "Pinnalanda Hotel", location: "Pinnawala", category: "hospitality" },
    { name: "Elephant Park Hotel", location: "Pinnawala", category: "hospitality" },
    { name: "Hotel Relidiya", location: "Kegalle", category: "hospitality" },
    { name: "Sri Lanka Wildlife Conservation", location: "Wasgamuwa", category: "government" },
    { name: "R.A.N Green Foods Exports (Pvt) Ltd", location: "Bandaragama", category: "food & beverage" },
    { name: "Dissanayake Filling Station", location: "Rambukkana", category: "energy" },
    { name: "Maam Biscuits Lanka (Pvt) Ltd", location: "Matale", category: "food & beverage" }
  ];

  const projects = [
    { id: 1, image: project1 },
    { id: 2, image: project2 },
    { id: 4, image: project4 },
    { id: 5, image: project5 },
    { id: 6, image: project6 },
    { id: 7, image: project7 },
    { id: 8, image: project8 },
    { id: 9, image: project9 },
    { id: 10, image: project10 },
    { id: 12, image: project12 },
    { id: 13, image: project13 },
    { id: 14, image: project14 }
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
      case "government": return <RiGovernmentFill />;
      case "education": return <FaSchool />;
      case "commercial": return <FaBuilding />;
      case "retail": return <FaStore />;
      case "finance": return <FaMoneyBillWave />;
      case "automotive": return <FaCar />;
      case "utilities": return <BsFillLightbulbFill />;
      case "energy": return <FaBolt />;
      case "food & beverage": return <FaUtensils />;
      case "dairy": return <GiMilkCarton />;
      case "construction": return <FaTools />;
      case "research": return <FaFlask />;
      default: return <FaBuilding />;
    }
  };

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

export default Projects;