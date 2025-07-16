import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useAnimation, useInView } from "framer-motion";
import { useNavigate } from 'react-router-dom';

// Import images - replace with actual project images
import project1 from "../../assets/projects/1.webp";
import project2 from "../../assets/projects/19.jpg";
import project3 from "../../assets/projects/23.webp";
import project4 from "../../assets/projects/10.webp";

const RecentProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animation = useAnimation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    }
  }, [isInView, animation]);

  const projects = [
    { img: project1 },
    { img: project2 },
    { img: project3 },
    { img: project4 }
  ];

  return (
    <Container>
      <TitleWrapper>
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
        >
          Our Recent Projects
        </motion.h1>
        <motion.div
          variants={{
            hidden: { opacity: 0, width: 0 },
            visible: { opacity: 1, width: "50%" },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
          className="divider"
        />
        <motion.p
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="subtitle"
        >
          Showcasing our expertise in delivering advanced fire safety solutions
        </motion.p>
      </TitleWrapper>

      <ProjectsGrid ref={ref}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={animation}
            transition={{
              duration: 0.6,
              delay: 0.4 + (index * 0.1),
              type: "spring"
            }}
          >
            <ProjectImage>
              <img 
                src={project.img} 
                alt={project.title} 
                loading="lazy"
              />
            </ProjectImage>
          </ProjectCard>
        ))}
      </ProjectsGrid>

      <ViewAllButton
        onClick={() => navigate('/projects')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        View All Projects
      </ViewAllButton>
    </Container>
  );
};

// Styled Components
const Container = styled.section`
  padding: 5rem 7%;
  background: #f8f8f8;
  position: relative;
  overflow: hidden;
  text-align: center;

  @media (max-width: 768px) {
    padding: 3rem 5%;
  }
`;

const TitleWrapper = styled.div`
  margin-bottom: 3rem;
  text-align: center;

  h1 {
    font-family: "Arial", sans-serif;
    font-size: clamp(1.8rem, 3vw, 2.75rem);
    font-weight: 700;
    color: #d32f2f;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  .divider {
    height: 2px;
    background: linear-gradient(90deg, #d32f2f, transparent);
    max-width: 200px;
    margin: 0 auto;
  }

  .subtitle {
    color: #555;
    font-size: 1.1rem;
    max-width: 700px;
    margin: 1rem auto 0;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    
    .subtitle {
      font-size: 1rem;
    }
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 2rem auto;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
`;

const ProjectCard = styled(motion.div)`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: white;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
    
    ${ProjectImage} img {
      transform: scale(1.05);
    }
  }
`;

const ViewAllButton = styled(motion.button)`
  margin-top: 1.5rem;
  padding: 0.9rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
  background-color: #d32f2f;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: #b71c1c;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.7rem 1.8rem;
    font-size: 0.9rem;
    margin-top: 1rem;
  }
`;

export default RecentProjects;