import { styled } from "styled-components"

const Register = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src="https://cdn.pixabay.com/photo/2015/05/28/14/38/ux-787980_960_720.jpg" />
      </ImageContainer>
      <Wrapper>
        <Title>Sign Up for Free!</Title>
        <Form>
          <Input placeholder="username" name="username" autoComplete="false"  />
          <Input placeholder="email" type="email" name="email" autoComplete="false"  />
          <Input placeholder="password" type="password" name="password" autoComplete="false"  />
          <Input placeholder="Confirm Password" type="password" name="confirmPassword" autoComplete="false"  />
          <Agree>
            By creating this account you agree with the <b>Privacy Policy Terms</b>
          </Agree>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register

const Container = styled.div`
width:100dvw;
height:100dvh;
display:flex;
`

const Wrapper = styled.div`
padding:20px;
flex:1;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
gap:40px;
`
const Title = styled.h1`

`

const Form = styled.form`
display:flex;
justify-content:flex-start;
flex-direction:column;
gap:20px;
`

const Input = styled.input`
border:none;
border-radius:8px;
padding:10px;
background:rgba(0,0,0,0.1);
`
const Agree = styled.p`

`

const Button = styled.button`
padding:10px;
border:none;
font-size:15px;
`
const ImageContainer = styled.div`
flex:1;
`

const Image = styled.img`
width:100%;
height:100%;
object-fit:cover;
`