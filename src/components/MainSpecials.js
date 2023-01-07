import {Container, Row, Col, Button, Card} from 'react-bootstrap'
import GreekSalad from '../assets/greek salad.jpg'
import Bruschetta from '../assets/restauranfood.jpg'
import LemonDesert from '../assets/lemon dessert.jpg'




export default function MainSpecials(){

    const cards = [
        {
            title: "Greek salad",
            image: GreekSalad,
            price: "$12.99",
            text:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
        },
        {
            title: "Bruchetta",
            image: Bruschetta,
            price: "$ 5.99",
            text: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
        },
        {
            title: "Lemon Dessert",
            image: LemonDesert,
            price: "$ 5.00",
            text: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        }
    ]


    const cardItems = cards.map((card) => {
        return(
            <Card style={{ width: '18rem' }} key={card.text}>
                <Card.Img variant="top" src={card.image} width="200" height="180" style={{width: "100%", height: "240px"}}></Card.Img>
                <Card.Body>
                    <Card.Title><span>{card.title}</span> <span>{card.price}</span> </Card.Title>
                    <Card.Text> {card.text} </Card.Text>
                </Card.Body>
                <Card.Footer>Order a delivery</Card.Footer>
            </Card>
        )
    })



    return (
        <>
            <Container className="mainSpecialsSection">
                <Row>
                    <Col xs={6}>
                        <h1>This Week Specials</h1>
                    </Col>
                    <Col xs={6}>
                        <Button variant="warning"> Online Menu</Button>
                    </Col>
                </Row>
                    
                <Row className="cardSection">
                {cardItems}
                </Row>

            </Container>
        </>
    )
}