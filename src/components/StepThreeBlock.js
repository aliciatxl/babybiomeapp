import React from 'react';
import { Header, Image, Divider } from 'semantic-ui-react';
import styles from '../styles/StepThreeBlock.module.css';
import step3 from '../assets/StepThreeBlock/step3.png';

const StepOneBlock = () => (
    <div className={styles.stepThreeContainer}>
        <div className={styles.message}>
            <Header size='huge'>
                3. Put one drop of sample on the sensor
                <Divider hidden />
                <Header.Subheader>
                    Bring the sampling probe to the sensor chip, and put one drop of sample on the sensor window.
                    <Divider hidden  />
                    The sensor will analyse the components of the feces, and indicate on the screen when the analysis is done.
                    <Divider hidden  /> 
                    Clean the sensor window when the analysis is done using the swabs provided.
                </Header.Subheader>
            </Header>
        </div>
        <div className={styles.stepThreeImage}>
            <Image className={styles.image} src={step3} alt="Log in with IVLE"/>
        </div>
    </div>
)

export default StepOneBlock;