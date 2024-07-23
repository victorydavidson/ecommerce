import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import { useState } from 'react';
import styled from "styled-components";
import { sliderItems } from '../data';
import {mobile, tablet} from "../responsive"


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    
    
    
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${(props) => props.$slideIndex * -100}vw);
    transition: all 1.5s ease;

    
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
    ${mobile({ width: "40%"})}
    ${tablet({ width: "50%" })}
    
`;

const Image = styled.img`
    height: 80%;
    ${tablet({ height: "90%" })}
    
` ;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    ${mobile({ padding: "8px"})}
    ${tablet({ padding: "13px" })}
`;

const Title = styled.h1`
    font-size: 65px;

    ${mobile`
    font-size: 13px;
  `}

  ${tablet`
    font-size: 28px;
    
  `}
`;

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    
    

    ${mobile`
    font-size: 10px;
    font-weight:600;
  `}

  ${tablet`
    font-size: 15px;
    font-weight:800;
    color:white;
    
    
  `}
`;

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;

    ${mobile`
    padding: 5px;
    font-size: 20px;
    &:hover{
        background-color: teal;
        color: white;
    }
  `}

  ${tablet`
    padding: 7px;
    font-size: 25px;
    &:hover{
        background-color: teal;
        color: white;
    }
  `}
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const length = sliderItems.length;

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : length - 1);
        } else {
            setSlideIndex(slideIndex < length - 1 ? slideIndex + 1 : 0);
        }
    };

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper $slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide $bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>SHOP NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    );
};

export default Slider;
