import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";
import { Link } from 'react-scroll'
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../responsive";
import { slide as Menu } from 'react-burger-menu'
import styles from './menuStyles'

const Container = styled.div`
  width: 90%;
    ${tw`
        flex
        items-center
        self-center
        h-20
        pl-6
        pr-6
        pt-4
        border-b-2
        border-gray-200
        border-opacity-50
        
    `}
`
const NavItems = tw.ul`   
        list-none
        w-full
        h-auto
        lg:w-auto
        flex
        justify-content[space-around]
        items-center
        lg:h-full
        lg:ml-20
        
`;

const NavItem = tw.li`    
    lg:mr-8
    flex
    items-center
    justify-center
    min-h-full
    text-white
    cursor-pointer
    font-medium
    text-lg
    lg:text-base
    transition-colors
    transition-duration[300ms]
    hover:text-gray-300
    box-content
    mb-2
    lg:mb-0
`

export function NavBar() {

const isMobile=useMediaQuery({maxWidth:deviceSize.mobile})

    const navItems = (
        <NavItems>
            <NavItem>
                <Link to="Home">Home</Link>
            </NavItem >
            <NavItem>
                <Link to="Explore">Explore</Link>
            </NavItem >
            <NavItem>
                <Link to="TravelPlaces">Travel Places</Link>
            </NavItem >
        </NavItems>);
    
    return (
        <Container>
            <Logo />
            {isMobile && <Menu right  styles={styles}>{navItems}</Menu>}
           {!isMobile && navItems}
        </Container>);
};