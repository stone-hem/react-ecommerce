import { styled } from "styled-components"

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src={item.image}/>
      <Info>
        <Title>{item.title}</Title>
        <Button>View...</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem


const Container=styled.div`
flex:1;
margin:4px;
height:40vh;
position:relative;
`

const Image=styled.img`
width:100%;
height:100%;
object-fit:cover;
`

const Info=styled.div`
position:absolute;
top:50%;
left:25%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`

const Title=styled.h1`
color:white;
margin-bottom:20px;
`

const Button=styled.button`
padding:6px 8px;
font-size:18px;
border:none;
background-color:white;
color:grey;
cursor:pointer;
font-weight:600;
`