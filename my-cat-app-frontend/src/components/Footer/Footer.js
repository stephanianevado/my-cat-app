import styled from 'styled-components'
import {blue, yellow} from '../reusable/colors'
import {
    CodepenIcon,
    EmailIcon,
    FacebookIcon,
    GitHubIcon,
    InstagramIcon,
    LinkedinIcon,
    ReplitIcon,
} from './footericons'


const Container = styled.footer`
  a {
    color: ${yellow};
    margin: 10px;
    letter-spacing: 0.2em;
    font-size: 0.8rem;
  }
  a:hover {
    color: ${blue};
  }
`
const Contact = styled.div`
  text-align: center;
  margin: 2rem 0;
`

export const Footer = () => {
    return (
        <Container>
            <Contact>
                <a href='https://github.com/stephanianevado' target='_blank' rel='noreferrer'>
                    <GitHubIcon/>
                </a>
                <a href='https://www.linkedin.com/in/stephanianevado/' target='_blank' rel='noreferrer'>
                    <LinkedinIcon/>
                </a>
                <a href='https://www.instagram.com/stephanianevado/' target='_blank' rel='noreferrer'>
                    <InstagramIcon/>
                </a>
                <a href='https://www.facebook.com/nevadostephania' target='_blank' rel='noreferrer'>
                    <FacebookIcon/>
                </a>
                <a href='https://codepen.io/stephanianevado' target='_blank' rel='noreferrer'>
                    <CodepenIcon/>
                </a>
                <a href='https://replit.com/@stephanianevado' target='_blank' rel='noreferrer'>
                    <ReplitIcon/>
                </a>
                <a href='mailto:stephania.arantxa@gmail.com' target='_blank' rel='noreferrer'>
                    <EmailIcon/>
                </a>
            </Contact>
        </Container>
    )
}