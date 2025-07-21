import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";

const ScheduleCall = () => {
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
      <ContentWrapper ref={ref}>
        <TextContent
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2>Ready to Protect Your Property?</h2>
          <p>Connect with our fire safety experts for a free consultation.</p>
          <BenefitsList>
            <li>On-site risk assessment</li>
            <li>Customized solutions</li>
            <li>No-obligation quote</li>
          </BenefitsList>
        </TextContent>

        <ContactWrapper
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <ContactSection>
            <ContactTitle>Our Office</ContactTitle>
            <ContactItem>
              <strong>Address:</strong> <br />Fire Triangle No: 80/21 A, Madeiyawa Road, Kegalle
            </ContactItem>
            <ContactItem>
              <strong>Working Hours:</strong> <br />Monday - Saturday: 8:00 AM - 5:00 PM
            </ContactItem>
            <ContactItem>
              <strong>Contact Us:</strong> <br />Phone: +94 76 756 5634 / +94 77 247 4931<br />
              Email: firetrianglekeg@gmail.com
            </ContactItem>
            <CallButton
              href="tel:+94767565634"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <FaPhoneAlt /> Call Us Now
            </CallButton>
          </ContactSection>
        </ContactWrapper>
      </ContentWrapper>
    </Container>
  );
};

// Styled Components
const Container = styled.section`
  padding: 4rem 6%;
  background: #d32f2f;
  color: #fff;

  @media (min-width: 1200px) {
    padding: 5rem 7%;
  }

  @media (max-width: 1024px) {
    padding: 3.5rem 5%;
  }

  @media (max-width: 768px) {
    padding: 3rem 4%;
  }

  @media (max-width: 480px) {
    padding: 2rem 3%;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;

const TextContent = styled(motion.div)`
  h2 {
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    margin-bottom: 1.5rem;
    font-weight: 700;
    line-height: 1.2;
  }

  p {
    font-size: clamp(1rem, 2vw, 1.2rem);
    line-height: 1.7;
    margin-bottom: 2rem;
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: clamp(1.6rem, 2.5vw, 2.2rem);
    }
    p {
      font-size: clamp(0.9rem, 1.8vw, 1.1rem);
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: clamp(1.5rem, 2vw, 2rem);
    }
    p {
      font-size: 0.95rem;
    }
  }
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 1rem;
    position: relative;
    padding-left: 2rem;
    font-size: clamp(0.9rem, 1.8vw, 1.1rem);
    line-height: 1.6;

    &::before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #fff;
      font-weight: bold;
    }

    @media (max-width: 480px) {
      font-size: 0.95rem;
      padding-left: 1.8rem;
    }
  }
`;

const ContactWrapper = styled(motion.div)`
  background: #fff;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
`;

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const ContactItem = styled.div`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;

  strong {
    color: #333;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const CallButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.9rem 2rem;
  background: #d32f2f;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    background: #b71c1c;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.8rem;
    font-size: 1rem;
    svg {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 480px) {
    padding: 0.7rem 1.5rem;
    font-size: 0.9rem;
    svg {
      font-size: 1rem;
    }
  }
`;

export default ScheduleCall;