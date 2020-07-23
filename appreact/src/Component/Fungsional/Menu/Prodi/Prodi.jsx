import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
import React from 'react'
import CardComp from './CardComp';

function Prodi() {
    return (

        <div>

            <Container>
                <Jumbotron>
                    <h1 className="display-3">Tentang Program Studi</h1>
                    <p className="lead">SMK N 31 SEMARANG</p>
                    <hr className="my-2" />
                    <p>
                        Tujuan Kompetensi Keahlian Desain Pemodelan dan Informasi Bangunan adalah membekali peserta didik dengan keterampilan, pengetahuan dan sikap agar kompeten:
                        Melakukan pekerjaan sebagai Drafter/Juru Gambar dalam pekerjaan perencanaan bangunan
                        Melakukan pekerjaan sebagai Drafter/Juru Gambar dalam pekerjaan pelaksanaan bangunan
                        Melakukan pekerjaan jasa penggambaran bangunan secara mandiri / berwirausaha di Studio Gambar</p>

                </Jumbotron>
                <Container>
                    <Row>
                        <Col>
                            <CardComp id="1"
                                judul="Teknik Komputer"
                                tanggal="24/06/2020"
                                detail="Merupakan Teknik Komputer yanng terbaik" />
                        </Col>

                        <Col>
                            <CardComp id="2"
                                judul="Teknik Software"
                                tanggal="25/06/2020"
                                detail="Merupakan Teknik Software yanng terbaik" />
                        </Col>

                        <Col>
                            <CardComp id="3"
                                judul="Teknik Jaringan"
                                tanggal="25/06/2020"
                                detail="Merupakan Teknik Jaringan yanng terbaik" />
                        </Col>
                    </Row>
                </Container>
            </Container>
            
               
    </div>)}


export default Prodi