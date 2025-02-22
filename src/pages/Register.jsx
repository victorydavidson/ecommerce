import styled from "styled-components"
import {mobile, tablet} from "../responsive"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.5), 
    rgba(255, 255, 255, 0.5)) ,
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

`;
const Wrapper = styled.div`
    width: 40%;
    max-height: 90vh; 
    padding: 20px;
    background-color: white;
    overflow-y: auto;
    ${mobile({ width: "75%" , padding: "10px"})}
    ${tablet({ width: "60%" , padding: "10px"})}
`;
const Title= styled.h1`
    font-size: 24px;
    font-weight: 300;
    ${mobile({ fontSize: "20px", margin: "10px 0" })}
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;


const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input type="text" placeholder="Name" />
                <Input type="text" placeholder="Last Name" />
                <Input type="text" placeholder="UserName" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Input type="password" placeholder="Confirm Password" />
                <Agreement>
                 By creating an account, I consent to the processing of my personal
                 data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button type="submit">CREATE</Button>

            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register