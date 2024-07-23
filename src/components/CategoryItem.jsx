import styled  from "styled-components"
import { useNavigate } from 'react-router-dom';
import {mobile,tablet} from "../responsive"

const Container = styled.div`
    flex:1;
    margin:3px;
    height:70vh;
    position:relative;
    margin-top: 1px;
   
`;
const Image = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
    ${mobile({ height: "40vh"})};
    ${tablet({ height: "70vh"})};
    
`;
const Info = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    color:white;

`;
const Title = styled.h1`
    color:white;
    margin-bottom:20px;
   
    
`;
const Button = styled.button`
    border: teal;
    padding:15px;
    background-color:wheat;
    color:black;
    cursor:pointer;
    font-weight:600;
    &:hover{
        background-color: teal;
        color: white;
    }

    
`;

const CategoryItem = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/product-list');
  };

  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button onClick={handleClick}>SHOP NOW</Button>
      </Info>
    </Container>
  );
}


export default CategoryItem