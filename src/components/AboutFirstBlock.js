import React from 'react';
import { Header, Image, Divider } from 'semantic-ui-react';
import styles from '../styles/AboutFirstBlock.module.css';
import keepyourprivacy from '../assets/AboutFirstBlock/keepyourprivacy.png';

const AboutFirstBlock = () => (
    <div className={styles.privacyContainer}>
        <div className={styles.message}>
            <Header size='huge'>
                Keep Your Privacy
                <Divider hidden />
                <Header.Subheader>
                    <br/>All your data is securely stored and data channels are encrypted to ensure confidentiality.
                    <br />Your data will only be used for research purpose within Danone.
                    <br />We will not share your data with third parites.
                    <Divider hidden />
                    <em>We use your data for research in order to recommend better probiotics for your baby and predict your baby's health more accurately.</em>
                </Header.Subheader>
            </Header>
        </div>
        <div className={styles.image}>
            <Image className={styles.privacyImage} src={keepyourprivacy} alt="Keep your privacy"/>
        </div>
    </div>
)

export default AboutFirstBlock;