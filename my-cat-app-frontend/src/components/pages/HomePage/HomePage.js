import styled from "styled-components";
import {blue, yellow} from "../../reusable/colors";
import {Breakpoints} from "../../reusable/Breakpoints";
import {HomeCard} from "./HomeCard";


const Main = styled.main`
  padding: 1rem;
  ${Breakpoints.laptop} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-right: 2rem;
    padding-left: 2rem;
  }
`
const Section = styled.section`
  padding-bottom: 1rem;
  h1, h3 {
    color: ${blue};
    font-size: 1.8rem;
  }
  h2 {
    color: ${yellow};
    font-size: 2.5rem;
  }
  ${Breakpoints.laptop} {
    padding: 0rem 20rem;
    h2 {
      font-size: 3rem;
    }
  }
`

const Row = styled.div`
  margin: 0, 1rem;
  ${Breakpoints.laptop} {
    display: flex;
    flex-wrap: wrap;
  }
`


export const HomePage = () => {
    return (
        <Main>
            <Section>
                <h1>Hi! My name is</h1>
                <h2>Stephania Nevado.</h2>
                <h3>
                    This my cat application &hearts;
                </h3>
            </Section>
            <Row>
                <HomeCard
                    href='/about'
                    number='01'
                    title='About'
                    text='Get to know us'
                />
                <HomeCard
                    href='/create'
                    number='02'
                    title='Create Cat'
                    text='Add your cat'
                />
            </Row>
            <Row>
                <HomeCard
                    href='/cats'
                    number='03'
                    title='Cats'
                    text='Our community'
                />
                <HomeCard
                    href='/contact'
                    number='04'
                    title='Contact'
                    text='Any question? Get in touch!'
                />
            </Row>
        </Main>
    )
}