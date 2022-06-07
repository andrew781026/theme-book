import React from "react";
import styled from "styled-components";
import avatarImg from "../../assets/img/your.jpeg";

const avatarInfo = {
  img: avatarImg,
  title: '約兒',
  description: '殺手',
}

const Avatar = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
`;

const Title = styled.span`
  font-size: 2rem;
  color: #00ffff;
`;

const CardWrap = styled.div`
  height: 400px;
  width: 300px;
  border-radius: 8px;
  transition: background-color 0.3s;
  background-color: ${(props) => props.theme.cardBgc};
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Description = styled.span`
  color: ${(props) => props.theme.descColor};
`;

const TumblerWrapper = styled.span`
  cursor: pointer;
  position: absolute;
  left: 20px;
  top: 20px;
  width: 60px;
  height: 30px;
  border-radius: 999px;
  padding: 3px 7px;
  background-color: #333;
  font-size: 20px;

  & > span:first-of-type {
    margin-right: 6px;
  }
`;

const KnifeIcon = () => (
  <span className="icon-knife">
    <span className="path1"></span>
    <span className="path2"></span>
    <span className="path3"></span>
    <span className="path4"></span>
    <span className="path5"></span>
    <span className="path6"></span>
    <span className="path7"></span>
    <span className="path8"></span>
    <span className="path9"></span>
  </span>
);

const RoseIcon = () => (
  <span className="icon-rose">
    <span className="path1"></span>
    <span className="path2"></span>
    <span className="path3"></span>
    <span className="path4"></span>
    <span className="path5"></span>
    <span className="path6"></span>
    <span className="path7"></span>
    <span className="path8"></span>
    <span className="path9"></span>
    <span className="path10"></span>
    <span className="path11"></span>
  </span>
);

const Tumbler = styled.div`
  top: 1.5px;
  left: ${(props) => props.theme.tumblerLeft};
  position: absolute;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: #fff;
  transition: 0.3s;
`;

const Toggle = (props) => (
  <TumblerWrapper onClick={props.toggleMode}>
    <Tumbler/>
    <KnifeIcon/>
    <RoseIcon/>
  </TumblerWrapper>
);

class ModeCard extends React.PureComponent {
  render() {
    return (
      <CardWrap>
        <Toggle toggleMode={this.props.toggleMode}/>
        <Avatar src={avatarInfo.img} alt={avatarInfo.title}/>
        <Title>{avatarInfo.title}</Title>
        <Description>{avatarInfo.description}</Description>
      </CardWrap>
    );
  }
}

export default ModeCard;
