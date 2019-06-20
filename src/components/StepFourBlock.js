import React from 'react';
import { Header, Image, Divider } from 'semantic-ui-react';
import styles from '../styles/StepFourBlock.module.css';
import step4 from '../assets/StepFourBlock/step4.png';

const StepFourBlock = () => (
    <div className={styles.stepFourContainer}>
        <div className={styles.message}>
            <Header size='huge'>
                3. View results on mobile app
                <Divider hidden />
                <Header.Subheader>
                    Open the <a href="https://invis.io/AKSF3EESF7V" target="_blank">Baby Biome App</a>.
                    <Divider hidden  />
                    Click on the sync button at the top right corner.
                    <Divider hidden  /> 
                    When the app has synced with the sensor, click on the date of the reading to view the detailed results.
                </Header.Subheader>
            </Header>
        </div>
        <div className={styles.stepFourImage}>
            <Image className={styles.image} src={step4} alt="Results are sent to mobile app"/>
        </div>
    </div>
)

export default StepFourBlock;