import React, { PureComponent } from 'react';
import axios from 'axios'
import qs from 'querystring'
import { Table, Button, Container, NavLink, Alert } from 'reactstrap'
import { Link } from 'react-router-dom'
import { type } from 'os'

const api = 'http://localhost:3001'

class ListComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            siswa: [],
            response: '',
            display: 'none'
        }
    }

    componentDidMount() {
        axios.get(api + '/tampil').then(res => {
            this.setState({
                siswa: res.data.values
            })
        })
    }

    render() {
        return (
            <Container>
                <h2>Data siswa</h2>
                <hr />
                <Table className="table-bordered">
                    <thead>
                        <tr>

                            <th>NIS</th>
                            <th>Nama</th>
                            <th>Jurusan</th>
                            <th>Opsi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.siswa.map(siswa =>

                            <tr key={siswa.id_siswa}>
                                <td>{siswa.nim}</td>
                                <td>{siswa.nama}</td>
                                <td>{siswa.jurusan}</td>
                                <td>
                                    <Link to=
                                        {
                                            {
                                                pathname: '/siswa/edit',
                                                state: {
                                                    id_siswa: siswa.id_siswa,
                                                    nim: siswa.nim,
                                                    nama: siswa.nama,
                                                    jurusan: siswa.jurusan
                                                }
                                            }
                                        }>
                                        <Button> Edit </Button>

                                    </Link>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Container>
        );
    }
}

export default ListComp; 