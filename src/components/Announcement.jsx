import styled from "styled-components"
import {mobile, tablet} from "../responsive"

const Container = styled.div`

    height:30px;
    background-color:teal;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:14px;
    font-weight:bolder;
    
   
`

const Announcement = () => {
  return (
    <Container>
    Super Deal! Free Shipping on Orders Over $30

    </Container>
  )
}

export default Announcement