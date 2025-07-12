import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion, useAnimation, useInView } from "framer-motion";

const ScheduleCall = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animation = useAnimation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    }
  }, [isInView, animation]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    alert("Thank you! We'll contact you shortly.");
  };

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
          <p>Schedule a free consultation with our fire safety experts today.</p>
          <BenefitsList>
            <li>On-site risk assessment</li>
            <li>Customized solutions</li>
            <li>No-obligation quote</li>
          </BenefitsList>
        </TextContent>

        <FormWrapper
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <form onSubmit={handleSubmit}>
            <InputGroup>
              <label>Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </InputGroup>
            <InputGroup>
              <label>Email</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </InputGroup>
            <InputGroup>
              <label>Phone</label>
              <input 
                type="tel" 
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
                required 
              />
            </InputGroup>
            <InputGroup>
              <label>Message</label>
              <textarea 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                rows="3"
              />
            </InputGroup>
            <SubmitButton 
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule Free Consultation
            </SubmitButton>
          </form>
        </FormWrapper>
      </ContentWrapper>
    </Container>
  );
};

// Styled Components
const Container = styled.section`
  padding: 5rem 7%;
  background: #d32f2f;
  color: white;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TextContent = styled(motion.div)`
  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    opacity: 0.9;
  }
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 1rem;
    position: relative;
    padding-left: 2rem;

    &::before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #fff;
      font-weight: bold;
    }
  }
`;

const FormWrapper = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
`;

const InputGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    color: #333;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  input, textarea {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;

    &:focus {
      outline: none;
      border-color: #d32f2f;
    }
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 1rem;
  background: #d32f2f;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #b71c1c;
  }
`;

export default ScheduleCall;