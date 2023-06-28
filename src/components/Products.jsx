import { styled } from "styled-components"
import { productData } from "../data"
import Product from "./Product"

const Products = () => {
  return (
    <>
    <h1 style={{ textAlign:'center' }}>Products</h1>
    <Container>
        {productData.map((item)=>(
            <Product item={item} key={item.id}/>
        ))}
    </Container>
    </>
  )
}

export default Products

const Container=styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-between;
padding:20px;
`