import React from 'react'

import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
import CardComp from './CardComp';

function AboutComp() {
    return (
        <div>
            <Container>
            <Jumbotron>
                <h1 className="display-3">About</h1>
                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
              <p className="det">red content or information.</p>
                <hr className="my-2" />
                    <p><Button color="primary">Learn More</Button></p>
            </Jumbotron>
            </Container>



</div>
)
}

export default AboutComp; 