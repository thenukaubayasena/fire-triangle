import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useAnimation, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Import product images - replace with actual product images
import extinguisher from "../../assets/products/extinguisher.jpg";
import alarm from "../../assets/products/alarm.jpg";
import sprinkler from "../../assets/products/sprinkler.jpg";
import detector from "../../assets/products/smoke.jpg";

const OurProducts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animation = useAnimation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    }
  }, [isInView, animation]);

  const products = [
    { 
      img: extinguisher, 
      name: "Fire Extinguishers", 
      description: "High-quality extinguishers for all fire classes with certified refill services",
      features: ["Various sizes available", "ABC powder type", "Wall-mounted brackets"]
    },
    { 
      img: alarm, 
      name: "Fire Alarm Systems", 
      description: "Advanced detection systems with centralized monitoring capabilities",
      features: ["Voice evacuation", "Wireless options", "24/7 monitoring"]
    },
    { 
      img: sprinkler, 
      name: "Sprinkler Systems", 
      description: "Automatic fire suppression systems for commercial and industrial spaces",
      features: ["Wet & dry systems", "High-pressure models", "Corrosion-resistant"]
    },
    { 
      img: detector, 
      name: "Smoke Detectors", 
      description: "Early warning systems with photoelectric and ionization technology",
      features: ["Battery & hardwired", "Interconnectable", "10-year lifespan"]
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
          Our Fire Safety Products
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
          High-quality equipment to protect your people and property
        </motion.p>
      </TitleWrapper>

      <ProductsGrid ref={ref}>
        {products.map((product, index) => (
          <ProductCard
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
            <ProductImage>
              <img src={product.img} alt={product.name} />
            </ProductImage>
            <ProductContent>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <FeaturesList>
                {product.features.map((feature, i) => (
                  <li key={i}>
                    <FeatureIcon>✓</FeatureIcon>
                    {feature}
                  </li>
                ))}
              </FeaturesList>
            </ProductContent>
          </ProductCard>
        ))}
      </ProductsGrid>

      <ExploreButton
        onClick={() => navigate('/products')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        Explore All Products
      </ExploreButton>
    </Container>
  );
};

// Styled Components
const Container = styled.section`
  padding: 5rem 7%;
  background: #fff;
  position: relative;
  overflow: hidden;
  text-align: center;

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

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 3rem auto;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled(motion.div)`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  text-align: left;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  }
`;

const ProductImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${ProductCard}:hover & img {
    transform: scale(1.05);
  }
`;

const ProductContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1.3rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 0.8rem;
  }

  p {
    font-size: 0.95rem;
    color: #666;
    line-height: 1.5;
    margin-bottom: 1rem;
    flex: 1;
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0 0;
  
  li {
    font-size: 0.9rem;
    color: #555;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: flex-start;
    line-height: 1.4;
  }
`;

const FeatureIcon = styled.span`
  color: #d32f2f;
  font-weight: bold;
  margin-right: 0.5rem;
`;

const ExploreButton = styled(motion.button)`
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

export default OurProducts;