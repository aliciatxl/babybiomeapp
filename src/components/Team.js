import React, { Component } from 'react';
import { Image as ImageComponent, Icon, Item, Header, Divider, Container} from 'semantic-ui-react';
import shimin from '../assets/Team/shimin.png';
import suyee from '../assets/Team/suyee.png';
import kevin from '../assets/Team/kevin.png';
import glenn from '../assets/Team/glenn.png';
import PageHeader from './Header.js';
import Footer from './Footer.js';
import styles from '../styles/Team.module.css';
import Fade from 'react-reveal/Fade';
import logo from './logo.png';

class Team extends Component {
    state = {}

    render() {
        return (
            <div>
                <PageHeader />
                    <Fade>
                        <Header as='h1' className={styles.header} inverted>
                            <Header className={styles.header} inverted>
                                <Icon name="user circle" />
                                Meet Our Team
                            </Header>
                            <Header.Subheader className={styles.subHeader}>We are a team of individuals who are passionate about bringing happiness to families through convenient health tracking.</Header.Subheader>
                        </Header>
                        <Container text className={styles.container}>
                            <Item.Group link>
                                <Item>
                                <Item.Image size='small' src={shimin} />

                                <Item.Content>
                                    <Item.Header href="https://www.linkedin.com/in/shi-min/" target="_blank">Shi Min</Item.Header>
                                    <Item.Meta>NUS Biomedical Engineering (Hons), Final Year Student</Item.Meta>
                                    <Item.Description>
                                        <ul>
                                            <li><strong>Internship Experience</strong>
                                                <ul>
                                                    <li>Amazon Web Services</li>
                                                    <li>Novartis</li>
                                                    <li>Structo3D</li>
                                                    <li>Sales, Content Marketing, Manufacturing (GMP, GLP, GDP)</li>
                                                    <li>Conducting educational workshops on Tech</li>
                                                </ul>
                                            </li>
                                            <li><strong>Lab Experience</strong>
                                                <ul>
                                                    <li>Cell & microbial culture</li>
                                                    <li>qPCR, immunostaining</li>
                                                    <li>Microfluidics</li>
                                                    <li>Gel electrophoresis</li>
                                                </ul>
                                            </li>
                                            <li><strong>Tech Projects</strong>
                                                <ul>
                                                    <li>Prototyped a stress sensor using Arduino & incorporated CBT strategies in device</li>
                                                </ul>
                                            </li>
                                            <li><strong>Skills</strong>
                                                <ul>
                                                    <li>Solidworks</li>
                                                    <li>AutoCAD</li>
                                                    <li>Fusion</li>
                                                    <li>Graphic Design (Photoshop, Illustrator)</li>
                                                    <li>C Programming</li>
                                                    <li>Arduino</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </Item.Description>
                                </Item.Content>
                                </Item>

                                <Divider />

                                <Item>
                                <Item.Image size='small' src={suyee} />

                                <Item.Content>
                                    <Item.Header href="https://www.linkedin.com/in/tan-su-yee/" target="_blank">Tan Su Yee</Item.Header>
                                    <Item.Meta>NUS Pharmacy (Bsc. with Hons.), major in Computer Science, Leong Mun Sum Scholarship, Final Year Student</Item.Meta>
                                    <Item.Description>
                                        <ul>
                                            <li><strong>Internship Experience</strong>
                                                <ul>
                                                    <li>NTUC Unity Healthcare (Patient Care)</li>
                                                    <li>DCH Auriga Pte Ltd (Regulatory and Marketing</li>
                                                </ul>
                                            </li>
                                            <li><strong>Tech Projects</strong>
                                                <ul>
                                                    <li>Andriod App for Disease Management Education</li>
                                                    <li>Web App to connect travelers to buyers</li>
                                                    <li>Andriod App to facilitate mailing</li> 
                                                </ul>
                                            </li>
                                            <li><strong>Skills</strong>
                                                <ul>
                                                    <li>React</li>
                                                    <li>Javascript</li>
                                                    <li>C programming</li>
                                                    <li>Java</li>
                                                    <li>Python</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </Item.Description>
                                </Item.Content>
                                </Item>

                                <Divider />

                                <Item>
                                <Item.Image size='small' src={kevin} />

                                <Item.Content>
                                    <Item.Header>Kevin Boellaard</Item.Header>
                                    <Item.Meta>NUS Chemistry (Bsc. with Hons.), Top year 2 student in Chemistry (2017), Final Year Student</Item.Meta>
                                    <Item.Description>
                                        <ul>
                                            <li><strong>Internship Experience</strong>
                                                <ul>
                                                    <li>Albany Molecular Instituition: Organic synthesis - methodology development</li>
                                                </ul>
                                            </li>
                                            <li><strong>Lab Experience</strong>
                                                <ul>
                                                    <li>Research intern at laboratory of Prof. Sugibayashi</li>
                                                    <li>Publication: Chittimalla, S. K.; Bandi, C.; Putturu, S.; Kuppusamy, R.; Boellaard, K. C.; Tan, D. C. A.; Lum, D. M. J., Eur. J. Org. Chem., 2014, 12, 2565-2575.</li>
                                                    <li>Studied the permeability of Parabens on the artificial membrane, Strat-MTM and became proficient in HPLC and the Franz diffusion cell.</li>
                                                    <li>Undergraduate researcher at the laboratory of Prof. Lu Yixin</li>
                                                    <li>Synthesised catalyst precursors for phosphine catalysts</li>
                                                    <li>Undergraduate researcher at the laboratory of Prof. Chua Laylay</li>
                                                    <li>Developed the synthetic route and synthesised polymers for semiconductor devices.</li>
                                                </ul>
                                            </li>
                                            <li><strong>Skills</strong>
                                                <ul>
                                                    <li>Organic & Analytical Chemistry, Python, Videoscribe</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </Item.Description>
                                </Item.Content>
                                </Item>

                                <Divider />

                                <Item>
                                <Item.Image size='small' src={glenn} />

                                <Item.Content>
                                    <Item.Header href="https://www.linkedin.com/in/glenn-quek/" target="_blank">Glenn Quek</Item.Header>
                                    <Item.Meta>NUS Chemistry (Bsc. with Hons.), Top year 2 student in Chemistry (2017), A*STAR Undergraduate Scholarship</Item.Meta>
                                    <Item.Description>
                                        <ul>
                                            <li><strong>Internship Experience</strong>
                                                <ul>
                                                    <li>A*STAR EXPERIMENTAL THEREPEUTICS CENTRE (ETC) : Synthesis and characterization of small-molecule kinase inhibitors with anti-cancer activity</li>
                                                    <li>A*STAR INSTITUTE OF BIOENGINEERING AND NANOTECHNOLOGY (IBN): Synthesis and characterization of anti-HBV macromolecular drugs with high selectivity and resistance mitigation</li>
                                                    <li>A*STAR INSTITUTE OF CHEMICAL AND ENGINEERING SCIENCES (ICES): Asymmetric synthesis of novel glycosides from biomass</li>
                                                </ul>
                                            </li>
                                            <li><strong>Lab Experience</strong>
                                                <ul>
                                                    <li>UNDERGRADUATE RESEARCH OPPORTUNITIES PROGRAM IN SCIENCE (UROPS) :Development of new synthetic methodology catalysed by amino acid-derived bifunctional phosphines </li>
                                                    <li>Publication: Angew. Chem. Int. Ed. 2019, 58, 6260. (Selected as a Very Important Paper)</li>
                                                </ul>
                                            </li>
                                            <li><strong>Skills</strong>
                                                <ul>
                                                    <li>Python</li>
                                                    <li>Analytical Chemistry Instruments (HPLC, GC-MS, NMR, FT-IR, Voltammetry)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </Item.Description>
                                </Item.Content>
                                </Item>
                            </Item.Group>
                        </Container>
                    </Fade>
                <Footer />
            </div>
        )
    }
}

export default Team