import styled from 'styled-components'
import {blue, yellow} from '../reusable/colors'
import {Breakpoints} from '../reusable/Breakpoints'
import {Link} from "react-router-dom";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-right: 4rem;
  list-style: none;
  position: relative;
  a {
    display: block;
    padding: 0.5rem 1.3rem;
    font-size: 1.25rem;
    color: ${yellow};
    text-decoration: none;
  }
  b {
    color: ${blue};
  }
  a:hover {
    color: ${blue};
  }
  ${Breakpoints.laptop} {
    a {
      font-size: 0.85rem;
    }
    flex-direction: row;
  }
`

const Li = styled.li`
  display: inherit;
`
export const NavItems = () => {
    return (
        <>
            <NavList>
                <Li>
                    <Link to='/about'>
                        <b>01.</b> About
                    </Link>
                </Li>
                <Li>
                    <Link to='/create'>
                        <b>02.</b> Create
                    </Link>
                </Li>
                <Li>
                    <Link to='/cats'>
                        <b>03.</b> Cats
                    </Link>
                </Li>
                <Li>
                    <Link to='/contact'>
                        <b>04.</b> Contact
                    </Link>
                </Li>
            </NavList>
        </>
    )
}