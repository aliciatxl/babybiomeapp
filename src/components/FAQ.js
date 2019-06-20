import React, { Component } from 'react';
import { Container, Header, Divider, Segment, Icon, Button } from 'semantic-ui-react';
import styles from '../styles/FAQ.module.css';
import { Link } from 'react-router-dom'
import PageHeader from './Header.js';
import Fade from 'react-reveal/Fade';
import Footer from './Footer';

class FAQ extends Component {
    render() {
        return (
            <div>
                <PageHeader login={!!localStorage.getItem("access_token")} able={true}/>
                <div className={styles.outer_container}>
                    <Fade>
                        <Header className={styles.header}>
                            <Icon name="question circle outline" />
                            FAQ
                        </Header>
                        <Container text>
                            <Header attached='top' className={styles.sectionHeader}>
                                Introduction
                            </Header>
                            <Segment attached className={styles.segment}>
                                <strong>What is Baby Biome?</strong>
                                <Divider hidden />
                                Baby Biome is a company, made up of four individuals that are passionate about baby healthcare. Baby Biome combines science, technology and data to create an end product that provides easy tracking of baby's health through monitoring the gut microbiome, 
                                and recommends appropriate prebiotics, synbiotics and probiotics.
                                <Divider section hidden />
                                <strong>How does Baby Biome App and Sensor work?</strong>
                                <Divider hidden />
                                Analysing the baby's feces is a simple and straightforward task. Full steps can be found in the information leaflet that comes with the sensor. 
                                <br />An overview of the steps can be found on the <a href="/about">about page.</a>
                            </Segment>
                            <Header attached className={styles.sectionHeader}>
                                Tracking with Baby Biome
                            </Header>
                            <Segment attached className={styles.segment}>
                                <strong>Can I track the data of many babies in one app?</strong><br/>
                                Yes, our app is able to hold many accounts at once. However, one baby can only use sensor as they cannot be shared. 
                                <br />To handle more than one baby, just create multiple profiles on the app, by clicking on the add new profile sign on the profile page. You can then toggle between the profiles to see the data associated with each profile.
                                <Divider section hidden />
                                <strong>How often does Baby Biome App sync?</strong><br/>
                                Baby Biome App automatically syncs with the sensor when the sensor has analysed the result. No manual syncing is required.
                                <br />If the result does not appear on the app, you can also press the sync button on the top right hand corner of the app to refresh and sync the page.
                                <Divider section hidden />
                                <strong>How can I share my data with other people such as the pediatrician?</strong><br/>
                                The results of the analysis can be shared through multiple platforms, such as email, WhatsApp, or cloud storage like Google Drive and Box.
                                <br />Go to the detailed results page, and click on the share button at the top right hand corner. Select the platform you wish to share through, and the data will be sent or uploaded.
                                <br /> Only the data you choose to share can be seen by the person you are sharing with.
                                <Divider section hidden />
                                <strong>Where will my files be shared to in my cloud storage?</strong><br/>
                                A folder will be created for Baby Biome in your cloud platform. <br/>
                                For Dropbox, your files will be synced to a newly created Baby Biome folder in the <a href="https://www.dropbox.com/home/Apps" target="_blank">Apps</a> folder.<br/>
                                For Google Drive, Box and OneDrive, your files will be synced to a newly created NUSCloud folder in the root of the main directory.
                                <Divider section hidden />
                                <strong>Where can I donwnload/ access the app?</strong><br/>
                                Download the Baby Biome app on the App Store, or Google Play.
                                <br />Alternatively, access your account through <a href="/user">here.</a>
                            </Segment>
                            <Header attached className={styles.sectionHeader}>
                                Privacy
                            </Header>
                            <Segment attached className={styles.segment}>
                                <strong>Does Baby Biome store my data and credentials?</strong><br/>
                                We take your privacy seriously. Your credentials are stored securely at our database for authentication purposes only.
                                <br /> The data collected by the sensor and app will only be used for research purposes by the Danone company. We will not sell your data to any third parties.
                                <Divider section hidden />
                                <strong>What is my data used for?</strong><br/>
                                Your data is used to research on how a baby's gut microbiome is able to predict the health of the baby accurately, such as the general health level and the risk for certain diseases.
                                <br />We are also researching on how the data can be used to recommend suitable products to supplement the baby's health, in order to have a healthy gut.
                            </Segment>
                            <Header attached className={styles.sectionHeader}>
                                Technical Troubles
                            </Header>
                            <Segment attached className={styles.segment}>
                            If you encounter any technical problems with our app or sensor, please <a href="/contact">contact</a> us. <br/>In your message, please tell us the details of the problem that you are facing.
                            </Segment>
                            <Header attached className={styles.sectionHeader}>
                                Still have questions?
                                <Divider hidden />
                                <Button inverted size="huge" color="blue" onClick={() => window.location = "/contact"}>Contact Us</Button>
                            </Header>
                        </Container>
                    </Fade>
                </div>
                <Footer />
            </div>
        )
    }
}

export default FAQ;
