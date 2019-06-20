import React from 'react';
import { Header, Divider, Container } from 'semantic-ui-react';
import styles from '../styles/StepsBlock.module.css';

const StepsBlock = () => (
    <div className={styles.container}>
        <Container className={styles.innerContainer}>
            <h1>The Gut Microbiome: a baby's most important organ </h1>
            <Divider hidden />
            Gut microbiota is a modifiable risk factor for disease development
        </Container>
        <Divider hidden />
        <Divider horizontal>Did you know</Divider>
        <div className={styles.stepsContainer}>
            <div className={styles.message}>
                <Header as="h1">
                    91%
                    <Divider hidden />
                    <Header.Subheader inverted color='grey'>
                        of adults have their mobile device within arm’s reach 24/7
                    </Header.Subheader>
                </Header>
            </div>
            <div className={styles.message}>
                <Header as="h1">
                    52%
                    <Divider hidden />
                    <Header.Subheader inverted color='grey'>
                        of smartphone users gather health-related information on their phones
                    </Header.Subheader>
                </Header>
            </div>
            {/* <div className={styles.message}>
                <Header as="h1">
                    3. Click on Your Preferred Cloud Storage
                    <Divider hidden />
                    <Header.Subheader inverted color='grey'>
                        We support Dropbox, GoogleDrive, Box and OneDrive.
                        <br />
                        Just provide us with the permission to upload your IVLE files! 
                        <br />
                        We do not have access to change or view other files in your cloud platforms.
                    </Header.Subheader>
                </Header>
            </div> */}
        </div>
        <Divider horizontal>What we do</Divider>
        <Container className={styles.innerContainer}>
            We combine <br /> <h2>Science + Tech + Data</h2><br /> to reimagine infant gut health with the power of digital devices
        </Container>
    </div>
)

export default StepsBlock;