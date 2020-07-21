import React from 'react'
import { Jumbotron } from 'reactstrap';

function DetailComp(props) {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">{props.location.state.judul}</h1>
                <p className="lead">{props.location.state.tanggal}</p>
                 <p className="det">{props.location.state.detail}</p>
    <hr className="my-2" />
            </Jumbotron>
        </div>
    )
}


export default DetailComp; 