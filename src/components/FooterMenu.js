import RestauranFood from '../assets/restauranfood.jpg'
import {Container, Row, Col} from 'react-bootstrap'

export default function FooterMenu(){
    return(

        <>

        <Container className="footerMenu">
            <Row>
                <Col>
                <img src={RestauranFood} alt="footer logo" width="140" height="200" />  
                
                </Col>
                <Col>

                <h4>Navigation</h4>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservations</a></li>
                    <li><a href="#">Order Online</a></li>
                    <li><a href="#">Login</a></li>
                </ul>  
                </Col>
            </Row>
        </Container>
          </>
        )  
    }