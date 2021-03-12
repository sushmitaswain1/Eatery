import React from 'react';
import styled from 'styled-components';
import {mainColor} from '../Styles/Colors';
import {Title} from '../Styles/Titles';

const NavbarStyled = styled.div`
    background-color: ${mainColor};
    padding : 10px;
    position: fixed;
    width: 100%;

`
const Logo = styled(Title)`
font-size: 25px;
color: white;
text-shadow: 2px 2px 5px #00001a;

`
export function Navbar() {
    return(
        <NavbarStyled>
           <Logo>
               Zaaika 
           </Logo>
        </NavbarStyled>

    );
}

