import React from 'react';
import { Header, Image, Divider } from 'semantic-ui-react';
import styles from '../styles/Description.module.css';
import sensor from '../assets/Description/Sensor.png';

const Description = () => (
    <div className={styles.descriptionContainer}>
        <div className={styles.message}>
            <Header size='huge' inverted color='teal'>
                Our Solution
                <Divider hidden />
                <Header.Subheader>
                    <br/>Bluetooth-enabled graphene based hand-held biosensor
                    <em>Giving parents valuable insights into their baby's gut health</em>
                </Header.Subheader>
            </Header>
        </div>
        <div className={styles.image}>
            <Image src={sensor} alt="Our Sensor"/>
        </div>
        <div className={styles.points}>
            <ol>
                <li>Biomarker in fecal sample binds to specific receptors on graphene sensor </li>
                <li>Upon binding, charge density of graphene sensor changes</li>
                <li>This results in a quantifiable change in conductivity, which is measured</li>
            </ol>
        </div>
    </div>
)

export default Description;