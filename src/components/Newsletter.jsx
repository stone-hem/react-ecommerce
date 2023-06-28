import {  SendOutlined } from "@material-ui/icons"
import { styled } from "styled-components"

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates, partner with us</Desc>
        <InputContainer>
        <Input placeholder="Your Email"/>
        <Button><SendOutlined/></Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter

const Container=styled.div`
background:#C2DEDC;
margin:0px 20px 0px 20px;
height:60vh;
display:flex;
gap:20px;
align-items:center;
justify-content:center;
flex-direction:column;
`

const Title=styled.h1`

`

const Desc=styled.p`

`

const InputContainer=styled.div`
width:50%;
height:40px;
background-color:white;
display:flex;
justify-content:space-between;
`

const Input=styled.input`
flex:8;
height:40px;
border:none;
padding-left:20px;
`

const Button=styled.button`
flex:1;
background:#0077b6;
color:white;
`