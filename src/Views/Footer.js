import FooterMenu from "../components/FooterMenu"
import FooterContact from "../components/FooterContact"
import FooterSocialMedia from "../components/FooterSocialMedia"
import {Container,Row, Col} from 'react-bootstrap'



function Footer(){
    return(
        <footer>

        <Container>
            <Row>
                <Col><FooterMenu /></Col>
                <Col><FooterContact /></Col>
                <Col> <FooterSocialMedia /> </Col>
            </Row>

        </Container>
        
        

        </footer>
    )
}

export default Footer