import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Person, Lock, BoxSeam, ChatSquareText } from 'react-bootstrap-icons'
import ButtonSquare from '../components/custom/ButtonSquare';

const UserPage = () => {

    return (
        <Container fluid={true} style={{ border: '1px solid #ccc9c9', padding: '10px 0' }}>
            <Row className="px-3">
                <Col lg="3">
                    <div>
                        <img src="" alt="" />
                    </div>
                    <ul style={{ margin: '0', padding: '0', padding: '3rem 1rem' }}>
                        <li>
                            <ButtonSquare
                                icon={<Person size={20} />}
                                onClick={() => console.log('click xD')}
                                Children={'Mi cuenta!'}
                            />
                        </li>
                        <li>
                            <ButtonSquare
                                icon={<BoxSeam size={20} />}
                                onClick={() => console.log('click xD')}
                                Children={'Mis Pedidos!'}
                            />
                        </li>
                        <li>
                            <ButtonSquare
                                icon={<ChatSquareText size={20} />}
                                onClick={() => console.log('click xD')}
                                Children={'Mis Reviews!'}
                            />
                        </li>
                        <li>
                            <ButtonSquare
                                icon={<Lock size={20} />}
                                onClick={() => console.log('click xD')}
                                Children={'Cambiar Mi Contraseña'}
                            />
                        </li>
                    </ul>
                </Col>
                <Col lg="9">

                </Col>
            </Row>
        </Container>
    );
}

export default UserPage;