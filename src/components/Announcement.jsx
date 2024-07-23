import styled from "styled-components"
import {mobile, tablet} from "../responsive"

const Container = styled.div`
    width: 100%;
   padding: 0 15px;
    height:30px;
    background-color:teal;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:14px;
    font-weight:bolder;
    
    ${mobile({ padding: "0 10px" })}
    ${tablet({ padding: "0 10px" })}
    

 
    
`

const Announcement = () => {
  return (
    <Container>
    Super Deal! Free Shipping on Orders Over $30

    </Container>
  )
}

export default Announcement