import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaFireExtinguisher, FaUserShield, FaPhoneAlt, FaChalkboardTeacher, FaCertificate, FaCalendarAlt, FaClock } from "react-icons/fa";

const Training = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    }
  }, [isInView, animation]);

  const courses = [
    {
      id: 1,
      title: "Basic Fire Safety Training",
      icon: <FaFireExtinguisher />,
      description: "Fundamental fire prevention, evacuation procedures, and extinguisher use training compliant with NFPA standards.",
      features: [
        "Fire triangle theory",
        "Hands-on extinguisher practice",
        "Evacuation drills",
        "Hazard identification"
      ],
      audience: "All staff levels"
    },
    {
      id: 2,
      title: "Advanced Fire Warden Training",
      icon: <FaUserShield />,
      description: "Comprehensive training for designated safety officers with IFE(UK) certified instructors.",
      features: [
        "Emergency leadership",
        "Fire system operations",
        "Risk assessment methods",
        "Post-fire protocols"
      ],
      audience: "Safety officers/managers"
    },
    {
      id: 3,
      title: "Industrial Fire Prevention",
      icon: <FaChalkboardTeacher />,
      description: "Specialized training for high-risk environments like those at Brandix and Litro Gas facilities.",
      features: [
        "Flammable material handling",
        "Equipment shutdown procedures",
        "Chemical fire suppression",
        "Dust explosion prevention"
      ],
      audience: "Industrial staff"
    }
  ];

  const trainingBenefits = [
    "Reduced workplace fire incidents by up to 70%",
    "Compliance with Sri Lankan Fire Department regulations",
    "Certificates valid for 1 year",
    "On-site",
    "Available in Sinhala/English"
  ];

  return (
    <TrainingContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroOverlay />
        <HeroContent>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Fire Safety Training Programs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            IFE(UK) certified courses tailored for Sri Lankan businesses since 2005
          </motion.p>
        </HeroContent>
      </HeroSection>

      {/* Main Content */}
      <MainContent ref={ref}>
        {/* Intro Section */}
        <IntroSection
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 0.6 }}
        >
          <h2>Why Choose Fire Triangle Training?</h2>
          <p>
            As featured in our company profile, we've trained staff at President's House, Earl's Regency Hotel, 
            and major industrial facilities. Our ex-firefighter instructors bring real-world experience to 
            every session.
          </p>
        </IntroSection>

        {/* Courses Grid */}
        <CoursesGrid>
          {courses.map((course, index) => (
            <CourseCard
              key={course.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={animation}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <CourseIcon>{course.icon}</CourseIcon>
              <CourseTitle>{course.title}</CourseTitle>
              <CourseDescription>{course.description}</CourseDescription>
              
              <CourseFeatures>
                <h4>Key Topics:</h4>
                <ul>
                  {course.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </CourseFeatures>
              
              <CourseAudience>
                <strong>Ideal for:</strong> {course.audience}
              </CourseAudience>
            </CourseCard>
          ))}
        </CoursesGrid>

        {/* Benefits Section */}
        <BenefitsSection
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3>Training Benefits</h3>
          <BenefitsList>
            {trainingBenefits.map((benefit, index) => (
              <BenefitItem key={index}>
                <FaCertificate /> {benefit}
              </BenefitItem>
            ))}
          </BenefitsList>
        </BenefitsSection>

        {/* Consultation CTA */}
        <ConsultationCTA
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3>Need Expert Advice on Fire Safety Products?</h3>
          <p>Our IFE(UK) certified specialists can assess your requirements and recommend the optimal solutions</p>
          <ButtonGroup>
            <EmergencyButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPhoneAlt /> Emergency: +94 76 756 5634
            </EmergencyButton>
          </ButtonGroup>
        </ConsultationCTA>
      </MainContent>
    </TrainingContainer>
  );
};

// Styled Components
const TrainingContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  color: #333;
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
              url('https://images.unsplash.com/photo-1523861751938-121b5323b48b?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
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

const IntroSection = styled(motion.section)`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;

  h2 {
    font-size: 2rem;
    color: #d32f2f;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #555;
  }
`;

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const CourseCard = styled(motion.div)`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const CourseIcon = styled.div`
  font-size: 2.5rem;
  color: #d32f2f;
  margin-bottom: 1rem;
`;

const CourseTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #222;
`;

const CourseDuration = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

const CourseDescription = styled.p`
  color: #555;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const CourseFeatures = styled.div`
  margin-bottom: 1.5rem;

  h4 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    color: #333;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li {
    margin-bottom: 0.5rem;
    position: relative;
    padding-left: 1.5rem;

    &::before {
      content: "•";
      color: #d32f2f;
      font-weight: bold;
      position: absolute;
      left: 0;
    }
  }
`;

const CourseAudience = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1.5rem;
`;

const BenefitsSection = styled(motion.section)`
  background: #f9f9f9;
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 3rem;
  text-align: center;

  h3 {
    font-size: 1.8rem;
    color: #222;
    margin-bottom: 1.5rem;
  }
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const BenefitItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.1rem;
  color: #333;
  text-align: left;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);

  svg {
    color: #d32f2f;
    font-size: 1.2rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const ConsultationCTA = styled(motion.div)`
  background: linear-gradient(135deg, #d32f2f, #b71c1c);
  color: white;
  padding: 3rem 2rem;
  border-radius: 12px;
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
  box-shadow: 0 10px 30px rgba(211, 47, 47, 0.3);

  h3 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }

    @media (max-width: 480px) {
      font-size: 1.3rem;
    }
  }

  p {
    opacity: 0.9;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const EmergencyButton = styled(motion.button)`
  background: transparent;
  color: white;
  border: 2px solid white;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  svg {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    padding: 0.9rem 1.8rem;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
    width: 100%;
    justify-content: center;
  }
`;

export default Training;