import styled from 'styled-components'
import {blue, yellow} from '../reusable/colors'
import {Title} from '../reusable/Title'
import {Breakpoints} from '../reusable/Breakpoints'
import cat from '../../assets/cat.svg'
import {Link} from "react-router-dom";

const Main = styled.main`
  padding: 0rem 2rem;
  p {
    color: ${blue};
  }
  ${Breakpoints.laptop} {
    padding: 0rem 3rem;
  }
`

const Row = styled.div`
  ${Breakpoints.laptop} {
    display: flex;
    justify-content: space-around;
  }  
`

const Column = styled.div`
  img {
    width: 100%;
  }
  a{
      text-decoration: none;
      color: ${yellow};
    }
  ${Breakpoints.laptop} {
    width: 25rem; 
  }
`

export const About = () => {
    return (
        <Main>
            <Title number='01' title='About cat app'/>

            <Row>
                <Column>
                    <p>
                        Hello! My name is Stephania Nevado. I'm a cat lover. I create this app for you. You can register
                        your cat in the community..
                    </p>
                    <p>
                        My cat app is an application to create a community where you can have important information
                        about your cat.
                    </p>
                    <p>
                        You can join our community by adding your cat's data in the <Link to="/create" target="_blank">
                        {' '}
                        Create your cat
                    </Link> section.
                    </p>
                    <p>
                        To see the cats that belong to our community you can go to the <Link to="/cats" target="_blank">
                        {' '}
                        Cats
                    </Link> section.
                    </p>
                </Column>
                <Column>
                    <img src={cat} alt='cat SVG'/>
                </Column>
            </Row>
        </Main>
    )
}