import React from "react";
import styled from "styled-components";
import Banner from "../components/homeComponents/Banner";
import WelcomeMessage from "../components/homeComponents/WelcomeMessage";
import Projects from "../components/homeComponents/Projects";
import Clients from "../components/homeComponents/Clients";
import Products from "../components/homeComponents/Products";
import SuccessStories from "../components/homeComponents/SuccessStories";
import ScheduleCall from "../components/homeComponents/ScheduleCall";

const Home = () => {
  return (
    <Container>
      <div className="section"><Banner /></div>
      <div className="section"><WelcomeMessage /></div>
      <div className="section"><Clients /></div>
      <div className="section"><Projects /></div>
      <div className="section"><Products /></div>
      <div className="section"><SuccessStories /></div>
      <div className="section"><ScheduleCall /></div>
    </Container>
  );
};
const Container = styled.div`
  padding: 0;
   overflow-x: hidden;
  .section {
    margin-bottom: 0rem; 
  }

  .section:last-child {
    margin-bottom: 0;
  }
`;

export default Home;