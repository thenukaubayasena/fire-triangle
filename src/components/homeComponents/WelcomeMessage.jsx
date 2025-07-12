import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useAnimation, useInView } from "framer-motion";

const WelcomeMessage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    }
  }, [isInView, animation]);

  return (
    <WelcomeContainer>
      <ContentWrapper
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={animation}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Tagline>YOUR PROTECTION IS OUR PRIORITY!</Tagline>
        <WelcomeTitle>Welcome to Fire Triangle - Fire and Safety Service</WelcomeTitle>
        <Description>
          We are a professional firm in Sri Lanka providing Fire Protection Systems 
          (Fire Extinguishers) & Fire Detection Systems.
        </Description>
        <Description>
          We ensure our clients' protection through genuine equipment & 
          best-in-class service with regular maintenance.
        </Description>
        <AboutButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          About Us
        </AboutButton>
      </ContentWrapper>
    </WelcomeContainer>
  );
};

// Styled Components
const WelcomeContainer = styled.section`
  width: 100%;
  padding: 3rem 6%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;

  @media (max-width: 768px) {
    padding: 2rem 5%;
    min-height: 350px;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 4%;
    min-height: 300px;
  }
`;

const ContentWrapper = styled(motion.div)`
  max-width: 900px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }

  @media (max-width: 480px) {
    gap: 0.8rem;
  }
`;

const Tagline = styled(motion.p)`
  font-size: 1.3rem;
  color: #d32f2f;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    letter-spacing: 1.5px;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    letter-spacing: 1.2px;
  }
`;

const WelcomeTitle = styled(motion.h2)`
  font-size: 2.5rem;
  color: #333;
  font-weight: 700;
  margin: 0;
  line-height: 1.3;
  max-width: 700px;

  @media (min-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.9rem;
    max-width: 90%;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    max-width: 95%;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.7;
  margin: 0;
  max-width: 600px;

  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 90%;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.6;
  }
`;

const AboutButton = styled(motion.button)`
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

export default WelcomeMessage;