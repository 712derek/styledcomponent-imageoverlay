import React from "react";
import styled from "styled-components";

import image from "./image/image.jpeg";

const ImageSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  /* position: relative; */
  width: 95%;
  max-width: 60vw;
  margin: auto;
  overflow: hidden;
`;

const ContentOverlay = styled.div`
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-in-out 0s;
`;

const Image = styled.img`
  width: 50vw;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 50vw;

  &:hover {
    ${ContentOverlay} {
      visibility: visible;
      opacity: 1;

      color: white;
      background: rgba(0, 0, 0, 0.8);
    }
  }
`;

const ImageOverlay = () => {
  return (
    <ImageSection>
      <ImageWrapper>
        <Content>
          <ContentOverlay>
            <h1>Image Title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae labore hic, numquam libero adipisci pariatur? Maiores
              dolores molestiae aliquid odio.
            </p>
          </ContentOverlay>
        </Content>
        <Image src={image} />
      </ImageWrapper>
    </ImageSection>
  );
};

export default ImageOverlay;
