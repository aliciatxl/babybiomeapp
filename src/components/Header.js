import React, { Component } from 'react';
import { Menu, Button, Icon, Dropdown} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';
import logo from "../assets/Header/logo.png";

class PageHeader extends Component {
    state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable className={styles.header}>
        <Menu.Item
            as={Link}
            to='/'>
          <img src={logo} />
        </Menu.Item>

        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          as={Link}
          to='/'>
          Home
        </Menu.Item>

        <Dropdown item text='About'>
          <Dropdown.Menu>
            <Dropdown.Item
              onClick={this.handleItemClick}
              as={Link}
              to='/about'>
              How It Works
            </Dropdown.Item>
            <Dropdown.Item
              onClick={this.handleItemClick}
              as={Link}
              to='/team'>
              Our Team
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Menu position="right">
            <Menu.Item
                name='contact'
                active={activeItem === 'contact'}
                onClick={this.handleItemClick}
                as={Link}
                to='/contact'>
            Contact
            </Menu.Item>

            <Menu.Item
                name='FAQ'
                active={activeItem === 'FAQ'}
                onClick={this.handleItemClick}
                as={Link}
                to='/faq'>
            FAQ
            </Menu.Item>

            <Menu.Item name='sign-in' active={activeItem === 'sign-in'} as={Link} to="/user">
            Sign-in
            </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default PageHeader;