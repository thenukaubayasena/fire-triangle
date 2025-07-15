import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useAnimation, useInView } from "framer-motion";
import brand_1 from "../../assets/logos/dinapala.jpg";
import brand_2 from "../../assets/logos/earls.jpg";
import brand_3 from "../../assets/logos/bisma.png";
import brand_4 from "../../assets/logos/sporting.png";
import brand_5 from "../../assets/logos/rockland.jpg";
import brand_6 from "../../assets/logos/sliate.jpg";

const Clients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    }
  }, [isInView, animation]);

  const clients = [
    {
      name: "Dinapala Group",
      logo: brand_1, // Replace with actual path
      testimonial: "Their fire safety systems have protected our facilities for over 5 years with zero incidents."
    },
    {
      name: "Earl's Regent, Kandy",
      logo: brand_2, // Replace with actual path
      testimonial: "Professional service and reliable equipment that meets international standards."
    },
    {
      name: "Bisma Buscuits",
      logo: brand_3, // Replace with actual path
      testimonial: "Regular maintenance and prompt emergency response give us complete peace of mind."
    },
    {
      name: "Sporting Times",
      logo: brand_4, // Replace with actual path
      testimonial: "Critical infrastructure requires the best protection - that's why we chose End Fire Safety."
    },
    {
      name: "Rockland Distillers",
      logo: brand_5, // Replace with actual path
      testimonial: "Comprehensive fire safety solutions tailored specifically for the hospitality industry."
    },
    {
      name: "SLIATE - HNDM - KANDY",
      logo: brand_6, // Replace with actual path
      testimonial: "Trusted provider for our high-security government facilities."
    }
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
          Our Trusted Clients
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
          We partner with leading organizations across Sri Lanka to deliver superior fire protection
        </motion.p>
      </TitleWrapper>

      <ClientsGrid ref={ref}>
        {clients.map((client, index) => (
          <ClientCard
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
            <LogoContainer>
              <img src={client.logo} alt={`${client.name} logo`} />
            </LogoContainer>
            <h3>{client.name}</h3>
            <Testimonial>{client.testimonial}</Testimonial>
          </ClientCard>
        ))}
      </ClientsGrid>
    </Container>
  );
};

// Styled Components
const Container = styled.section`
  padding: 5rem 7%;
  background: #fff;
  position: relative;
  overflow: hidden;

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

const ClientsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 1rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ClientCard = styled(motion.div)`
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    border-color: #d32f2f;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    color: #333;
    margin: 1.5rem 0 1rem;
    line-height: 1.3;
  }
`;

const LogoContainer = styled.div`
  width: 120px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    filter: grayscale(100%);
    opacity: 0.8;
    transition: all 0.3s ease;
  }

  ${ClientCard}:hover & img {
    filter: grayscale(0%);
    opacity: 1;
  }
`;

const Testimonial = styled.p`
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
  font-style: italic;
  margin: 0;
  position: relative;

  &::before,
  &::after {
    content: '"';
    color: #d32f2f;
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export default Clients;