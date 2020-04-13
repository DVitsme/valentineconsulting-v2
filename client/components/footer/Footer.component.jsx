import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";

const Footer = styled.footer`
  background-color: ${(props) => props.theme.lightBlack};
  color: ${(props) => props.theme.lightGray};
  position: relative;
  width: 100%;
  -webkit-box-flex: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
  p,
  a {
    color: ${(props) => props.theme.lightGray};
  }
  a:hover {
  }
  i {
    font-size: 3rem;
    line-height: 1.3;
    display: inline-block;
    margin: 0 1.5rem;
  }
  img {
    width: 15rem;
  }
`;
const AbsoluteFooter = styled.div`
  @media (min-width: 576px) {
    padding-bottom: 1rem;
  }
  background-color: ${(props) => props.theme.darkBlue};
  padding-bottom: 2.5rem;
  padding-top: 3.5rem;
  font-size: 0.75rem;
  line-height: 1.9;
  text-align: center;
`;
const FooterText = styled.a`
  :last-child::after {
    display: none;
  }
  ::after {
    @media (min-width: 1200px) {
      padding: 0 30px;
    }
    content: "/";
    font-size: 12px;
    font-weight: bold;
    position: relative;
    padding: 0 10px;
    color: ${(props) => props.theme.white};
  }

  padding: 25px 0;
  font-size: 1.5rem;
  font-weight: ${(props) => props.theme.bold};
  letter-spacing: 0.2em;
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  line-height: 1;
`;
const CopyrightContainer = styled.div`
  text-align: center;
  position: relative;
`;
const CopyrightText = styled.p`
  font-weight: ${(props) => props.theme.bold};
  text-transform: uppercase;
  font-size: 1.6rem;
`;

const FooterTheme = () => {
  return (
    <Footer className="mt-5">
      <AbsoluteFooter>
        <Container fluid>
          <Row>
            <Col sm={12} md={{ size: 6, offset: 3 }} className="my-4">
              <p>
                Morbi odio eros, volutpat ut pharetra vitae, lobortis sed nibh.
                Donec sed odio operae, eu vulputate felis rhoncus. Quo usque
                tandem abutere, Catilina, patientia nostra?
              </p>
            </Col>
          </Row>
          <Row className="my-5">
            <Col md={12}>
              <FooterText href="https://www.google.com">Facebook</FooterText>
              <FooterText href="https://www.google.com">Linkedin</FooterText>
              <FooterText href="https://www.google.com">twitter</FooterText>
              <FooterText href="https://www.google.com">instagram</FooterText>
            </Col>
          </Row>
        </Container>
        <CopyrightContainer className="my-4">
          <Container fluid>
            <Row>
              <Col>
                <Link href="/">
                  <a>
                    <CopyrightText>
                      {" "}
                      &#169; Valentine Consulting - {new Date().getFullYear()}
                    </CopyrightText>
                  </a>
                </Link>
              </Col>
            </Row>
          </Container>
        </CopyrightContainer>
      </AbsoluteFooter>
    </Footer>
  );
};

export default FooterTheme;
