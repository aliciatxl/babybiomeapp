import React from 'react';
import { Header, Image, Divider } from 'semantic-ui-react';
import styles from '../styles/StepOneBlock.module.css';
import step1 from '../assets/StepOneBlock/step1.png';

const StepOneBlock = () => (
    <div className={styles.stepOneContainer}>
        <div className={styles.message}>
            <Header size='huge'>
                1. Baby Defecates 
                <Divider hidden />
                <Header.Subheader>
                    After the baby defecates, remove the soiled diaper. The stool must not come into contact with water or urine.
                    <Divider hidden />
                    Place the soiled diaper on a flat surface and prepare the sensor.
                </Header.Subheader>
            </Header>
        </div>
        <div className={styles.stepOneImage}>
            <Image className={styles.image} src={step1} alt="Log in with IVLE"/>
        </div>
    </div>
)

export default StepOneBlock;