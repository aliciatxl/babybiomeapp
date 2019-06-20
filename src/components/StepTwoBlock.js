import React from 'react';
import { Header, Image, Divider } from 'semantic-ui-react';
import styles from '../styles/StepTwoBlock.module.css';
import step2 from '../assets/StepTwoBlock/step2.png';

const StepTwoBlock = () => (
    <div className={styles.stepTwoContainer}>
        <div className={styles.message}>
            <Header size='huge'>
                2. Obtain stool sample
                <Divider hidden />
                <Header.Subheader>
                    Twist and pull the tab to remove the sampling probe from the kit.
                    <Divider hidden  />
                    Poke the probe into 6 different areas of the stool sample.
                    <Divider hidden  />
                    Return the sampling probe to the kit and secure the tab by twisting it to close it. Shake the kit several times.
                    <Divider hidden  />
                    <em>The detailed instructions can be found in the information leaflet.</em>
                </Header.Subheader>
            </Header>
        </div>
        <div className={styles.stepTwoImage}>
            <Image className={styles.image} src={step2} alt="Log in with IVLE"/>
        </div>
    </div>
)

export default StepTwoBlock;