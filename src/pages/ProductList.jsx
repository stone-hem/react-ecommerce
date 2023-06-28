import { styled } from "styled-components"
import Nav from "../components/Nav"
import News from "../components/News"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"

const ProductList = () => {
    return (
        <Container>
            <News />
            <Nav />
            <Title>iPhones</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Phones</FilterText>
                    <Select>
                        <Option disabled selected>Color</Option>
                        <Option>white</Option>
                        <Option>Black</Option>
                        <Option>red</Option>
                        <Option>Gold</Option>
                        <Option>green</Option>
                        <Option>blue</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>Size</Option>
                        <Option>Small</Option>
                        <Option>Large</Option>
                        <Option>Medium</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Phones</FilterText>
                    <Select>
                        <Option disabled selected>Newest</Option>
                        <Option>ASC</Option>
                        <Option>DESC</Option>
                        <Option>Medium</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
        </Container>
    )
}

export default ProductList

const Container = styled.div`

`

const Title = styled.h1`
margin:20px;
`

const FilterContainer = styled.div`
display:flex;
justify-content:space-between;
margin:20px;
`

const Filter = styled.div`

`

const FilterText = styled.span`

`

const Select = styled.select`
padding:10px;
margin:20px;
`

const Option = styled.option`

`