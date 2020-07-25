import React, {useState} from 'react'
import { Jumbotron } from 'reactstrap';
//import {CartContext} from '../../CartContext';
import {Link} from 'react-router-dom'
function HomePage() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen[!isOpen];
    return (

        <div>
            <Jumbotron>
                <h1 className="display-3">Sistem Informasi Perpustakaan </h1>
                <p className="lead">Selamat datang di sistem informasi Perpustakaan.</p>
                <hr className="my-2" />
                <p>Silahkan <Link to="/login">LOGIN</Link> terlebih dahulu untuk dapat menikmati fasilitas layanan kami.</p>
                <p className="lead">
                </p>

            </Jumbotron>

        </div>
    )
}




export default HomePage;