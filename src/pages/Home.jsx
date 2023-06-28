import Categories from "../components/Categories"
import Nav from "../components/Nav"
import News from "../components/News"
import Newsletter from "../components/Newsletter"
import Products from "../components/Products"
import SlideSlick from "../components/SlideSlick"


const Home = () => {
  return (
    <div>
      <News />
      <Nav />
      <SlideSlick />
      <Categories />
      <Products/>
      <Newsletter/>
    </div>
  )
}

export default Home