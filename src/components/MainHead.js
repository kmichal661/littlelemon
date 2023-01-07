import {Button} from 'react-bootstrap'
import MainImage from '../assets/restauranfood.jpg'

export default function MainHead(){
    return(
        <div className="mainHeadSection">

        
            <div className="container ">
                    <div className="row">
                            <div className="col">
                                <h1>Little Lemon</h1>
                                <h2>Chicago</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <Button variant="warning">Reserve a Table</Button>            
                            <div/>
                            
                        </div>
                        <div className="col imageSection">
                                <div className="imageWrapper">
                                    <img src={MainImage} alt="mainImage" width="240" height="320" />
                                </div>
                            </div>
                    </div>
                </div>
            </div>
    )
}