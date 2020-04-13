import React from "react";
import { Container, Row as ReactstrapRow, Col } from "reactstrap";
import styled from "styled-components";


const Row = styled(ReactstrapRow)`
  margin: 12rem 0;
`
const SubTitle = styled.h2`
  text-align: center;
  font-size: 1.6rem;
  font-weight: ${(props) => props.theme.thin};
  text-transform: uppercase;
  letter-spacing: 1em;
`;
const Content = styled.p`
  text-align: center;
  font-size: 3.6rem;
  font-weight: ${(props) => props.theme.regular};
  line-height: 1.6;
  letter-spacing: 0.05em;
`;

/**
 * @param {string} data - Object with values subTitle && content
 * @param {string} subTitle - String
 * @param {string} content - String
 */

const CenteredParagraph = ({ data }) => {
  return (
    <Container>
      <Row>
        <Col sm="12" md={{ size: 8, offset: 2 }}>
        <SubTitle>{data.subTitle}</SubTitle>
        </Col>

        <Col sm="12" className="mt-4">
          <Content>{data.content}</Content>
        </Col>
      </Row>
    </Container>
  );
};

export default CenteredParagraph;
