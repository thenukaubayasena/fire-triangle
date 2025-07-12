import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaQuoteLeft, FaBuilding, FaUserTie, FaFireExtinguisher } from "react-icons/fa";

const SuccessStories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    }
  }, [isInView, animation]);

  const stories = [
    {
      quote: "End Fire Safety installed a comprehensive system in our factory. Their team was professional, and we've had zero incidents since.",
      author: "Rajiv Perera",
      role: "Factory Manager, Colombo Industrial Park",
      icon: <FaBuilding />,
      metric: "100% Safety Record"
    },
    {
      quote: "Their emergency response team saved our hotel during an electrical fire. We now use them for all our properties.",
      author: "Nayana Fernando",
      role: "CEO, Serendib Hotels",
      icon: <FaUserTie />,
      metric: "5 Properties Protected"
    },
    {
      quote: "The maintenance team is exceptional. They identified risks we didn't even know existed.",
      author: "Dr. Sanjaya Bandara",
      role: "Director, City General Hospital",
      icon: <FaFireExtinguisher />,
      metric: "3 Years Incident-Free"
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
          Our Success Stories
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
      </TitleWrapper>

      <StoriesGrid ref={ref}>
        {stories.map((story, index) => (
          <StoryCard
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
            <QuoteIcon><FaQuoteLeft /></QuoteIcon>
            <p>{story.quote}</p>
            <AuthorWrapper>
              <div>
                <h4>{story.author}</h4>
                <span>{story.role}</span>
              </div>
              <Metric>
                {story.icon}
                <span>{story.metric}</span>
              </Metric>
            </AuthorWrapper>
          </StoryCard>
        ))}
      </StoriesGrid>
    </Container>
  );
};

// Styled Components
const Container = styled.section`
  padding: 5rem 7%;
  background: #f9f9f9;
  text-align: center;
`;

const TitleWrapper = styled.div`
  margin-bottom: 3rem;

  h1 {
    font-family: "Arial", sans-serif;
    font-size: clamp(1.8rem, 3vw, 2.75rem);
    font-weight: 700;
    color: #d32f2f;
    margin-bottom: 1rem;
  }

  .divider {
    height: 2px;
    background: linear-gradient(90deg, #d32f2f, transparent);
    max-width: 200px;
    margin: 0 auto;
  }
`;

const StoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const StoryCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  text-align: left;
  position: relative;

  p {
    font-style: italic;
    color: #555;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

const QuoteIcon = styled.div`
  color: #d32f2f;
  font-size: 1.5rem;
  opacity: 0.3;
  margin-bottom: 1rem;
`;

const AuthorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4 {
    margin: 0;
    color: #333;
    font-size: 1.1rem;
  }

  span {
    color: #777;
    font-size: 0.9rem;
  }
`;

const Metric = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #d32f2f;
  font-weight: 600;
`;

export default SuccessStories;