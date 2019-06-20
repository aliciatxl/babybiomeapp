import React, { Component } from 'react';
import { Button, Header, Divider } from 'semantic-ui-react';
import styles from '../styles/Home.module.css';
import logo from './logonowords.png';
import PageHeader from './Header.js';
import AboutThirdBlock from './AboutThirdBlock';
import AboutSecondBlock from './AboutSecondBlock';
import AboutFirstBlock from './AboutFirstBlock';
import Fade from 'react-reveal/Fade';
import Footer from './Footer';
import StepsBlock from './StepsBlock';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                {<PageHeader />}
                
                    <Fade>
                        <div className={styles.container}>
                            <Header as='h1' className={styles.header}>
                                <img className={styles.image} src={logo} alt="BabyBiome"/><br/>
                                Welcome to BabyBiome
                                <Header.Subheader className={styles.subHeader}>Transforming baby poop into big insights </Header.Subheader>
                            </Header>
                            
                            <Divider />
                            <div className={styles.button}>
                                <Button size="massive" basic color='white' as={ Link } to="/user">Get Started</Button>
                            </div>
                        </div>
                        <StepsBlock />
                        <AboutThirdBlock />
                        <AboutSecondBlock />
                        <AboutFirstBlock />
                    </Fade>
                
                <Footer />
            </div>
        )
    }
}


export default Home;