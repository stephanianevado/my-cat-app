import styled from 'styled-components'
import {blue, yellow} from './colors'

const TitleH5 = styled.h5`
  font-size: 2rem;
  color: ${yellow};
  b {
    color: ${blue};
  }
`

export const Title = ({number, title}) => {
    return (
        <TitleH5>
            <b>{`${number}. `}</b>
            {`${title} `}&rarr;
        </TitleH5>
    )
}