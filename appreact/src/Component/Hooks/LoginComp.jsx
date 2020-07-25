import React, {useState, Fragment } from 'react';
import { Button, Form, FormGroup, Label, Col, Input,  CardImg } from 'reactstrap';

import axios from 'axios'
import { useContext } from 'react';
import { AuthContext } from '../../App';
import { Container, Row } from 'reactstrap';

const qs = require('querystring')
const api = 'http://localhost:3001'



const initialState = {
    isAuthenticated: false,
    user: null,
    token: null
  }
  
  
  const reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        localStorage.setItem("user", JSON.stringify[action.payload.user])
        localStorage.setItem("token", JSON.stringify[action.payload.token])
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload.user
        }
      case "LOGOUT":
        localStorage.clear()
        return {
          ...state,
          isAuthenticated: false,
          user: action.payload.user
        }
      default:
        return state
  
    }
  }
  
  



function LoginComp() {
    const { dispatch } = useContext(AuthContext)

    const initialState = {
        email: "",
        password: "",
        isSubmitting: false,
        errorMessage: null
    }

    const [data, setData] = useState(initialState)

    const handleInputChange = event => {
         setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }
    const handleformSubmit = event => {
        event.preventDefault()
        setData({
            ...data,
            isSubmiting: true,
            errorMessage: null
        })
        const requestBody = {
            email: data.email,
            password: data.password
        }
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        axios.post(api + '/auth/api/v1/login', qs.stringify(requestBody), config)
            .then(res=>{
                if (res.data.success === true) {
                    dispatch({
                        type: "LOGIN",
                        payload: res.data
                    })
                }
                else {
                    setData({
                        ...data,
                        isSubmiting: false,
                        errorMessage: res.data.Message
                    })

                }
                throw res
            })
    }
    return (
        <Fragment>
        <Container>
            <br />
            <Row>
                <Col>
                    <CardImg width="100" src="https://upload.wikimedia.org/wikipedia/en/1/18/SIP_Animation.png" />
                </Col>
                <Col>

                    <Form onSubmit={handleformSubmit}>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" 
                                value={data.email}
                                onChange={handleInputChange}
                                name="email" id="exampleEmail"
                                placeholder="Masukan Email" />
                            </FormGroup>

                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password"
                                value={data.password}
                                onChange={handleInputChange}
                                name="password" id="examplePassword" placeholder="Masukan Password" />
                        </FormGroup>

                        {data.errorMessage && (
                            <div className="alert alert-danger" role="alert">
                                {data.errorMessage}
                            </div>
                        )}
                        <Button disabled={data.isSubmiting}>
                            {data.isSubmiting ? (
                                "..Loading"
                             ) :
                            (
                                "Login"
                            )

                            }
                            </Button>
                    </Form>
                    <p>Belum Punya akun?  </p>
                </Col>

            </Row>
        </Container>
        </Fragment>
    )
}
export default LoginComp; 