import  styled from "styled-components"
import CategoryItem from "./CategoryItem"
import { categoryData } from "../data"

const Categories = () => {
  return (
    <>
    <h1 style={{ textAlign:'center' }}>Categories</h1>
    <Container>
      {categoryData.map((item)=>(
        <CategoryItem item={item} key={item.id}/>
      ))}
      
    </Container>
    </>
  )
}

export default Categories

const Container=styled.div`
display:flex;
justify-content:space-between;
padding:20px;
`