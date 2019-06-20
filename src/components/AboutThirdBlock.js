import React from 'react';
import { Header, Image, Divider } from 'semantic-ui-react';
import styles from '../styles/AboutThirdBlock.module.css';
import analysis from '../assets/AboutThirdBlock/analysis.png';

const AboutThirdBlock = () => (
    <div className={styles.syncContainer}>
        <div className={styles.message}>
            <Header size='huge' inverted color='white'>
                Have an accurate analysis of your baby's health
                <Divider hidden />
                <Header.Subheader>
                    <br />When you sign up with us, we make sure your baby is in good health. 
                    <br />Follow the instructions on the leaflet provided and the sensor will do the analysis for you!
                    <br />We help you monitor your baby's gut microbiome and notify you when something is amiss.
                    <br />Our customised prebiotics, synbiotics and probiotics are recommended based on the health profile of your baby.
                </Header.Subheader>
            </Header>
        </div>
        <div className={styles.image}>
            <Image className={styles.syncImage} src={analysis} alt="Accurate analysis"/>
        </div>
    </div>
)

export default AboutThirdBlock;