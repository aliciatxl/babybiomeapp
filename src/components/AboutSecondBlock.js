import React from 'react';
import { Header, Image, Divider } from 'semantic-ui-react';
import styles from '../styles/AboutSecondBlock.module.css';
import access from '../assets/AboutSecondBlock/access.png';

const AboutSecondBlock = () => (
    <div className={styles.accessContainer}>
        <div className={styles.message}>
            <Header size='huge' inverted color='blue'>
                Simple, convenient tracking everywhere
                <Divider hidden />
                <Header.Subheader inverted color="grey">
                    <br />You can take the sensor with you anywhere you go, even when you travel!
                    <br />Access the app from any device, be it through your desktop or on your mobile phone.
                    <br />Share the results easily with anyone, through various means such as email and cloud storage.
                </Header.Subheader>
            </Header>
        </div>
        <div className={styles.image}>
            <Image className={styles.accessImage} src={access} alt="Track your baby's health easily"/>
        </div>
    </div>
)

export default AboutSecondBlock;