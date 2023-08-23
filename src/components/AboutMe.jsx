import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import { Element } from "react-scroll";
// Data
import { moreInfo } from "../data";
// Components
import { Col, Container, Row } from "react-bootstrap";
import { Title, StyledRowDescription, SyledColDescriptionOne, SyledColDescriptionTwo } from "./globalStyledComponents";

const StyledAboutMe = styled.section`
  p {
    font-size: 1.25rem;
  }
  .img {
    width: 18rem;
    height: 18rem;
  }
`;

export default function AboutMe() {
  const { avatar_url, bio } = useSelector(selectData);

  return (
    <Element name={"About"} id="about">
      <StyledAboutMe className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              {/* <h2 className="JuanaRegualarOne">About Me</h2> */}
              {/* <div className="underline"></div> */}
            </Title>
          </Container>
          <StyledRowDescription><SyledColDescriptionOne  className="col-md-6 text-center">  <h2 className="JuanaRegualarOne">About Me</h2><p>   <p className="heroA">{bio}</p>
              {moreInfo && <p className="heroA">{moreInfo}</p>}</p></SyledColDescriptionOne><SyledColDescriptionTwo  className="col-md-6 text-center">  <img
                src={avatar_url}
                alt="GitHub Avatar"
                loading="lazy"
                className="mx-auto rounded-circle img"
              /></SyledColDescriptionTwo></StyledRowDescription>
          {/* <Row className="align-items-center mt-5">
            
            <Col className="d-flex flex-column text-center heroA">
              <p>{bio}</p>
              {moreInfo && <p>{moreInfo}</p>}
            </Col>
            <Col className="d-none d-sm-block">
              <img
                src={avatar_url}
                alt="GitHub Avatar"
                loading="lazy"
                className="mx-auto rounded-circle img"
              />
            </Col>
          </Row> */}
        </Container>
      </StyledAboutMe>
    </Element>
  );
}
