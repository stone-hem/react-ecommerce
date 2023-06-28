import { FavoriteBorderOutlined, SearchOutlined, ShoppingBasketOutlined } from "@material-ui/icons"
import { styled } from "styled-components"

const Product = ({item}) => {
  return (
    <Container>
         <Image src={item.image}/>
         <Info>
            <Icon>
                <ShoppingBasketOutlined/>
            </Icon>
            <Icon>
                <SearchOutlined/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
         </Info>
         <Title>{item.title}</Title>
    </Container>
  )
}

export default Product
const Info=styled.div`
opacity:0;
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
display:flex;
align-items:center;
justify-content:center;
background:rgba(0,0,0,0.2);
transition:all 1s ease;

`

const Title=styled.h3`
position:absolute;
top:0;
left:0;
color:white;
`

const Container=styled.div`
flex:1;
margin:4px;
min-width:280px;
height:350px;
display:flex;
align-items:center;
justify-content:center;
background-color:#f5fbfd;
position:relative;
&:hover ${Info}{
    opacity:1;
}
`

const Image=styled.img`
width:100%;
height:100%;
object-fit:cover;
`




const Icon=styled.div`
width:40px;
height:40px;
border-radius:50%;
background:white;
display:flex;
align-items:center;
justify-content:center;
margin:10px;
transition:all 0.5s ease;
&:hover{
    background-color:#f5fbfd;
    transform:scale(1.1);
}
cursor:pointer;
`



