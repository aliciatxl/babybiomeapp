import React, { Component } from 'react';
import { Image, Icon, Item, Header, Divider, Container} from 'semantic-ui-react';
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
                    <Image src={logo} />
                <Footer />
            </div>
        )
    }
}

export default User