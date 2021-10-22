import {NavItems} from './NavItems'
import {HamburgerMenu} from './HamburgerMenu'
import {Link} from "react-router-dom";
import logo from '../../assets/logo.svg'
import styled from 'styled-components'
import {black} from '../reusable/colors'
import {Breakpoints} from '../reusable/Breakpoints'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  background-color: ${black};
`

const Logo = styled.img`
  padding: 0.8rem;
  width: 4rem;
  height: 3.5rem;
`

const Menu = styled.div`
  visibility: hidden;
  ${Breakpoints.laptop} {
    visibility: visible;
  }
`

export const NavBar = () => {
    return (
        <>
            <Nav>
                <Link to='/'>
                    <Logo src={logo} alt='logo SVG'/>
                </Link>
                <Menu>
                    <NavItems/>
                </Menu>
            </Nav>
            <HamburgerMenu/>
        </>
    )
}