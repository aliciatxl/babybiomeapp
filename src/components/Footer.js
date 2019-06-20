import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import styles from '../styles/Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => (
    <Menu vertical fluid className={styles.footer} inverted>
        <Menu.Item>
            &copy; 2019 Baby Biome
        </Menu.Item>
        <Menu.Item as={Link} to="/team">
            Our Team
        </Menu.Item>
        <Menu.Item as={Link} to="/faq">
            FAQ
        </Menu.Item>
        <Menu.Item>
            <a href="https://www.facebook.com/" target="_blank"><Icon name="facebook"/></a>
            <a href="https://twitter.com/" target="_blank"><Icon name="twitter"/></a>
            <a href="https://www.linkedin.com/company/babybiome/" target="_blank"><Icon name="linkedin"/></a>
        </Menu.Item>
    </Menu>
);

export default Footer;