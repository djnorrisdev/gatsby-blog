import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Logo from '.././images/codegainz-header-logo-full-white.png'
import { bubble as Menu } from 'react-burger-menu'

const Header = styled.header`
  background: ${props => props.theme.colors.base};
  // position: relative;
  width: 100%;
  max-width: 1050px;
  margin: 0 auto;
  height: 40px;
  margin-top: 30px;
  padding: 0 1em;
  display: flex;
  justify-content: space-between;
`
const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
`

const LogoImg = styled.img`
  width: 200px;
  height: auto;
  padding-bottom: 2px;
`

const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em 0 1.9em;
  display: flex;
  justify-content: flex-end;

  ul {
    display: flex;
    align-items: center;
  }

  li {
    display: inline-block;
    margin-left: 1em;
    text-decoration: none;
    &:first-child {
      position: relative;
      margin: 0;
    }
  }

  a {
    text-decoration: none;
    color: DarkGray;
    font-weight: 600;
    transition: all 0.2s;
    border-bottom: 2px solid ${props => props.theme.colors.base};
    &:hover {
      color: white;
    }
  }
`

const LineMenu = styled.ul`
@media screen and (max-width: 768px) {
  li {
    display: none;
  }
}
`

const BurgerMenu = styled.div`
padding-right: 12px;
.bm-item {
  display: inline-block;
  text-decoration: none;
  margin-bottom: 20px;
  transition: color 0.2s;
  border-bottom: none;
  &:focus {
    outline: 1px solid transparent;
  }
}
.bm-item:hover {
  color: white;
}
.bm-item-list {
  color: #b8b7ad;
}

.bm-burger-button {
position: absolute;
width: 30px;
height: 24px;
top: 38px;

}


.bm-burger-bars {
  background: #fefefe;
  height: 17% !important;
  border-radius: 3px;
}
.bm-cross-button {
  height: 24px;
  width: 24px;
}
.bm-cross {
  background: #bdc3c7;
}
.bm-menu {
  background: #373a47;
  padding: 2.5em 1.5em 0;
  font-size: 1.15em;
}
.bm-menu-wrap {
  top: 0;
}
.bm-morph-shape {
  fill: #373a47;
}
.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
}
@media screen and (min-width: 769px) {
  display: none;
}
`

const activeLinkStyle = {
  color: 'white',
}

const NavMenu = () => {
  return (
    <Header>
      <StyledLink to="/" activeStyle={activeLinkStyle}>
        <LogoImg src={Logo} />
      </StyledLink>
      <Nav>
          <LineMenu>
          <li>
            <Link to="/" activeStyle={activeLinkStyle}>
              Home
            </Link>
          </li>
          <li>
          <Link to="/gear/" activeStyle={activeLinkStyle}>
            Gear Corner
          </Link>
          </li>
          <li>
            <Link to="/about/" activeStyle={activeLinkStyle}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact/" activeStyle={activeLinkStyle}>
              Contact
            </Link>
          </li>
        </LineMenu>
          <BurgerMenu>
            <Menu right>
              <Link to="/" activeStyle={activeLinkStyle}>
                Home
              </Link>
              <Link to="/about/" activeStyle={activeLinkStyle}>
                  Gear Corner
              </Link>
              <Link to="/about/" activeStyle={activeLinkStyle}>
                About
              </Link>
              <Link to="/contact/" activeStyle={activeLinkStyle}>
                Contact
              </Link>
            </Menu>
          </BurgerMenu>
      </Nav>
      
    </Header>
  )
}

export default NavMenu
