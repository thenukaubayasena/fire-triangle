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
            Solutions Since 2005
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
          <a href="tel:+94767565634" style={{ textDecoration: 'none', width: '100%', maxWidth: '300px' }}>
            <PrimaryCTA whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <FaPhoneAlt /> Hotline
            </PrimaryCTA>
          </a>

          <a href="/services" style={{ textDecoration: 'none', width: '100%', maxWidth: '300px' }}>
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
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 100px 6% 60px; /* Adjusted top padding for header overlap */
  isolation: isolate;

  @media (min-width: 1200px) {
    padding: 120px 7% 80px;
  }

  @media (max-width: 1024px) {
    min-height: 700px;
    padding: 100px 5% 50px;
  }

  @media (max-width: 768px) {
    min-height: 600px;
    padding: 80px 4% 40px;
  }

  @media (max-width: 480px) {
    min-height: 500px;
    padding: 70px 3% 30px;
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
  filter: brightness(0.65); /* Slightly darker for better contrast */

  @media (max-width: 768px) {
    object-position: 60% center;
  }

  @media (max-width: 480px) {
    object-position: 65% center;
  }
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(211, 47, 47, 0.2) 0%,
    rgba(0, 0, 0, 0.75) 100%
  );
  z-index: -1;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 1280px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 20px 0;

  @media (max-width: 1024px) {
    gap: 1.2rem;
    padding: 15px 0;
  }

  @media (max-width: 768px) {
    gap: 1rem;
    padding: 10px 0;
  }

  @media (max-width: 480px) {
    gap: 0.8rem;
    padding: 5px 0;
  }
`;

const Tagline = styled(motion.div)`
  font-size: clamp(0.9rem, 2vw, 1.2rem);
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
  text-transform: uppercase;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  padding: 0.5rem 1rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  z-index: 4; /* Ensure tagline is above other content */

  @media (max-width: 768px) {
    font-size: clamp(0.8rem, 1.8vw, 1rem);
    letter-spacing: 1.5px;
    padding: 0.4rem 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: clamp(0.7rem, 1.6vw, 0.9rem);
    letter-spacing: 1.2px;
    gap: 0.4rem;
    padding: 0.3rem 0.6rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const MainHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    gap: 0.3rem;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 480px) {
    gap: 0.2rem;
    margin-bottom: 0.6rem;
  }
`;

const AnimatedLine = styled(motion.h1)`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
  color: #fff;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  font-size: clamp(2.2rem, 5vw, 4.2rem);
  
  &:first-child {
    margin-bottom: 0.4rem;
  }

  @media (max-width: 1024px) {
    font-size: clamp(2rem, 4.5vw, 3.5rem);
  }

  @media (max-width: 768px) {
    font-size: clamp(1.8rem, 4vw, 3rem);
  }

  @media (max-width: 480px) {
    font-size: clamp(1.6rem, 3.5vw, 2.5rem);
  }
`;

const Highlight = styled.span`
  color: #ffd700;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 0;
    width: 100%;
    height: 4px;
    background: rgba(211, 47, 47, 0.7);
    z-index: -1;
    border-radius: 2px;

    @media (max-width: 768px) {
      bottom: 3px;
      height: 3px;
    }

    @media (max-width: 480px) {
      bottom: 2px;
      height: 2px;
    }
  }
`;

const CTAWrap = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  padding: 0 15px;

  @media (max-width: 768px) {
    gap: 1rem;
    margin-top: 1.2rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    padding: 0 10px;
  }
`;

const BaseCTA = styled(motion.button)`
  padding: 1rem 2rem;
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  font-weight: 500;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  letter-spacing: 1px;
  width: 100%;
  justify-content: center;
  max-width: 300px;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 0.9rem 1.8rem;
    max-width: 260px;
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1.5rem;
    max-width: 100%;
    font-size: clamp(0.85rem, 1.8vw, 1rem);
  }
`;

const PrimaryCTA = styled(BaseCTA)`
  background-color: #d32f2f;
  color: #fff;

  &:hover {
    background-color: #b71c1c;
    box-shadow: 0 6px 18px rgba(211, 47, 47, 0.4);
  }
`;

const SecondaryCTA = styled(BaseCTA)`
  background-color: rgba(255, 255, 255, 0.95);
  color: #333;

  &:hover {
    background-color: #fff;
    box-shadow: 0 6px 18px rgba(255, 255, 255, 0.3);
  }
`;

const StatsWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  padding: 1.5rem 2rem;
  border-radius: 10px;
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  width: 100%;
  max-width: 900px;

  @media (max-width: 1024px) {
    gap: 1.5rem;
    padding: 1.2rem 1.5rem;
  }

  @media (max-width: 768px) {
    gap: 1.2rem;
    padding: 1rem 1.2rem;
    margin-top: 1.5rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
    padding: 0.8rem;
    width: 95%;
  }
`;

const StatItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100px;

  @media (max-width: 480px) {
    min-width: auto;
    width: 100%;
  }
`;

const StatNumber = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: #ffd700;
  line-height: 1;
  margin-bottom: 0.3rem;

  @media (max-width: 768px) {
    font-size: clamp(1.6rem, 3.5vw, 2.2rem);
  }

  @media (max-width: 480px) {
    font-size: clamp(1.4rem, 3vw, 2rem);
  }
`;

const StatLabel = styled.p`
  font-size: clamp(0.75rem, 1.8vw, 0.9rem);
  color: rgba(255, 255, 255, 0.95);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
  margin: 0;

  @media (max-width: 480px) {
    font-size: clamp(0.7rem, 1.6vw, 0.85rem);
  }
`;

const StatDivider = styled.div`
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.25);

  @media (max-width: 480px) {
    width: 80px;
    height: 1px;
  }
`;

export default Banner;