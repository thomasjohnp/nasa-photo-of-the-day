import React from "react";
import styled from "styled-components";
import { Card, CardBody, CardSubtitle, Badge } from "reactstrap";

const watDiv = styled.div`
  background-color: black;
`;
const NASABody = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  color: grey;
`;

const DescriptionText = styled.p`
  font-size: 1.5rem;
  width: 75%;
`;
const NASATitle = styled.h1`
  color: white;
  margin-top: 1.3rem;
  margin-bottom: 1.3rem;
  padding-bottom: 5px;
`;
const NASASubTitle = styled(CardSubtitle)`
  margin-top: 1.3rem;
  margin-bottom: 0.15rem;
  color: white;
  padding-top: 5px;
  font-size: 1.5rem;
`;
const NASAImg = styled.img`
  border: 1px solid black;
  box-shadow: 2px 2px 70px #888888;
`;
const NASACredit = styled(Badge)`
  color: #ababab;
  margin-bottom: 0.25rem;
  margin-top: 0.35rem;
`;
const NASACard = props => {
  return (
    <NASABody>
      <NASATitle>NASA Astronomy Photo of the Day</NASATitle>
      <CardBody>
        <a href={props.imgHDURL}>
          <NASAImg alt="NASA's Astronomy Photo of the Day" src={props.imgURL} />
        </a>
      </CardBody>
      <NASASubTitle>
        {props.imgTitle} ({props.imgDate})
      </NASASubTitle>
      <DescriptionText>{props.imgExplanation}</DescriptionText>
      <NASACredit color="dark">
        Image Credit {`&`} Copyright: {props.imgCopyright}
      </NASACredit>
    </NASABody>
  );
};

export default NASACard;
