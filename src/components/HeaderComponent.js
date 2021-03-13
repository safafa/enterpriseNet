import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Form, Input} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import {BellIcon, MailIcon, HomeIcon, PersonIcon, PeopleIcon, OrganizationIcon, SignInIcon, SignOutIcon} from '@primer/octicons-react';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
        }
    }
    toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {
        return(
            <div>
                <Navbar color="light" light expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='' height="30" width="41" alt='Net Corps' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="searchBar ml-auto" >
                                <Form inline>
                                <Input type="text" name="search" id="searchBar" placeholder="Search" />
                                </Form>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span><HomeIcon size={24} /></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span><PersonIcon size={24} /></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> <MailIcon size={24} /> </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span><BellIcon size={24} /></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span><OrganizationIcon size={24} /></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span><PeopleIcon size={24} /></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/logout'><span className="fa fa-address-card fa-lg"></span><SignOutIcon size={24} /></NavLink>
                             </NavItem>
                             <NavItem>
                                <NavLink className="nav-link" to='/signup'><span className="fa fa-address-card fa-lg"></span>Signup</NavLink>
                                </NavItem>
                            </Nav>
                         {  /* <Nav>
                                <NavItem>
                                <NavLink className="nav-link" to='/login'><span className="fa fa-address-card fa-lg"></span><SignInIcon size={24} /></NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink className="nav-link" to='/signup'><span className="fa fa-address-card fa-lg"></span>Signup</NavLink>
                                </NavItem>
                         </Nav>*/}
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}
export default Header;
