import React from 'react'
import CardAturan from './../../Class/CardAturan';
import { Container, Row, Col } from 'reactstrap';

export default function Aturan() {
    return (
        <div>
            <Container>
                <Row>
                    <Col> 
                    <CardAturan/> 
                    <CardAturan/> 
                    <CardAturan/> 
                    <CardAturan/> 
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
