import {Container, Row, Col, Button, Card} from 'react-bootstrap'
import MarioAndAdrian from '../assets/Mario and Adrian A.jpg'

export default function MainLemon(){
    return(
        <>
            <Container className="mainLemonSection">
                <Row>

                    <Col>
                        <h1>Liitle Lemon</h1>
                        <h3>Chicago</h3>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                    </Col>

                    <Col>
                        <img src={MarioAndAdrian} alt="Mario and Adrian" width="440" height="320" />   
                    </Col>
                </Row>
            </Container>
        </>
    )
}