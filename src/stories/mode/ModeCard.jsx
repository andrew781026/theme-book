import React from "react";
import styled from "styled-components";
import avatarImg from "../../assets/img/ania.webp";

const avatarInfo = {
  img: avatarImg,
  title: '阿尼雅',
  description: '小學生',
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
  color: #f68809;
`;

const CardWrap = styled.div`
  height: 400px;
  width: 300px;
  border-radius: 8px;
  transition: background-color 0.3s;
  background-color: ${(props) => props.theme.mode === "dark" ? "#f7fb8d" : "#f7c81c"};
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Description = styled.span`
  color: #585858;
`;

const TumblerWrapper = styled.span`
  cursor: pointer;
  position: absolute;
  right: 20px;
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

const ToyIcon = () => (
  <span className="icon-toy"><span className="path1"></span><span className="path2"></span><span
    className="path3"></span><span className="path4"></span><span className="path5"></span><span
    className="path6"></span></span>
);

const BookIcon = () => (
  <span className="icon-book"><span className="path1"></span><span className="path2"></span><span
    className="path3"></span><span className="path4"></span><span className="path5"></span><span
    className="path6"></span><span className="path7"></span><span className="path8"></span><span
    className="path9"></span></span>
);

const Tumbler = styled.div`
  top: 2.5px;
  left: ${(props) => (props.theme.mode === "dark" ? "30px" : "3px")};
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
    <ToyIcon/>
    <BookIcon/>
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
