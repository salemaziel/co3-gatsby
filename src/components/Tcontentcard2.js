import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.28), rgba(0, 0, 0, 0.7)),
    url(${props => props.bgPhoto});
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.08);
  flex-direction: column;
  background-position: center center;
  align-items: center;
  position: relative;
  justify-content: center;
  width: 200px;
  min-height: 350px;
  display: flex;
  flex-flow: column;
  background-color: #ecf0f1;
  border-radius: 0.25rem;
  margin: 1rem;
  transition: 0.25s;
  z-index: 10;
  cursor: pointer;

  &:hover {
        transform: scale3d(1.1, 1.1, 1.1);
        transform: scale(1.1);
        box-shadow: 0 10px 10px -10px rgba(#7f8c8d, 1);
        filter: brightness(1.5);
  }
`;




const Content = styled.div`
  justify-content: space-between;
  align-items: flex-end;
  color: white;
  margin-top: 40px;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  `;

const Title = styled.span`
  font-size: 24px;
  font-weight: 900;
  display: block;
  margin-bottom: 8px;
  color: ${props => props.color};
`;

const TagContainer = styled.div`
  position: static;
  top: 30px;
  right: 20px;
  background-color: ${props => props.tagBg};
  color: ${props => props.tagColor};
  font-size: 1.5rem;
  font-weight: 500;
  text-transform: uppercase;
  padding: 1.5rem;
  width: 50%;
  height: 100%;
  border-radius: 90px;
  text-align: center;
  color: white;
`;

const TagText = styled.div``;

const IconContainer = styled.div`
  cursor: pointer;
  color: ${props => props.color};
`;

const Tcontentcard2 = ({
  title,
  titleColor = "white",
  tag,
  tagBg = "#000000",
  tagColor = "white",
  bottomIconName,
  bottomIconSize = 1,
  bottomIconColor = "white",
  centerIconName,
  centerIconSize = 3,
  centerIconColor = "white",
  bgPhoto,
  onClick,
}) => (
  <Container bgPhoto={bgPhoto} onClick={onClick}>
    
    {tag && (
      <TagContainer tagBg={tagBg} tagColor={tagColor}>
        <TagText>{tag}</TagText>
      </TagContainer>
    )}
    {centerIconName && (
      <IconContainer color={centerIconColor}>
        <i className={`${centerIconName} fa-${centerIconSize}x`} />
      </IconContainer>
    )}
    
    {(title) && (
      <Content>
          
        <ContentColumn>
            
          {title && <Title color={titleColor}>{title}</Title>}
          
        </ContentColumn>
        {bottomIconName && (
          <IconContainer color={bottomIconColor}>
            <i className={`${bottomIconName} fa-${bottomIconSize}x`} />
          </IconContainer>
        )}
      </Content>
    )}
  </Container>
);

Tcontentcard2.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  tag: PropTypes.string,
  tagBg: PropTypes.string,
  bottomIconName: PropTypes.string,
  bottomIconSize: PropTypes.number,
  centerIconName: PropTypes.string,
  centerIconSize: PropTypes.number,
  bottomIconColor: PropTypes.string,
  centerIconColor: PropTypes.string,
  bgPhoto: PropTypes.string,
  onClick: PropTypes.string
};

export default Tcontentcard2;
