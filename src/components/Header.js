import React, { Component } from 'react';
import { Menu, Dropdown, Segment, Responsive, Button, Icon, Sidebar, Header, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';
import logo from "../assets/Header/logo.png";

class PageHeader extends Component {
    state = { visible: false }

  handleHideClick = () => this.setState({ visible: false })
  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    const { visible } = this.state

    return (
      <div>
        <Responsive as={Segment} minWidth={800} className={styles.responsive}>
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
        </Responsive>
        <Responsive maxWidth={799}>
          <Menu className={styles.header}>
            <Menu.Item header onClick={this.handleShowClick}><Icon name="bars" size="large"/></Menu.Item>
          </Menu>

          <Sidebar.Pushable as={Segment} className={styles.sidebar}>
            <Sidebar
              as={Menu}
              animation='overlay'
              icon='labeled'
              onHide={this.handleSidebarHide}
              vertical
              visible={visible}
              width='thin'
            >

              <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={this.handleItemClick}
                as={Link}
                to='/'>
                Home
              </Menu.Item>
              
              <Menu.Item
                onClick={this.handleItemClick}
                as={Link}
                to='/about'>
                How It Works
              </Menu.Item>
              <Menu.Item
                onClick={this.handleItemClick}
                as={Link}
                to='/team'>
                Our Team
              </Menu.Item>

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
            </Sidebar>
          </Sidebar.Pushable>
          {this.state.visible}
        </Responsive>
      </div>
      
    )
  }
}

export default PageHeader;