import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import fireSafetyBg from "../../assets/fire-safety-banner.jpeg";
import { motion, useAnimation, useInView } from "framer-motion";

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
    <Container>
      <BackgroundImage src={fireSafetyBg} alt="Fire safety background" />
      
      <ContentWrapper>
        <AnimatedText
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
          className="row1"
        >
          <h1>Your Trusted Partner in</h1>
        </AnimatedText>
        
        <AnimatedText
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
          className="row2"
        >
          <h1><Highlight>Fire Safety</Highlight> Solutions</h1>
        </AnimatedText>
        
        <StatsWrapper
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
        >
          <StatItem>
            <span>100+</span>
            <p>Protected Clients</p>
          </StatItem>
          <StatItem>
            <span>24/7</span>
            <p>Emergency Service</p>
          </StatItem>
          <StatItem>
            <span>ISO</span>
            <p>Certified</p>
          </StatItem>
        </StatsWrapper>
      </ContentWrapper>
    </Container>
  );
};

// Styled Components
const Container = styled.section`
  position: relative;
  width: 100%;
  min-height: 700px;
  max-height: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0 4%;
  background-color: #f8f8f8;

  @media (max-width: 768px) {
    min-height: 400px;
    height: calc(80vh - 50px);
  }

  @media (max-width: 480px) {
    min-height: 350px;
    height: calc(70vh - 40px);
    padding: 0 6%;
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  opacity: 0.5;
  filter: blur(2px) brightness(0.8);

  @media (max-width: 480px) {
    filter: blur(1.5px) brightness(0.85); /* Slightly sharper on mobile */
  }
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
  gap: 0.8rem; /* Reduced gap for mobile */

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

const AnimatedText = styled(motion.div)`
  overflow: hidden;
  
  h1 {
    font-family: "Arial", sans-serif;
    font-weight: 600;
    margin: 0;
    line-height: 1.3;
    color: #333;
    text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
    
    @media (min-width: 1024px) {
      font-size: 4.5rem;
    }
    
    @media (min-width: 768px) and (max-width: 1023px) {
      font-size: 3rem;
    }
    
    @media (max-width: 767px) {
      font-size: 2rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1.6rem;
    }
  }
  
  &.row2 {
    margin-bottom: 1.5rem;

    @media (max-width: 480px) {
      margin-bottom: 1rem;
    }
  }
`;

const Highlight = styled.span`
  color: #d32f2f;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const StatsWrapper = styled(motion.div)`
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 1.5rem;
    margin-top: 1rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
    flex-direction: column; /* Stack stats vertically on small screens */
    align-items: center;
  }
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100px; /* Prevent items from being too cramped */
  
  span {
    font-family: "Arial", sans-serif;
    font-size: 2.5rem;
    color: #d32f2f;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 0.5px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }
  
  p {
    font-size: 0.9rem;
    color: #555;
    margin-top: 0.4rem;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    font-weight: 600;
    
    @media (max-width: 768px) {
      font-size: 0.85rem;
    }
    
    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  }
`;

export default Banner;