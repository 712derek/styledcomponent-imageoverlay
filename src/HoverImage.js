import React from "react";
import styled from "styled-components";

import image from "./image/image.jpeg";

const Container = styled.div`
  padding: 1em 0;
  float: left;
  width: 50%;
`;

const ContentOverlay = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  height: 99%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  transition: all 0.4s ease-in-out 0s;
`;

const ContentImage = styled.img`
  width: 100%;
`;

const ContentDetails = styled.div`
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 100%; // play with this value for fade direction
  left: 50%;
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-in-out 0s;

  h3 {
    color: #fff;
    font-weight: 500;
    margin-bottom: 0.5em;
    text-transform: uppercase;
  }

  p {
    color: #fff;
    font-size: 0.8em;
  }
`;

const Content = styled.div`
  position: relative;
  width: 90%;
  max-width: 400px;
  margin: auto;
  overflow: hidden;

  &:hover {
    ${ContentOverlay} {
      opacity: 1;
    }
    ${ContentDetails} {
      top: 50%; // play with this value for fade direction
      left: 50%;
      opacity: 1;
    }
  }
`;

const details = [
  {
    title: "This is a title",
    text: "This is some text",
    image: image,
  },
];

const HoverImage = () => {
  return (
    <>
      <Container>
        {details.map((item, index) => (
          <Content>
            <ContentOverlay />
            <ContentDetails key={index}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </ContentDetails>
            <ContentImage src={item.image} />
          </Content>
        ))}
      </Container>
    </>
  );
};

export default HoverImage;
