import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaShieldAlt } from "react-icons/fa";

import fireSafetyBg from "../../assets/fire background.jpg";
import fireSafetyMobileBg from "../../assets/fire background 1.jpg";

const Banner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animation = useAnimation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    }
  }, [isInView, animation]);

  return (
    <HeroContainer ref={ref}>
      <BackgroundImage 
        src={isMobile ? fireSafetyMobileBg : fireSafetyBg} 
        alt="Fire safety background" 
      />
      <BackgroundOverlay />
      
      <ContentWrapper>
        <Tagline
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <IconWrapper>
            <FaShieldAlt />
          </IconWrapper>
          <TaglineText>Sri Lanka's Leading Fire Safety Specialists</TaglineText>
        </Tagline>
      </ContentWrapper>
    </HeroContainer>
  );
};

// Styled Components
const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  isolation: isolate;

  @media (max-width: 768px) {
    height: 100vh;
    min-height: 600px;
    align-items: flex-start;
    padding-top: 15%;
  }

  @media (max-width: 480px) {
    height: 100vh;
    min-height: 500px;
    padding-top: 20%;
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 1;
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(220, 38, 38, 0.3) 0%,
    rgba(0, 0, 0, 0.75) 50%,
    rgba(0, 0, 0, 0.85) 100%
  );
  z-index: 2;

  @media (max-width: 768px) {
    background: linear-gradient(
      135deg,
      rgba(220, 38, 38, 0.25) 0%,
      rgba(0, 0, 0, 0.8) 50%,
      rgba(0, 0, 0, 0.9) 100%
    );
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 5%;
  max-width: 1400px;

  @media (max-width: 768px) {
    padding: 0 4%;
  }

  @media (max-width: 480px) {
    padding: 0 3%;
  }
`;

const Tagline = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 5.5rem;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(220, 38, 38, 0.4);
  border-radius: 60px;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.4),
    0 0 20px rgba(220, 38, 38, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);

  @media (max-width: 1024px) {
    padding: 1.1rem 2.2rem;
    gap: 0.9rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 1.8rem;
    gap: 0.75rem;
    border-width: 1.5px;
  }

  @media (max-width: 480px) {
    padding: 0.9rem 1.5rem;
    gap: 0.6rem;
    border-radius: 50px;
  }

  @media (max-width: 380px) {
    padding: 0.8rem 1.3rem;
    gap: 0.5rem;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(1.2rem, 3vw, 2rem);
  color: #dc2626;
  filter: drop-shadow(0 0 8px rgba(220, 38, 38, 0.6));
  flex-shrink: 0;

  @media (max-width: 768px) {
    font-size: clamp(1.1rem, 2.5vw, 1.8rem);
  }

  @media (max-width: 480px) {
    font-size: clamp(1rem, 2vw, 1.4rem);
  }

  @media (max-width: 380px) {
    font-size: 0.9rem;
  }
`;

const TaglineText = styled.span`
  font-size: clamp(0.75rem, 2.2vw, 1.4rem);
  font-weight: 700;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  text-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.6),
    0 0 20px rgba(220, 38, 38, 0.3);
  line-height: 1.2;
  white-space: nowrap;

  @media (max-width: 1024px) {
    font-size: clamp(0.7rem, 2vw, 1.3rem);
    letter-spacing: 0.12em;
  }

  @media (max-width: 768px) {
    font-size: clamp(0.65rem, 1.8vw, 1.1rem);
    letter-spacing: 0.1em;
  }

  @media (max-width: 480px) {
    font-size: clamp(0.6rem, 1.5vw, 0.85rem);
    letter-spacing: 0.08em;
  }

  @media (max-width: 380px) {
    font-size: 0.55rem;
    letter-spacing: 0.06em;
  }
`;

export default Banner;