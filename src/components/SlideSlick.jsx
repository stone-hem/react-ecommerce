import { styled } from 'styled-components'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { sliderData } from '../data';
const SlideSlick = () => {


    return (
            <Container>
                <Carousel width='100%' autoPlay infiniteLoop >
                    {sliderData.map((item)=>(
                         <Slide bgcolor={item.bgColor} key={item.id}>
                         <ImageContainer>
                             <Image src={item.image} />
                         </ImageContainer>
                         <DataContainer>
                             <Title>{item.title}</Title>
                             <Desc>{item.desc}</Desc>
                             <Button>More</Button>
                         </DataContainer>
                     </Slide>
                    ))}
                </Carousel>
            </Container>
       
    )
}

export default SlideSlick

const Container = styled.div`

`


const Slide = styled.div`
width:100vw;
height:65vh;
display:flex;
align-items:center;
background-color:#${props => props.bgcolor}
`

const ImageContainer = styled.div`
width:100%;
height:100%;
flex:1;
`
const Image = styled.img`
object-fit:cover;
width:100%;
`

const DataContainer = styled.div`
flex:1;
padding:50px;
`
const Title = styled.h1`
font-size:70px;
`
const Desc = styled.p`
margin:50px 0px;
font-size:16px;
font-weight:300;
letter-spacing:1px;
`
const Button = styled.button`
padding:6px 8px;
font-size:18px;
border:none;
background-color:white;
color:grey;
cursor:pointer;
font-weight:600;
`