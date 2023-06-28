import { styled } from "styled-components"
import Nav from "../components/Nav"
import News from "../components/News"
import Newsletter from "../components/Newsletter"
import { Add, Remove, ShoppingBasket } from "@material-ui/icons"

const Product = () => {
    return (
        <Container>
            <Nav />
            <News />
            <Wrapper>
                <ImgContainer>
                    <Image src='https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_960_720.jpg' />
                </ImgContainer>
                <InfoContainer>
                    <Title>
                        iPhone
                    </Title>
                    <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Desc>
                    <Price>20 Ksh</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="gray" />
                            <FilterColor color="black" />
                            <FilterColor color="blue" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <Select>
                                <Option disabled selected>Newest</Option>
                                <Option>ASC</Option>
                                <Option>DESC</Option>
                                <Option>Medium</Option>
                            </Select>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>Add to Cart  <ShoppingBasket/></Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
        </Container>
    )
}

export default Product

const Container = styled.div`

`

const Wrapper = styled.div`
padding:50px;
display:flex;
gap:50px;
`
const ImgContainer = styled.div`
flex:1;
`
const Image = styled.img`
width:100%;
height:65vh;
object-fit:cover;
`
const InfoContainer = styled.div`
flex:1;
`
const Title = styled.h1`

`

const Desc = styled.p`
margin:20px 0px;
`

const Price = styled.span`
font-weight:100;font-size:24px;
`

const FilterContainer = styled.div`
width:50%;
display:flex;
justify-content:space-between;
margin:30px 0px;

`

const Filter = styled.div`
display:flex;
align-items:center;
justify-content:center;
gap:10px;
`

const FilterTitle = styled.div`
font-size:20px;
font-weight:200;
`

const FilterColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
background:${props => props.color};
cursor:pointer;
`

const Select = styled.select`
padding:10px;

`

const Option = styled.option`

`

const AddContainer = styled.div`
width:50%;
display:flex;
align-items:center;
justify-content:space-between;
`

const AmountContainer = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
gap:10px;
`
const Amount = styled.span`
font-size:20px;
border:1px solid gray;
border-radius:8px;
padding:5px;
`

const Button = styled.button`
padding:10px;
display:flex;
align-items:center;
justify-content:center;
`