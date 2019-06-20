import React, { Component } from 'react';
import { Container, Header, Divider } from 'semantic-ui-react';
import styles from '../styles/About.module.css';
import PageHeader from './Header.js';
import Description from './Description';
import StepOneBlock from './StepOneBlock';
import StepTwoBlock from './StepTwoBlock';
import StepThreeBlock from './StepThreeBlock';
import StepFourBlock from './StepFourBlock';
import Fade from 'react-reveal/Fade';
import Footer from './Footer';

class About extends Component {
    state = {}

    render() {
        return (
            <div >
                <PageHeader />
                    <Fade>
                        <div className={styles.outer_container}>
                        <Container className={styles.container}>
                            <Header className={styles.header}>
                                Creating the perfect parenting tool
                                <Divider hidden />
                                <Header.Subheader className={styles.subheader}>
                                    We believe in bringing a better experience for parents when taking care of their children <br /> - convenience, assurance and privacy
                                </Header.Subheader>
                            </Header>
                        </Container>
                        </div>
                        <Description />
                        <StepOneBlock />
                        <StepTwoBlock />
                        <StepThreeBlock />
                        <StepFourBlock />
                    </Fade>
                <Footer />
            </div>
        )
    }
}

export default About;