import React, { Component } from 'react';
import { Image, Form, Button, Container, Divider, Segment, Responsive } from 'semantic-ui-react';
import PageHeader from './Header.js';
import Footer from './Footer.js';
import styles from '../styles/User.module.css';
import logo from './logo.png';

class User extends Component {
    state = {}

    render() {
        return (
            <div>
                <PageHeader />
                    <div className={styles.outerContainer}>
                    <Segment.Group>
                        <Responsive as={Segment} minWidth={800}>
                            <Container text className={styles.container}>
                                <Image src={logo} size='medium' centered/>
                                <Divider hidden />
                                <div className={styles.formContainer}>
                                    <Form>
                                        <Form.Field>
                                            <label>Username</label>
                                            <input placeholder='Username' />
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Password</label>
                                            <input type='password' placeholder='Password' />
                                        </Form.Field>
                                        <Button type='submit' inverted color='blue'>Submit</Button>
                                    </Form>
                                </div>
                            </Container>
                        </Responsive>
                        <Responsive as={Segment} maxWidth={799}>
                            <Container className={styles.container}>
                                <Image src={logo} size='small' centered/>
                                <Divider hidden />
                                <div>
                                    <Form>
                                        <Form.Field>
                                            <label>Username</label>
                                            <input placeholder='Username' />
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Password</label>
                                            <input type='password' placeholder='Password' />
                                        </Form.Field>
                                        <Button type='submit' inverted color='blue'>Submit</Button>
                                    </Form>
                                </div>
                            </Container>
                        </Responsive>
                    </Segment.Group>
                        
                    </div>
                <Footer />
            </div>
        )
    }
}

export default User