import { Badge } from '@material-ui/core'
import { Search, ShoppingBasket } from '@material-ui/icons'
import styled from 'styled-components'


const Nav = () => {
    return (
        <Container>
            <Wrapper>
                <Left><Language>
                    English</Language>
                    <SearchContainer>
                        <Input/>
                        <Search style={{ color:'gray',fontSize:'16px' }}/>
                    </SearchContainer>
                    </Left>
                <Center><Logo>@Smartify</Logo></Center>
                <Right>
                    <MenuLinks>Login</MenuLinks>
                    <MenuLinks>Register</MenuLinks>
                    <Badge badgeContent={5} color='primary'>
                        <ShoppingBasket/>
                    </Badge>
                </Right>
            </Wrapper>
        </Container>
    )
}



export default Nav

const Container = styled.div`
height:60px;
`

const Wrapper = styled.div`
padding: 10px 20px;
display:flex;
justify-content:space-between;
`

const Left = styled.div`
flex:1;
align-items:center;
display:flex;
`
const Language=styled.span`
font-size:14px;
cursor:pointer;
`

const SearchContainer=styled.div`
border:1px solid lightgray;
display:flex;
align-items:center;
margin-left:25px;
padding:5px;
`

const Input=styled.input`
border:none;
`

const Center = styled.div`
flex:1;
text-align:center;
`
const Logo=styled.h1`
font-weight:bold;
`

const Right = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
`

const MenuLinks=styled.div`
font-size:14px;
cursor:pointer;
margin-right:25px
`


