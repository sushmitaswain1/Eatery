import React from 'react';
import styled from 'styled-components';
import {mainColor} from '../Styles/Colors';
import {Title} from '../Styles/Titles';

const NavbarStyled = styled.div`
  background-color: ${mainColor};
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 999;
  display: flex;
  justify-content: space-between;  
`; 

const Logo = styled(Title)`
font-size: 25px;
color: white;
text-shadow: 1px 1px 4px #00001a;

`
const UserStatus = styled.div`
  color: white; 
  font-size: 12px; 
  margin-right: 30px; 
`

const LoginButton = styled.span`
  cursor: pointer; 
`
export function Navbar({login, loggedIn, logout}) {
    return(
        <NavbarStyled>
           <Logo>
               Zaaika 
           </Logo>
           <UserStatus>
        {loggedIn !== "loading" ? (
          <>
            👤 {loggedIn ? "Logged in." : ""}
            {loggedIn ? (
              <LoginButton onClick={logout}> Log out </LoginButton>
            ) : (
              <LoginButton onClick={login}> Log in / Sign up </LoginButton>
            )}
          </>
        ) : (
          "loading..."
        )}
      </UserStatus>
        </NavbarStyled>

    );
}

