import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import fireSafetyBg from "../../assets/fire-safety-banner.jpeg";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaPhoneAlt, FaShieldAlt, FaFireExtinguisher } from "react-icons/fa";

const Banner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    }
  }, [isInView, animation]);

  return (
    <HeroContainer>
      <BackgroundOverlay />
      <BackgroundImage src={fireSafetyBg} alt="Fire safety background" />
      
      <ContentWrapper>
        <Tagline
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <FaShieldAlt /> SRI LANKA'S LEADING FIRE SAFETY SPECIALISTS
        </Tagline>
        
        <MainHeading ref={ref}>
          <AnimatedLine
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={animation}
            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          >
            Comprehensive <Highlight>Fire Protection</Highlight>
          </AnimatedLine>
          <AnimatedLine
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={animation}
            transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
          >
            Solutions Since 2010
          </AnimatedLine>
        </MainHeading>
        
        <CTAWrap
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a href="tel:+94767565634" style={{ textDecoration: 'none' }}>
            <PrimaryCTA whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <FaPhoneAlt /> Get Free Consultation
            </PrimaryCTA>
          </a>

          <a href="/services" style={{ textDecoration: 'none' }}>
            <SecondaryCTA whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <FaFireExtinguisher /> Our Services
            </SecondaryCTA>
          </a>
        </CTAWrap>
        
        <StatsWrapper
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          animate={animation}
          transition={{ delay: 1 }}
        >
          <StatItem
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <StatNumber>500+</StatNumber>
            <StatLabel>Projects Completed</StatLabel>
          </StatItem>
          <StatDivider />
          <StatItem
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <StatNumber>24/7</StatNumber>
            <StatLabel>Emergency Response</StatLabel>
          </StatItem>
          <StatDivider />
          <StatItem
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <StatNumber>ISO</StatNumber>
            <StatLabel>Certified</StatLabel>
          </StatItem>
        </StatsWrapper>
      </ContentWrapper>
    </HeroContainer>
  );
};

// Styled Components
const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 700px;
  max-height: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0 5%;
  isolation: isolate;

  @media (max-width: 768px) {
    min-height: 600px;
    height: 90vh;
    padding: 0 5%;
  }

  @media (max-width: 480px) {
    min-height: 500px;
    height: 85vh;
    padding: 0 7%;
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
  filter: brightness(0.7);
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(211, 47, 47, 0.15) 0%,
    rgba(0, 0, 0, 0.7) 100%
  );
  z-index: -1;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding-top: 80px;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const Tagline = styled(motion.div)`
  font-size: 1.1rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 0.9rem;
    letter-spacing: 1px;
  }
`;

const MainHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const AnimatedLine = styled(motion.h1)`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
  color: white;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  
  &:first-child {
    margin-bottom: 0.5rem;
  }

  @media (max-width: 768px) {
    line-height: 1.1;
  }
`;

const Highlight = styled.span`
  color: #ffd700;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 5px;
    left: 0;
    width: 100%;
    height: 5px;
    background: rgba(211, 47, 47, 0.7);
    z-index: -1;
    border-radius: 2px;
  }
`;

const CTAWrap = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
`;

const BaseCTA = styled(motion.button)`
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    padding: 0.9rem 1.8rem;
    font-size: 0.9rem;
  }
`;

const PrimaryCTA = styled(BaseCTA)`
  background-color: #d32f2f;
  color: white;

  &:hover {
    background-color: #b71c1c;
    box-shadow: 0 6px 20px rgba(211, 47, 47, 0.4);
  }
`;

const SecondaryCTA = styled(BaseCTA)`
  background-color: rgba(255, 255, 255, 0.9);
  color: #333;

  &:hover {
    background-color: white;
    box-shadow: 0 6px 20px rgba(255, 255, 255, 0.3);
  }
`;

const StatsWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  padding: 1.5rem 2rem;
  border-radius: 10px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    gap: 1.5rem;
    padding: 1rem 1.5rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
`;

const StatItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatNumber = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffd700;
  line-height: 1;
  margin-bottom: 0.3rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const StatLabel = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const StatDivider = styled.div`
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);

  @media (max-width: 480px) {
    width: 80px;
    height: 1px;
  }
`;

export default Banner;