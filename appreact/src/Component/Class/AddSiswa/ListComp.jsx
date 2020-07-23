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
    Deletesiswa = (id_siswa) => {
        const { siswa } = this.state
        const data = qs.stringify({
            id_siswa: id_siswa
        })
        axios.delete(api + '/hapus',
            {
                data: data,
                headers: { 'Content-type': 'application/x-www-form-urlencoded' }
            }
        ).then(json => {
            if (json.data.status === 200) {
                this.setState({
                    response: json.data.values,
                    siswa: siswa.filter(siswa => siswa.id_siswa !== id_siswa),
                    display: 'block'
                })
                this.props.history.push('/siswa')
            } else {
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
            }
        })
    }
    render() {
        return (
            <Container>
                <Alert color="success" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
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
                                <td>{siswa.nis}</td>
                                <td>{siswa.nama}</td>
                                <td>{siswa.jurusan}</td>
                                <td>
                                    <Link to=
                                        {
                                            {
                                                pathname: '/siswa/edit',
                                                state: {
                                                    id_siswa: siswa.id_siswa,
                                                    nis: siswa.nis,
                                                    nama: siswa.nama,
                                                    jurusan: siswa.jurusan
                                                }
                                            }
                                        }>
                                        <Button> Edit </Button>
                                        <span> </span>
                                        <Button onClick={() => this.Deletesiswa(siswa.id_siswa)} color="danger"> Delete </Button>
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