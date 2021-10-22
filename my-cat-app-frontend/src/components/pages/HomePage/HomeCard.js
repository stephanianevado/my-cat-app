import styled from 'styled-components'
import {blue, yellow} from '../../reusable/colors'
import {Breakpoints} from '../../reusable/Breakpoints'
import {Link} from "react-router-dom";

const CardWrapper = styled.div`
  width: 15rem;
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: ${yellow};
  text-decoration: none;
  border: 2px solid ${yellow};
  border-radius: 20px;
  transition: color 0.15s ease, border-color 0.15s ease;
  b {
    color: ${blue};
  }
  &:hover {
    color: ${blue};
    border-color: ${blue};
    cursor: pointer;
  }
  ${Breakpoints.laptop} {
    width: 20rem;
    font-size: 2rem;
  }
`
const CardLink = styled(Link)`   
  text-decoration: none;
  color: ${yellow};
  &:hover {
    color: ${blue};
  }
  h5 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }
  p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }
`
export const HomeCard = ({number, title, text, href}) => {
    return (
        <CardWrapper>
            <CardLink to={href}>
                <h5>
                    <b>{`${number}. `}</b>
                    {`${title} `}&rarr;
                </h5>
                <p>{text}</p>
            </CardLink>
        </CardWrapper>
    )
}