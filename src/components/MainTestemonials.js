import {Container, Row, Col, Botton, Card, CardGroup, Figure} from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
import Kelly from '../assets/kelly.jpg'
import Claire from '../assets/clarie.jpg'
import Marta from '../assets/marta.jpg'
import Andrea from '../assets/andrea.jpg'


function TestemonialCard({name,text, img}){
    return (
        <>
            <Col>
            <Figure className="testemonialsWrapper" style={{float: "left"}}>
                <Figure.Image
                width={60}
                height={70}
                alt="171x180"
                src={img}
                style={{borderRadius: "10px"}}
                >

                </Figure.Image>

            <Figure.Caption>
            <ReactStars
                count={5}
                size={24}
                activeColor="#ffd700"
                color="#ffd700"
            />
                <h5>{name}</h5>
                <p>{text}</p>
            </Figure.Caption>
            </Figure>
            </Col>
        </>
    )
}


export default function Testemonials(){

    const testemonials = [
        {
            img: Kelly,
            name: "Kelly Doe",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has"
        },
        {
            img: Marta,
            name: "Marta Doe",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has"
        },
        {
            img: Claire,
            name: "Claire Doe",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has"
        },
        {
            img: Andrea,
            name: "Andrea Doe",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has"
        },
    ]

    const testemonialsItems = testemonials.map(i => <TestemonialCard name={i.name} text={i.text} img={i.img} key={i.name} />)

    return(
        <>
            <div className="mainTestemonials">
                <Container>
                    <h1>Testemonials</h1>
                    <Row xs={1} sm={2} md={2} lg={4}>
                        {testemonialsItems}
                    </Row>
                </Container>
            </div>
        </>
    )
}