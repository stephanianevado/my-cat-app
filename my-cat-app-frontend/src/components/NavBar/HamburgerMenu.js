import {HamburgerIcon, XIcon} from './hamburgericons'
import {useState} from 'react'
import {NavItems} from './NavItems'
import styled from 'styled-components'
import {purple} from '../reusable/colors'
import {Breakpoints} from '../reusable/Breakpoints'

const Menu = styled.div`
  background-color: ${purple};
  width: 70%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  transform: ${({open}) => (open ? 'translateX(0)' : 'translateX(100%)')};
`
const Hamburger = styled.div`
  cursor: pointer;
  z-index: 100;
  padding: 1rem;
  position: fixed;
  top: 0;
  right: 0;
`
const HamburgerWrapper = styled.div`
  ${Breakpoints.laptop} {
    display: none;
  }
`
export const HamburgerMenu = () => {
    const [open, setOpen] = useState(false)
    return (
        <HamburgerWrapper>
            <Hamburger onClick={() => setOpen(!open)}>
                {open ? <XIcon/> : <HamburgerIcon/>}
            </Hamburger>
            <Menu open={open}>
                <NavItems open={open}/>
            </Menu>
        </HamburgerWrapper>
    )
}