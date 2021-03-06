import styled from 'styled-components'
import {blue} from '../reusable/colors'

const Svg = styled.svg`
  &:hover path,
  &:active path {
    fill: ${blue};
    transition: background-color 0.5s;
  }
`

export const HamburgerIcon = () => (
    <svg viewBox="0 0 24 24" width={24}>
        <g id='24 / basic / menu'>
            <path
                fill={blue}
                id="icon"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22 7V5H2V7H22ZM22 11V13H2V11H22ZM22 17V19H2V17H22Z"
            />
        </g>
    </svg>
)

export const XIcon = () => {
    return (
        <Svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0)">
                <path
                    d="M16.5491 12L23.372 7.30922C24.2093 6.73359 24.2093 5.80031 23.372 5.22422L21.8557 4.18172C21.0184 3.60609 19.6609 3.60609 18.823 4.18172L12 8.8725L5.17705 4.18172C4.33977 3.60609 2.98227 3.60609 2.14432 4.18172L0.627955 5.22422C-0.209318 5.79984 -0.209318 6.73312 0.627955 7.30922L7.45091 12L0.627955 16.6908C-0.209318 17.2664 -0.209318 18.1997 0.627955 18.7758L2.14432 19.8183C2.98159 20.3939 4.33977 20.3939 5.17705 19.8183L12 15.1275L18.823 19.8183C19.6602 20.3939 21.0184 20.3939 21.8557 19.8183L23.372 18.7758C24.2093 18.2002 24.2093 17.2669 23.372 16.6908L16.5491 12Z"
                    fill="#E6F1FF"
                />
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect width="24" height="24" fill="white"/>
                </clipPath>
            </defs>
        </Svg>
    )
}