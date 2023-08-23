import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
// Components
import { Container } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import ContactForm from "./ContactForm";
import { Alert, Button, Form, Spinner } from "react-bootstrap";

const StyledSection = styled.section`
  min-height: 50vh;
  padding-top: var(--nav-height);
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  
`;

export const Col1 = styled.div`
  width: 300px;
  /* border: 1px solid #2d2d2d; */
  display: flex;
  justify-content: center;
  
`;

export const Col2 = styled.div`
  width: 300px;
  // border: 1px solid #2d2d2d;
  display: flex;
  justify-content: center;
`;

export default function Contact() {
  return (
    <Element name={"Contact"} id="contact">
      <StyledSection className="d-flex flex-column justify-content-center">
        <Container className="d-flex">
          <Title>
            <h2 className="JuanaRegualarThree">Contact Me</h2>
            {/* <div className="underline"></div> */}
          </Title>
        </Container>
        <Container>
        <Row>
          <Col1 className="heroA">Phone: Plus Three Four 661023622</Col1>
          <Col2 className="heroA">Email: sebastian.sibila at gmail.com</Col2>
        </Row>
          {/* <ContactForm /> */}
        </Container>
      </StyledSection>
    </Element>
  );
}
