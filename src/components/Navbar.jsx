import React from 'react';
import styled from 'styled-components';
import { Badge } from '@mui/material';
import { ShoppingCartOutlined, Search as SearchIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import {mobile} from "../responsive"

const Container = styled.div`
    height:60px;
    overflow: hidden;
    box-sizing: border-box;
    ${mobile({ height: "50px" })}
    

`;
const Wrapper = styled.div`
    padding:10px 20px;
    display:flex;
    align-items:center;
   box-sizing: border-box;
    justify-content:space-between;
    ${mobile({ padding: "10px 0px" })}

`;
const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
`;
const Language = styled.span`
    font-size:14px;
    cursor:pointer;
    ${mobile({ display: "none" })}
 `;
 const SearchContainer = styled.div`
    border:0.5px solid lightgray;
    display:flex;
    align-items:center;
    margin-left:25px;
    padding:5px;
    box-sizing: border-box;
    
 `;

const StyledInput = styled.input`
    border:none;
    box-sizing: border-box;
    ${mobile({ width: "52px" })}
`
const Center = styled.div`
    flex:1;
    text-align:center;
`;
const Logo = styled.h1`
    font-weight:bold;
    ${mobile({ fontsize: "20px" })}
`;
const Right = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    ${mobile({ flex:1, justifyContent: "center" })}
`;
const MenuItem = styled(Link)`
    font-size: 14px;
    cursor:pointer;
    margin-left:20px;
    color: black;
    text-decoration: none;
    &:hover {
    color: #31b9b9;
  };
    ${mobile({ fontSize: "13px", marginleft: "10px" })}
`;
const CartMenuItem = styled.div`
  margin-right: 20px;
  ${mobile({ fontSize: "5px" })}
`;

const CartIcon = styled(ShoppingCartOutlined)`
  font-size: 30px;
`;

const CartBadge = styled(Badge)`
  .MuiBadge-badge {
    right: -6px;
    top: 13px;
    padding: 0 4px;
    
  }
`;


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <StyledInput placeholder="Search" />
                    <SearchIcon style={{color:"gray", fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center><Logo>FASHION.</Logo></Center>
            <Right>
                <MenuItem to="/register">REGISTER</MenuItem>
                <MenuItem to="/login">SIGN IN</MenuItem>
                <CartMenuItem to="/cart">
                <CartBadge badgeContent={4} color="primary">
                 <ShoppingCartOutlined style={{fontSize:27, marginLeft:5}} />
                </CartBadge>
                </CartMenuItem>
            </Right>
        </Wrapper>
       
        </Container>
  )
}

export default Navbar