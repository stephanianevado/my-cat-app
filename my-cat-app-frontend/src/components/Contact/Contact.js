import styled from "styled-components";
import {Breakpoints} from "../reusable/Breakpoints";
import {blue, yellow} from "../reusable/colors";
import {Title} from "../reusable/Title";

const Main = styled.main`
  padding: 0rem 2rem;
  ${Breakpoints.laptop} {
    padding: 0rem 3rem;
  }
`
const Row = styled.div`
  ${Breakpoints.laptop} {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`
const Column = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  h4 {
    color: ${yellow};
  }
  p {
    color: ${blue};
  }
  ${Breakpoints.laptop} {
    padding: 1rem;
    width: 25rem;
  }
`

const Button = styled.button`
  margin: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 1px solid ${blue};
  border-radius: 5px;
  width: 10rem;
  height: 3rem;
  a {
    display: inline-block;
    text-decoration: none;
    color: ${yellow};
  }
  a:hover {
    color: ${yellow};
    background-color: ${blue};
  }
  &:hover {
    background-color: ${blue};
    opacity: 0.5;
  }
`
export const Contact = () => {
    return (
        <Main>
            <Title number='04' title='Contact us'/>
            <Row>
                <Column>
                    <h4>Get in touch</h4>
                    <p>
                        I'm currently looking for new improvements and my inbox is always
                        open.
                    </p>
                    <p>
                        I love to code - it was an amazing discovery for me. I’m really
                        eager to hear from you. You can start contributing with our catmmunity.
                    </p>
                    <Button>
                        <a href='mailto:my-cat-app@gmail.com' target='_blank' rel='noreferrer'>
                            Say miau!
                        </a>
                    </Button>
                </Column>
            </Row>
        </Main>
    )
}