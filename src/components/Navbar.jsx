import React from 'react';
import styled from 'styled-components';
import { Badge } from '@mui/material';
import { ShoppingCartOutlined, Search as SearchIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import {mobile} from "../responsive"

const Container = styled.div`
    height:60px;
    ${mobile({ height: "50px" })}
    

`;
const Wrapper = styled.div`
    padding:10px 20px;
    display:flex;
    align-items:center;
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
    
 `;

const StyledInput = styled.input`
    border:none;
    ${mobile({ width: "50px" })}
`
const Center = styled.div`
    flex:1;
    text-align:center;
`;
const Logo = styled.h1`
    font-weight:bold;
    ${mobile({ fontsize: "24px" })}
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
    margin-left:25px;
    color: black;
    text-decoration: none;
    &:hover {
    color: #31b9b9;
  };
    ${mobile({ fontSize: "12px", marginleft: "10px" })}
`;
const CartMenuItem = styled.div`
  margin-right: 25px;
`;

const CartIcon = styled(ShoppingCartOutlined)`
  font-size: 30px;
`;

const CartBadge = styled(Badge)`
  .MuiBadge-badge {
    right: -10px;
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
                <MenuItem to="/cart">
                <Badge badgeContent={4} color="primary">
                 <ShoppingCartOutlined />
                </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
       
        </Container>
  )
}

export default Navbar