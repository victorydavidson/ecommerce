import { EmailOutlined, Facebook, Instagram, PhoneOutlined, Pinterest, RoomOutlined, Twitter } from "@mui/icons-material";
import styled from "styled-components";
import {mobile, tablet} from "../responsive"

const Container = styled.div`
    display: flex;
    ${mobile({ FlexDirection: "column" })}
    ${tablet({ FlexDirection: "column" })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
    margin: 20px 0px;
    ${mobile({ margin: "10px" })}
    ${tablet({ margin: "10px" })}
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    ${mobile({ width: "30px", height: "30px", marginRight: "5px" })}
    ${tablet({ width: "30px", height: "30px", marginRight: "5px" })}
`;

const Center = styled.div`
     flex: 1;
     padding: 20px;
     ${mobile({ display: "none" })}
     ${tablet({ display: "none" })}
`;
 
const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
     flex: 1;
     padding: 20px;
     ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>FASHION.</Logo>
            <Desc>
              There are many variations of passages of Lorem Ipsum available, but
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don’t look even slightly believable.
            </Desc>
            <SocialContainer>
                <SocialIcon color="385999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men Fashion</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Privacy Policy</ListItem>
                <ListItem>Terms & Conditions</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact Us</Title>
            <ContactItem>
                <RoomOutlined style= {{ marginRight: "10px" }} />
                255 Arror Way, South Tobinchester
            </ContactItem>
            <ContactItem>
                <PhoneOutlined style={{ marginRight: "10px" }} />
                +91 9876543210
            </ContactItem>
            <ContactItem>
                <EmailOutlined style={{ marginRight: "10px" }} />
                contact@gmail.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
    </Container>
  );
};

export default Footer;
